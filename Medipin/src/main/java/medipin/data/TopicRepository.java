package medipin.data;

import medipin.models.Topic;

import java.util.List;

public interface TopicRepository {

    List<Topic> getAll();
    Topic getById(int topicId);
    Topic add(Topic topic);
    boolean update(Topic topic);
    boolean deleteById(int topicId);

}
