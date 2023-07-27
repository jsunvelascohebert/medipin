package medipin.domain;

import medipin.data.ArticleRepository;
import medipin.models.Article;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import java.sql.Date;
import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.NONE)
class ArticleServiceTest {

    @Autowired
    ArticleService service;

    @MockBean
    ArticleRepository repository;

    @Test
    void shouldFindAllArticles() {
        List<Article> articles = List.of(
            new Article(1, "test", "testing article", "http://test.com",
                    Date.valueOf("2023-10-20"), null)
        );

        when(repository.getAll()).thenReturn(articles);
        Result<List<Article>> result = service.getAll();
        assertTrue(result.isSuccess());
        assertEquals(result.getPayload(), articles);
    }

    @Test
    void shouldReturnMessageWhenNoArticlesFound() {
        when(repository.getAll()).thenReturn(null);
        Result<List<Article>> result = service.getAll();
        assertFalse(result.isSuccess());
        assertEquals(result.getType(), ResultType.NOT_FOUND);
        assertTrue(result.getMessages().contains("No articles found"));

        when(repository.getAll()).thenReturn(new ArrayList<>());
        result = service.getAll();
        assertFalse(result.isSuccess());
        assertEquals(result.getType(), ResultType.NOT_FOUND);
        assertTrue(result.getMessages().contains("No articles found"));
    }

    @Test
    void shouldFindByValidId() {
        Article article = new Article(1, "test", "testing article",
                "http://test.com", Date.valueOf("2023-10-20"), null);
        when(repository.getById(1)).thenReturn(article);

        Result<Article> result = service.getById(1);
        assertTrue(result.isSuccess());
        assertEquals(result.getPayload(), article);
    }

    @Test
    void shouldNotFindByMissingId() {
        when(repository.getById(100)).thenReturn(null);
        Result<Article> result = service.getById(100);
        assertFalse(result.isSuccess());
        assertEquals(result.getType(), ResultType.NOT_FOUND);
        assertTrue(result.getMessages().contains("Could not find article " +
                "with id 100"));
    }

    @Test
    void shouldValidateCorrectly() {
        Result<Article> result = service.add(null);
        assertFalse(result.isSuccess());
        assertEquals(result.getType(), ResultType.INVALID);
        assertTrue(result.getMessages().contains("Article cannot be null"));

        Article invalid = new Article(0, null, null, null, null, null);
        result = service.add(invalid);
        assertFalse(result.isSuccess());
        assertEquals(result.getType(), ResultType.INVALID);
        assertEquals(result.getMessages().size(), 3);
        assertTrue(result.getMessages().contains("Article name cannot be blank"));
        assertTrue(result.getMessages().contains("Article description cannot " +
                "be blank"));
        assertTrue(result.getMessages().contains("Article URL cannot be " +
                "blank"));
    }

    @Test
    void shouldAddValidArticle() {
        Article article = new Article(0, "test", "testing article",
                "http://test.com", Date.valueOf("2023-10-20"), null);
        Article expected = new Article(1, "test", "testing article",
                "http://test.com", Date.valueOf("2023-10-20"), null);
        when(repository.add(article)).thenReturn(expected);

        Result<Article> result = service.add(article);
        assertTrue(result.isSuccess());
        assertEquals(result.getPayload(), expected);
    }

    @Test
    void shouldNotAddInvalidArticleId() {
        Article article = new Article(1, "test", "testing article",
                "http://test.com", Date.valueOf("2023-10-20"), null);
        Result<Article> result = service.add(article);
        assertFalse(result.isSuccess());
        assertEquals(result.getType(), ResultType.INVALID);
        assertTrue(result.getMessages().contains("Cannot add article without " +
                "id of 0"));
    }

    @Test
    void shouldUpdateValidArticle() {
        Article article = new Article(1, "test", "testing article",
                "http://test.com", Date.valueOf("2023-10-20"), null);
        when(repository.update(article)).thenReturn(true);
        Result<Article> result = service.update(article);
        assertTrue(result.isSuccess());
    }

    @Test
    void shouldNotUpdateInvalidArticle() {
        // invalid id
        Article article = new Article(-1, "test", "testing article",
                "http://test.com", Date.valueOf("2023-10-20"), null);
        Result<Article> result = service.update(article);
        assertFalse(result.isSuccess());
        assertEquals(result.getType(), ResultType.INVALID);
        assertTrue(result.getMessages().contains("Article id must be set for " +
                "updating"));

        // missing id
        article = new Article(100, "test", "testing article",
                "http://test.com", Date.valueOf("2023-10-20"), null);
        when(repository.update(article)).thenReturn(false);
        result = service.update(article);
        assertFalse(result.isSuccess());
        assertEquals(result.getType(), ResultType.NOT_FOUND);
        assertTrue(result.getMessages().contains("Could not update missing " +
                "article with id 100"));
    }

    @Test
    void shouldDeleteValidId() {
        when(repository.deleteById(1)).thenReturn(true);
        Result<Article> result = service.deleteById(1);
        assertTrue(result.isSuccess());
    }

    @Test
    void shouldNotDeleteByMissingId() {
        when(repository.deleteById(100)).thenReturn(false);
        Result<Article> result = service.deleteById(100);
        assertFalse(result.isSuccess());
        assertEquals(result.getType(), ResultType.NOT_FOUND);
        assertTrue(result.getMessages().contains("Article id 100 not found, " +
                "cannot delete"));
    }
}