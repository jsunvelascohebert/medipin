package medipin.data;

import medipin.models.Article;

import java.util.List;

public interface ArticleRepository {

    List<Article> getAll();
    List<Article> getByTopic(String topic);
    Article getById(int articleId);
    Article add(Article article);
    boolean update(Article article);
    boolean deleteById(int articleId);

}
