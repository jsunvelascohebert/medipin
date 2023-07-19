package medipin.data;

import medipin.models.Article;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface ArticleRepository {

    List<Article> getAll();
    Article getById(int articleId);
    Article add(Article article);
    boolean update(Article article);

    boolean deleteById(int articleId);

}
