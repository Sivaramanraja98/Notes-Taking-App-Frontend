import React from "react";
import { Card, CardBody, CardHeader, CardText } from "react-bootstrap";
import notesStore from "../stores/notesStore";
import './style.css';

const Note = ({ note }) => {
  const store = notesStore((store) => {
    return { deleteNote: store.deleteNote, toggleUpdate: store.toggleUpdate };
  });

  return (
    <div key={note._id}>
      <Card>
        <CardHeader className="Bold">{note.title}</CardHeader>
        <CardBody>
          <CardText>{note.body}</CardText>
          <button className='btn btn-primary' style={{ 'margin': '2px' }} onClick={() => store.deleteNote(note._id)}>Delete note</button>
          <button className='btn btn-primary' style={{ 'margin': '2px' }} onClick={() => store.toggleUpdate(note)}>Update note</button>
        </CardBody>
      </Card>
    </div>
  );
};

export default Note;
