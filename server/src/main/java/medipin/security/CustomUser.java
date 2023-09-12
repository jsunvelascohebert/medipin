package medipin.security;

import org.springframework.security.core.GrantedAuthority;

import java.util.Collection;

public class CustomUser extends org.springframework.security.core.userdetails.User {
    private final int userId;

    public CustomUser(String username, String password, Collection<? extends GrantedAuthority> authorities, int userId) {
        super(username, password, authorities);
        this.userId = userId;
    }

    public int getUserId() {
        return userId;
    }
}

