import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function ButtonsExample({searchHandle}) {
  return (
    <>
      

      <InputGroup className="mb-3"style={{width:"35%"}}>
        <Form.Control
          placeholder="بحـث عن السورة"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          onChange={e=>searchHandle(e.target.value)}
        />
        <Button variant="outline-secondary" id="button-addon2" >
          بـحث
        </Button>
      </InputGroup>
      </>
      );
}
      export default ButtonsExample;