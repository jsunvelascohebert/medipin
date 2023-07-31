package medipin.data;

import medipin.data.mappers.ArticleMapper;
import medipin.models.Article;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.sql.PreparedStatement;
import java.sql.Statement;
import java.util.List;

@Repository
public class ArticleJdbcTemplateRepository implements ArticleRepository {
    private final JdbcTemplate jdbcTemplate;

    public ArticleJdbcTemplateRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public List<Article> getAll() {
        final String sql = "select article_id, title, `description`, url, " +
                "date_published, publisher from article;";
        return jdbcTemplate.query(sql, new ArticleMapper());
    }

    @Override
    @Transactional
    public Article getById(int articleId) {
        final String sql = "select article_id, title, `description`, url, " +
                "date_published, publisher " +
                "from article " +
                "where article_id = ?;";
        return jdbcTemplate.query(sql, new ArticleMapper(), articleId)
                .stream().findAny().orElse(null);
    }

    @Override
    public Article add(Article article) {
        final String sql =
                "insert into article " +
                "(title, `description`, url, date_published, publisher) " +
                "values (?, ?, ?, ?, ?);";

        KeyHolder keyHolder = new GeneratedKeyHolder();
        int rowsAffected = jdbcTemplate.update(connection -> {
            PreparedStatement ps = connection.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);
            ps.setString(1, article.getTitle());
            ps.setString(2, article.getDescription());
            ps.setString(3, article.getUrl());
            ps.setDate(4, article.getDatePublished());
            ps.setString(5, article.getPublisher());
            return ps;
        }, keyHolder);
        if (rowsAffected <= 0) {
            return null;
        }
        article.setArticleId(keyHolder.getKey().intValue());
        return article;
    }

    @Override
    public boolean update(Article article) {
        final String sql =
                "update article set " +
                    "title = ?, " +
                    "`description` = ?, " +
                    "url = ?, " +
                    "date_published = ?, " +
                    "publisher = ? " +
                    "where article_id = ?;";

        return jdbcTemplate.update(sql,
                article.getTitle(),
                article.getDescription(),
                article.getUrl(),
                article.getDatePublished(),
                article.getPublisher(),
                article.getArticleId()) > 0;
    }

    @Override
    @Transactional
    public boolean deleteById(int articleId) {
        final String sql =
                "delete from article " +
                "where article_id = ?;";
        return jdbcTemplate.update(sql, articleId) > 0;
    }

    @Override
    @Transactional
    public boolean isAttachedToTopicArticle(int articleId) {
        final String sql = """
                select count(*)
                from topic_article
                where article_id = ?;""";

        try {
            return jdbcTemplate.queryForObject(sql, Integer.class, articleId) > 0;
        } catch (Exception e) {
            return false;
        }
    }

    @Override
    @Transactional
    public boolean isAttachedToUTAN(int articleId) {
        final String sql = """
            select count(*)
            from user_topic_article_note
            where article_id = ?;""";

        try {
            return jdbcTemplate.queryForObject(sql, Integer.class, articleId) > 0;
        } catch (Exception e) {
            return false;
        }
    }
}
