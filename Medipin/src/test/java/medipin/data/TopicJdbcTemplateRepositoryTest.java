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
        Topic topic = repository.getById(1);
        assertNotNull(topic);
        assertEquals(topic.getName(), "Personal");
    }

    @Test
    void shouldNotGetByInvalidId() {
        Topic topic = repository.getById(100);
        assertNull(topic);
    }

    @Test
    void shouldAddValidTopic() {
        Topic topic = new Topic(0, "Testing Add in Java");
        Topic result = repository.add(topic);
        assertNotNull(result);
        assertTrue(result.getTopicId() > 0);
    }

    @Test
    void shouldUpdateValidTopic() {
        Topic topic = new Topic(2, "Testing update in java");
        assertTrue(repository.update(topic));
    }

    @Test
    void shouldNotUpdateMissingTopic() {
        Topic topic = new Topic(100, "Missing topic to update");
        assertFalse(repository.update(topic));
    }

    @Test
    void shouldDeleteExistingTopic() {
        assertTrue(repository.deleteById(3));
    }

    @Test
    void shouldNotDeleteMissingTopic() {
        assertFalse(repository.deleteById(100));
    }
}