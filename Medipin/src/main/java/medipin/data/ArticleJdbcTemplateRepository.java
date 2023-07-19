package medipin.data;

import medipin.models.Article;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class ArticleJdbcTemplateRepository implements ArticleRepository {
    private final JdbcTemplate jdbcTemplate;

    public ArticleJdbcTemplateRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public List<Article> getAll() {
        return null;
    }

    @Override
    public List<Article> getByTopic(String topic) {
        return null;
    }

    @Override
    public Article getById(int articleId) {
        return null;
    }

    @Override
    public Article add(Article article) {
        return null;
    }

    @Override
    public boolean update(Article article) {
        return false;
    }

    @Override
    public boolean deleteById(int articleId) {
        return false;
    }
}
