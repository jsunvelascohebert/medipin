package medipin.models;

import java.sql.Timestamp;
import java.util.Objects;

public class Note {
    private int noteId;
    private String text;
    private Timestamp datetimeMade;

    public Note() {};

    public Note(int noteId, String text, Timestamp datetimeMade) {
        this.noteId = noteId;
        this.text = text;
        this.datetimeMade = datetimeMade;
    }

    public int getNoteId() {
        return noteId;
    }

    public void setNoteId(int noteId) {
        this.noteId = noteId;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public Timestamp getDatetimeMade() {
        return datetimeMade;
    }

    public void setDatetimeMade(Timestamp datetimeMade) {
        this.datetimeMade = datetimeMade;
    }

    @Override
    public String toString() {
        return "Note{" +
                "noteId=" + noteId +
                ", text='" + text + '\'' +
                ", datetimeMade=" + datetimeMade +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Note note = (Note) o;
        return noteId == note.noteId && Objects.equals(text, note.text) && Objects.equals(datetimeMade, note.datetimeMade);
    }

    @Override
    public int hashCode() {
        return Objects.hash(noteId, text, datetimeMade);
    }
}
