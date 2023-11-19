import notesStore from "../stores/notesStore";
import { Container,Row } from "react-bootstrap";

const CreateForm = () => {
  const store = notesStore();

  if (store.updateForm._id) return <></>;

  return (
    <Container>
      <Row><h2 className="Header">Create note</h2></Row>
      
      <form onSubmit={store.createNote}>
      <Row>
        <input width={'50%'} style={{"margin":"5px"}}
        placeholder="Type to add a Title..."
          onChange={store.updateCreateFormField}
          value={store.createForm.title}
          name="title"
        />
      </Row>
      <Row>
        <textarea
          rows="2"
          cols="20"
          placeholder="Type to add a note..."
          onChange={store.updateCreateFormField}
          value={store.createForm.body}
          name="body"
          style={{"margin":"5px"}}
        />
        </Row>
        
        <button type="submit" width={'20%'}>Create note</button>
        
      </form>
    </Container>
  );
};
export default CreateForm;
