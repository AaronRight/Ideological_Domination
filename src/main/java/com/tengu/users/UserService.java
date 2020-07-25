package com.tengu.users;

import lombok.AllArgsConstructor;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

@org.springframework.stereotype.Service
@AllArgsConstructor
public class UserService {

	private final UserRepository userRepository;

	private final ConfirmationTokenService confirmationTokenService;

	private final EmailSenderService emailSenderService;

	void sendConfirmationMail(String userMail, String token) {

		final SimpleMailMessage mailMessage = new SimpleMailMessage();
		mailMessage.setTo(userMail);
		mailMessage.setSubject("Mail Confirmation Link!");
		mailMessage.setFrom("<MAIL>");
		mailMessage.setText(
				"Thank you for registering. Please click on the below link to activate your account." + "http://localhost:8080/sign-up/confirm?token="
						+ token);

		emailSenderService.sendEmail(mailMessage);
	}

	public User loadUserByUsername(String email) throws UsernameNotFoundException {
		return userRepository.findByEmail(email).get();
	}

	public void signUpUser(User user) {
		user.setPassword(user.getPassword());

		final User createdUser = userRepository.save(user);

		final ConfirmationToken confirmationToken = new ConfirmationToken(user);

		confirmationTokenService.saveConfirmationToken(confirmationToken);

		sendConfirmationMail(user.getEmail(), confirmationToken.getConfirmationToken());

	}

	void confirmUser(ConfirmationToken confirmationToken) {

		final User user = confirmationToken.getUser();

		user.setEnabled(true);

		userRepository.save(user);

		confirmationTokenService.deleteConfirmationToken(confirmationToken.getId());

	}

	public boolean canRegister(String nickName, String email) {
		if (!userRepository.findByName(nickName).isEmpty()) {
			return false;
		}
		if (!userRepository.findByEmail(email).isEmpty()) {
			return false;
		}
		return true;

	}

	public User getUserByEmail(String email){
		return userRepository.findByEmail(email).get();
	}

	public User save(User user){
		return userRepository.save(user);
	}

	Iterable<User> findAll(){
		return userRepository.findAll();
	}
}
