package medipin.data.mappers;

import medipin.models.Note;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class NoteMapper implements RowMapper<Note> {
    @Override
    public Note mapRow(ResultSet rs, int rowNum) throws SQLException {
        Note note = new Note();
        note.setNoteId(rs.getInt("note_id"));
        note.setText(rs.getString("text"));
        note.setDatetimeMade(rs.getTimestamp("datetime_made"));
        return note;
    }
}
