package medipin.domain;

import medipin.data.UserRepository;
import medipin.models.User;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.anyChar;
import static org.mockito.Mockito.when;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.NONE)
class UserServiceTest {

    private List<User> users;

    @Autowired
    UserService service;

    @MockBean
    UserRepository repository;

    @BeforeEach
    void setup() {
        users = List.of(
                new User(1, "user one", "user1", "user1Password!",
                        true, List.of("USER")),
                new User(2, "user two", "user2", "user2Password!",
                        true, List.of("USER")),
                new User(3, "user three", "user3", "user3Password!",
                        true, List.of("USER"))
        );
    }

    @Test
    void shouldGetByValidId() {
        User user = new User(1, "user one", "user1", "user1Password!",
                true, List.of("USER"));
        when(repository.getById(1)).thenReturn(user);

        Result<User> actual = service.getById(1);
        assertTrue(actual.isSuccess());
        assertEquals(user, actual.getPayload());
    }

    @Test
    void shouldNotGetByInvalidId() {
        when(repository.getById(100)).thenReturn(null);

        Result<User> actual = service.getById(100);
        assertFalse(actual.isSuccess());
        assertEquals(actual.getType(), ResultType.NOT_FOUND);
        assertTrue(actual.getMessages().contains("User id not found"));
    }

    @Test
    void shouldGetByValidUsername() {
        User user = new User(1, "user one", "user1", "user1Password!",
                true, List.of("USER"));
        when(repository.getByUsername("user1")).thenReturn(user);

        Result<User> actual = service.getByUsername("user1");
        assertTrue(actual.isSuccess());
        assertEquals(user, actual.getPayload());
    }

    @Test
    void shouldNotGetByInvalidUsername() {
        when(repository.getByUsername("missing")).thenReturn(null);

        Result<User> actual = service.getByUsername("missing");
        assertFalse(actual.isSuccess());
        assertEquals(actual.getType(), ResultType.NOT_FOUND);
        assertTrue(actual.getMessages().contains("Username not found"));
    }

    @Test
    void shouldCatchMissingCredentials() {
        // use add in this scenario to test

        // null or blank name
        // null or blank username
        // null or blank password
    }

    @Test
    void shouldCatchInvalidCredentials() {
        // use add in this scenario to test

        // name > 150 characters
        // username > 50 characters
        // invalid password formatting
    }

    @Test
    void shouldAddValidUser() {

    }

    @Test
    void shouldNotAddDuplicateUser() {
        // duplicate username
    }

    @Test
    void shouldUpdateValidUser() {

    }

    @Test
    void shouldNotUpdateInvalidUser() {
        // user id <= 0
        // user id not found
    }

    @Test
    void shouldDeleteExistingUser() {

    }

    @Test
    void shouldNotDeleteMissingUser() {
        // user id not found
    }
}