package medipin.models;

import java.util.Objects;

public class UserTopicArticleNote {
    private int userTopicArticleNoteId;
    private int userId;
    private int topicId;
    private int articleId;
    private int noteId;

    public UserTopicArticleNote() {}

    public UserTopicArticleNote(int userTopicArticleNoteId, int userId, int topicId, int articleId, int noteId) {
        this.userTopicArticleNoteId = userTopicArticleNoteId;
        this.userId = userId;
        this.topicId = topicId;
        this.articleId = articleId;
        this.noteId = noteId;
    }

    public int getUserTopicArticleNoteId() {
        return userTopicArticleNoteId;
    }

    public void setUserTopicArticleNoteId(int userTopicArticleNoteId) {
        this.userTopicArticleNoteId = userTopicArticleNoteId;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
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

    public int getNoteId() {
        return noteId;
    }

    public void setNoteId(int noteId) {
        this.noteId = noteId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        UserTopicArticleNote that = (UserTopicArticleNote) o;
        return userTopicArticleNoteId == that.userTopicArticleNoteId && userId == that.userId && topicId == that.topicId && articleId == that.articleId && noteId == that.noteId;
    }

    @Override
    public int hashCode() {
        return Objects.hash(userTopicArticleNoteId, userId, topicId, articleId, noteId);
    }
}
