package medipin.data;

import medipin.data.mappers.ArticleMapper;
import medipin.data.mappers.TopicMapper;
import medipin.models.Topic;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class TopicJdbcTemplateRepository implements TopicRepository {
    private final JdbcTemplate jdbcTemplate;

    public TopicJdbcTemplateRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public List<Topic> getAll() {
        final String sql = "select topic_id, `name` from topic;";
        return jdbcTemplate.query(sql, new TopicMapper());
    }

    @Override
    public Topic getById(int topicId) {
        return null;
    }

    @Override
    public Topic add(Topic topic) {
        return null;
    }

    @Override
    public boolean update(Topic topic) {
        return false;
    }

    @Override
    public boolean deleteById(int topicId) {
        return false;
    }
}
