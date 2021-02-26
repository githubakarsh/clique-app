import { Col, Form, Button, InputGroup, Card } from "react-bootstrap";
import Calendar from "react-calendar";
import Toggle from "react-toggle";

const SpendingFormComponent = ({ saveSpending, index, manageButtons }) => {
  const displayElements = (index) =>
    ({
      1: (
        <Form.Group as={Col} controlId="formGridText">
          <Form.Label>What your are spending For</Form.Label>
          <Form.Control size="sm" type="text" placeholder="Enter spending title" />
        </Form.Group>
      ),
      2: (
        <Form.Group as={Col} controlId="formGridNumber">
          <Form.Label>Amount</Form.Label>
          <InputGroup className="mb-2">
            <InputGroup.Prepend>
              <InputGroup.Text>£</InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control type="text" placeholder="Enter Amount" />
          </InputGroup>
        </Form.Group>
      ),
      3: (
        <Form.Group controlId="formGridSpendDate">
          <Calendar className="global-padder" />
        </Form.Group>
      ),
      4: (
        <Form.Group controlId="formGridDescription">
          <Form.Label>A little Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter Description"
          />
        </Form.Group>
      ),
    }[index]);

  return (
    <div>
      <Card className="global-padder">
        <div className="global-flex" style={{textAlign: 'center'}}>
            <div>{displayElements(index)}</div> 
           {(index > 0 && index < 4) && <div className="global-marginer"><Button onClick={() => manageButtons('next')}>Next</Button></div>}
            {(index > 0 && index <= 4) && <div className="global-marginer"><Button onClick={() => manageButtons('back')}>Back</Button></div>}         
        </div>
      </Card>
    </div>
  );
};

export default SpendingFormComponent;
