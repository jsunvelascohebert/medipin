package medipin.data;

import medipin.models.Article;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.sql.Date;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.NONE)
class ArticleJdbcTemplateRepositoryTest {
    @Autowired
    ArticleJdbcTemplateRepository repository;

    @Autowired
    KnownGoodState knownGoodState;

    @BeforeEach
    void setup(){
        knownGoodState.set();
    }

    @Test
    void shouldGetAllArticles() {
        List<Article> articles = repository.getAll();
        assertNotNull(articles);
        assertTrue(articles.size() > 0);
    }

    @Test
    void shouldGetByValidId() {
        Article article = repository.getById(1);
        assertNotNull(article);
        assertEquals(article.getTitle(), "Diabetes");
    }

    @Test
    void shouldNotGetByInvalidId() {
        Article article = repository.getById(100);
        assertNull(article);
    }

    @Test
    void shouldAddValidArticle() {
        Article article = new Article(0, "Test add",
                "Testing description",
                "http://www.test.com/testing/article",
                Date.valueOf("2023-07-19"),
                "Test Publisher");

        Article result = repository.add(article);
        assertNotNull(result);
        assertTrue(result.getArticleId() > 0);
    }

    @Test
    void shouldUpdateValidArticle() {
        Article article = new Article(2, "Test Update",
                "Update Testing",
                "http://updatetesting.com",
                Date.valueOf("2023-10-20"),
                "update publisher test");
        boolean result = repository.update(article);
        assertTrue(result); // manually tested update in database
    }

    @Test
    void shouldUpdateValidArticleWithoutRequiredParts() {
        Article article = new Article(2, "Test Update",
                "Update Testing",
                "http://updatetesting.com",
                null, null);
        assertTrue(repository.update(article));
    }

    @Test
    void shouldNotUpdateMissingArticle() {
        Article article = new Article(100, "Test Update",
                "Update Testing",
                "http://updatetesting.com",
                Date.valueOf("2023-10-20"),
                "update publisher test");
        assertFalse(repository.update(article));
    }

    @Test
    void shouldDeleteExistingArticle() {
        assertTrue(repository.deleteById(3));
    }

    @Test
    void shouldNotDeleteMissingArticle() {
        assertFalse(repository.deleteById(100));
    }
}