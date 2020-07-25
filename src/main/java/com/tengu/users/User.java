package com.tengu.users;

import com.tengu.parties.Party;
import lombok.*;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.*;
import java.util.Collection;
import java.util.Collections;
import java.util.UUID;

@Getter
@Setter
@Builder
@EqualsAndHashCode
@NoArgsConstructor
@AllArgsConstructor
@Entity(name = "Users")
@Table(name="tengu_user", uniqueConstraints = {
		@UniqueConstraint(columnNames = {
				"name"
		}),
		@UniqueConstraint(columnNames = {
				"email"
		})
})
public class User {
	public static enum UserRole {
		ADMIN, USER, ORGANIZER;
        public static UserRole getById(String id){
            for(UserRole e : values()) {
                if(e.name().equalsIgnoreCase(id)) return e;
            }
            return USER;
        }

	}

	@Id
	@GeneratedValue()
	private UUID id;

	private String name;

	private String email;

	private String password;

	@ManyToOne(fetch = FetchType.LAZY, optional = true)
	@JoinColumn(name = "party_id", nullable = true)
	private Party party;

	@Builder.Default
	private UserRole userRole = UserRole.USER;

	@Builder.Default
	private Boolean locked = false;

	@Builder.Default
	private Boolean enabled = false;

	public Party getParty() {
		return party;
	}
}
