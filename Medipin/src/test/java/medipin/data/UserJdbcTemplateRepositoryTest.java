package medipin.data;

import medipin.models.User;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.NONE)
class UserJdbcTemplateRepositoryTest {

    @Autowired
    UserJdbcTemplateRepository repository;

    @Autowired
    KnownGoodState knownGoodState;

    @BeforeEach
    void setup() { knownGoodState.set(); }

    @Test
    void shouldGetUserByValidId() {
        User user = repository.getById(1);
        assertNotNull(user);
        assertEquals(user.getName(), "john smith");
    }

    @Test
    void shouldNotGetUserByInvalidId() {
        User user = repository.getById(100);
        assertNull(user);
    }

    @Test
    void shouldGetUserByValidUsername() {
        User user = repository.getByUsername("john@smith.com");
        assertNotNull(user);
        assertEquals(user.getUserId(), 1);
    }

    @Test
    void shouldNotGetUserByInvalidUsername() {
        User user = repository.getByUsername("non@existent.com");
        assertNull(user);
    }

    @Test
    void shouldAddValidUser() {
        User user = new User(0, "testing user add in java",
                "testing@add.java", "fake password", true,
                List.of("USER"));
        User result = repository.add(user);
        assertNotNull(result);
        assertTrue(result.getUserId() > 0);
    }

    @Test
    void shouldUpdateValidUser() {
        User user = new User(2, "testing update in java",
                "testing@update.java", "fake password", false,
                List.of("ADMIN"));
        assertTrue(repository.update(user));
    }

    @Test
    void shouldNotUpdateMissingUser() {
        User user = new User(100, "testing update in java",
                "testingfake@update.java", "fake password", false,
                List.of("ADMIN"));
        assertFalse(repository.update(user));
    }

    @Test
    void shouldDeleteValidUser() {
        assertTrue(repository.deleteById(3));
    }

    @Test
    void shouldNotDeleteMissingUser() {
        assertFalse(repository.deleteById(100));
    }
}