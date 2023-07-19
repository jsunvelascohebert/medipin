package medipin.data;

import medipin.models.Topic;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.NONE)
class TopicJdbcTemplateRepositoryTest {

    @Autowired
    TopicJdbcTemplateRepository repository;

    @Autowired
    KnownGoodState knownGoodState;

    @BeforeEach
    void setup(){
        knownGoodState.set();
    }

    @Test
    void shouldGetAllTopics() {
        List<Topic> topics = repository.getAll();
        assertNotNull(topics);
        assertTrue(topics.size() > 0);
    }

    @Test
    void shouldGetByValidTopicId() {

    }

    @Test
    void shouldNotGetByInvalidId() {

    }

    @Test
    void shouldAddValidTopic() {

    }

    @Test
    void shouldUpdateValidTopic() {

    }

    @Test
    void shouldNotUpdateMissingTopic() {

    }

    @Test
    void shouldDeleteExistingTopic() {

    }

    @Test
    void shouldNotDeleteMissingTopic() {

    }
}