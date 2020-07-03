package com.tengu.users;

import com.tengu.parties.Party;
import com.tengu.security.jwt.JwtProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.time.LocalDate;
import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping("api/users")
public class UserController {

	@Autowired
	AuthenticationManager authenticationManager;

	@Autowired
	PasswordEncoder encoder;

	@Autowired
	JwtProvider jwtProvider;

	@Autowired
	private UserService userService;

	private ConfirmationTokenService confirmationTokenService;

	public UserController(UserService userService, ConfirmationTokenService confirmationTokenService){}

	public ConfirmationTokenService getConfirmationTokenService() {
		return confirmationTokenService;
	}

	@GetMapping(value = {"", "/"})
	public Iterable<User> findAll(){
		return this.userService.findAll();
	}

	@GetMapping("/{email}")
	public ResponseEntity<User> getUser(@PathVariable String email)
	{
		return ResponseEntity.ok().body(this.userService.getUserByEmail(email));
	}

	@PostMapping("/auth/signin")
	public ResponseEntity<?> authenticateUser(@Valid @RequestBody com.tengu.controllers.message.request.LoginForm loginRequest) {

		Authentication authentication = authenticationManager.authenticate(
				new UsernamePasswordAuthenticationToken(loginRequest.getEmail(), loginRequest.getPassword()));

		SecurityContextHolder.getContext().setAuthentication(authentication);

		String jwt = jwtProvider.generateJwtToken(authentication);
		UserDetails userDetails = (UserDetails) authentication.getPrincipal();

		User userEntity = this.userService.getUserByEmail(loginRequest.getEmail());
		this.userService.save(userEntity);

		return ResponseEntity.ok(new com.tengu.controllers.message.response.JwtResponse(jwt, userDetails.getUsername(), userDetails.getAuthorities()));
	}

	@PostMapping("/auth/signup")
	public ResponseEntity<?> registerUser(@Valid @RequestBody com.tengu.controllers.message.request.SignUpForm signUpRequest) {
		if(!this.userService.canRegister(signUpRequest.getNickName(), signUpRequest.getEmail()))
			return new ResponseEntity<>(new com.tengu.controllers.message.response.ResponseMessage("Email / Nickname is already in use"),
					HttpStatus.BAD_REQUEST);

		/* id, name, email, password,  party, userRole, locked, enabled */
		User user = new User(
				UUID.randomUUID(),
				signUpRequest.getNickName(),
				signUpRequest.getEmail(),
				encoder.encode(signUpRequest.getPassword()),
				null,
				User.UserRole.getById(signUpRequest.getRole()),
				false,
				true
		);
		this.userService.save(user);
		return new ResponseEntity<>(new com.tengu.controllers.message.response.ResponseMessage("User registered successfully!"), HttpStatus.OK);
	}

	@GetMapping("/auth/sign-up/confirm")
	String confirmMail(@RequestParam("token") String token) {

		Optional<ConfirmationToken> optionalConfirmationToken = confirmationTokenService.findConfirmationTokenByToken(token);

		optionalConfirmationToken.ifPresent(userService::confirmUser);

		return "redirect:/sign-in";
	}



}
