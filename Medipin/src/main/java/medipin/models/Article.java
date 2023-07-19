package medipin.models;

import java.sql.Date;
import java.util.Objects;

public class Article {

    private int articleId;
    private String title;
    private String description;
    private String url;
    private Date datePublished;
    private String publisher;

    public Article() {}

    public Article(int articleId, String title, String description, String url, Date datePublished, String publisher) {
        this.articleId = articleId;
        this.title = title;
        this.description = description;
        this.url = url;
        this.datePublished = datePublished;
        this.publisher = publisher;
    }

    public int getArticleId() {
        return articleId;
    }

    public void setArticleId(int articleId) {
        this.articleId = articleId;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public Date getDatePublished() {
        return datePublished;
    }

    public void setDatePublished(Date datePublished) {
        this.datePublished = datePublished;
    }

    public String getPublisher() {
        return publisher;
    }

    public void setPublisher(String publisher) {
        this.publisher = publisher;
    }

    @Override
    public String toString() {
        return "Article{" +
                "articleId=" + articleId +
                ", title='" + title + '\'' +
                ", description='" + description + '\'' +
                ", url='" + url + '\'' +
                ", datePublished=" + datePublished +
                ", publisher='" + publisher + '\'' +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Article article = (Article) o;
        return articleId == article.articleId && Objects.equals(title, article.title) && Objects.equals(description, article.description) && Objects.equals(url, article.url) && Objects.equals(datePublished, article.datePublished) && Objects.equals(publisher, article.publisher);
    }

    @Override
    public int hashCode() {
        return Objects.hash(articleId, title, description, url, datePublished, publisher);
    }
}
