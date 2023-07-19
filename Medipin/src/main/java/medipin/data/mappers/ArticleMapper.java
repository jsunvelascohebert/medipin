package medipin.data.mappers;

import medipin.models.Article;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class ArticleMapper implements RowMapper<Article> {
    @Override
    public Article mapRow(ResultSet rs, int rowNum) throws SQLException {
        Article article = new Article();
        article.setArticleId(rs.getInt("article_id"));
        article.setTitle(rs.getString("title"));
        article.setDescription(rs.getString("description"));
        article.setUrl(rs.getString("url"));
        article.setDatePublished(rs.getDate("date_published"));
        article.setPublisher(rs.getString("publisher"));
        return article;
    }
}
