package medipin.domain;

import medipin.data.UserRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.NONE)
class UserServiceTest {

    @Autowired
    UserService service;

    @MockBean
    UserRepository repository;

    @Test
    void shouldGetByValidId() {

    }

    @Test
    void shouldNotGetByInvalidId() {

    }

    @Test
    void shouldGetByValidUsername() {

    }

    @Test
    void shouldNotGetByInvalidUsername() {

    }

    @Test
    void shouldCatchMissingCredentials() {
        // use add in this scenario to test

        // missing or blank name
        // missing or blank username
        // missing or blank password

        // name > 150 characters
        // username > 50 characters
        // invalid password formatting
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