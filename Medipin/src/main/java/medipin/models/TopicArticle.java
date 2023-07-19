package medipin.models;

import java.util.Objects;

public class TopicArticle {
    private int topicArticleId;
    private int topicId;
    private int articleId;

    public TopicArticle() {}

    public TopicArticle(int topicArticleId, int topicId, int articleId) {
        this.topicArticleId = topicArticleId;
        this.topicId = topicId;
        this.articleId = articleId;
    }

    public int getTopicArticleId() {
        return topicArticleId;
    }

    public void setTopicArticleId(int topicArticleId) {
        this.topicArticleId = topicArticleId;
    }

    public int getTopicId() {
        return topicId;
    }

    public void setTopicId(int topicId) {
        this.topicId = topicId;
    }

    public int getArticleId() {
        return articleId;
    }

    public void setArticleId(int articleId) {
        this.articleId = articleId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        TopicArticle that = (TopicArticle) o;
        return topicArticleId == that.topicArticleId && topicId == that.topicId && articleId == that.articleId;
    }

    @Override
    public int hashCode() {
        return Objects.hash(topicArticleId, topicId, articleId);
    }
}
