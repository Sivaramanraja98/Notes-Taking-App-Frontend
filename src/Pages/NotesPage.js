import React, { useEffect } from "react";
import notesStore from "../stores/notesStore";
import UpdateForm from "../components/UpdateForm";
import CreateForm from "../components/CreateForm";
import Notes from "../components/Notes";

const NotesPage = () => {
  const store = notesStore();

  // Use effect
  useEffect(() => {
    store.fetchNotes();
  }, [store]);
  return (
    <>
      <UpdateForm />
      <CreateForm />
      <Notes />
    </>
  );
};

export default NotesPage;
