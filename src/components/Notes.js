import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import notesStore from "../stores/notesStore";
import Note from "./Note";

const Notes = () => {
  const store = notesStore();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredNotes = store.notes.filter((note) =>
    note.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Container>
      <div>
        <h2>Notes:</h2>
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Row>
          {filteredNotes.map((note) => (
            <Col md={4} key={note._id}>
              <Note note={note} />
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  );
};

export default Notes;
