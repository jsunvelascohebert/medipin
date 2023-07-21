package medipin.data.mappers;

import medipin.models.User;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

public class UserMapper implements RowMapper<User> {

    private final List<String> roles;

    public UserMapper(List<String> roles) { this.roles = roles; }


    @Override
    public User mapRow(ResultSet rs, int rowNum) throws SQLException {
        return new User(
            rs.getInt("user_id"),
            rs.getString("name"),
            rs.getString("username"),
            rs.getString("password_hash"),
            rs.getBoolean("enabled"),
            roles
        );
    }
}
