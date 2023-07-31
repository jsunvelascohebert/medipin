package medipin.data.mappers;

import medipin.models.Article;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

import java.sql.Date;
import java.time.LocalDate;

public class ArticleMapper implements RowMapper<Article> {
    @Override
    public Article mapRow(ResultSet rs, int rowNum) throws SQLException {
        Article article = new Article();
        article.setArticleId(rs.getInt("article_id"));
        article.setTitle(rs.getString("title"));
        article.setDescription(rs.getString("description"));
        article.setUrl(rs.getString("url"));
        Date datePublished = rs.getObject("date_published", Date.class);
        if (datePublished != null) {
            article.setDatePublished(datePublished.toLocalDate());
        }
        article.setPublisher(rs.getString("publisher"));
        return article;
    }
}
