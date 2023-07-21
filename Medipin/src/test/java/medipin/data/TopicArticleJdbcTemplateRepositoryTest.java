package medipin.data;

import medipin.models.TopicArticle;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.NONE)
class TopicArticleJdbcTemplateRepositoryTest {

    @Autowired
    TopicArticleJdbcTemplateRepository repository;

    @Autowired
    KnownGoodState knownGoodState;

    @BeforeEach
    void setup() { knownGoodState.set(); }

    @Test
    void shouldGetAllByExistingTopic() {
        List<TopicArticle> topicArticles = repository.getByTopicId(1);
        assertNotNull(topicArticles);
        assertTrue(topicArticles.size() > 0);
    }

    @Test
    void shouldNotGetByMissingTopic() {
        List<TopicArticle> topicArticles = repository.getByTopicId(100);
        assertEquals(topicArticles.size(), 0);
    }

    @Test
    void shouldGetEmptyFromExistingTopicWithNoArticles() {
        List<TopicArticle> topicArticles = repository.getByTopicId(2);
        assertEquals(topicArticles.size(), 0);
    }

    @Test
    void shouldAddValidTopicArticle() {
        TopicArticle topicArticle = new TopicArticle(1, 3);
        assertTrue(repository.add(topicArticle));
    }

    @Test
    void shouldDeleteExistingUserTopic() {
        assertTrue(repository.deleteByKey(3, 1));
    }

    @Test
    void shouldNotDeleteMissingUserTopic() {
        assertFalse(repository.deleteByKey(100, 100));
    }
}