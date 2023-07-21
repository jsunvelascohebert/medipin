package medipin.data;

import medipin.models.Note;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.sql.Time;
import java.sql.Timestamp;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.NONE)
class NoteJdbcTemplateRepositoryTest {

    @Autowired
    NoteJdbcTemplateRepository repository;

    @Autowired
    KnownGoodState knownGoodState;

    @BeforeEach
    void setup() { knownGoodState.set(); }

    @Test
    void shouldGetAllNotes() {
        List<Note> notes = repository.getAll();
        assertNotNull(notes);
        assertTrue(notes.size() > 0);
    }

    @Test
    void shouldGetByValidId() {
        Note note = repository.getById(1);
        assertNotNull(note);
        assertEquals(note.getNoteId(), 1);
        assertEquals(note.getText(), "note 1");
        assertEquals(note.getDatetimeMade(),
                Timestamp.valueOf("2023-07-19 12:34:56"));
    }

    @Test
    void shouldNotGetByInvalidId() {
        Note note = repository.getById(100);
        assertNull(note);
    }

    @Test
    void shouldAddValidNote() {
        Note note = new Note(0, "Testing add in java",
                Timestamp.valueOf("2023-07-22 12:34:56"));
        Note result = repository.add(note);
        assertNotNull(result);
        assertTrue(result.getNoteId() > 0);
    }

    @Test
    void shouldUpdateValidNote() {
        Note note = new Note(2, "Testing update in java",
                Timestamp.valueOf("2023-07-23 12:34:56"));
        assertTrue(repository.update(note));
    }

    @Test
    void shouldNotUpdateMissingNote() {
        Note note = new Note(100, "Testing update on missing note",
                Timestamp.valueOf("2023-07-23 12:34:56"));
        assertFalse(repository.update(note));
    }

    @Test
    void shouldDeleteByExistingNote() {
        assertTrue(repository.deleteByID(3));
    }

    @Test
    void shouldNotDeleteByMissingNote() {
        assertFalse(repository.deleteByID(100));
    }


}