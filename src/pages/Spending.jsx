import {
  ListGroup,
  Button,
  Jumbotron,
} from "react-bootstrap";
import { useState } from "react";
import SpendingFormComponent from './SpendingFormComponent';

const Spendings = ({}) => {
  const [pageState, setPageState] = useState([]);

  const AddSpendingButton = () => {
      return (
        <div className="global-marginer" style={{textAlign: 'center'}}>
          <Button
            variant="primary"
            onClick={(e) => setPageState({...pageState, displayForm: true, index: 1})}
          >
            + Add Spendings
          </Button>
        </div>
      );
  };

  const saveSpending = () => {
//    setPageState({...pageState, displayForm: false})
  }

  const manageButtons = (type) => {
      if(type === 'next' || type === "back") {
          setPageState({...pageState, index: (type === 'next') ? pageState.index + 1 : pageState.index - 1});
      }
      if(type === 'skip') {
        setPageState({...pageState, index: 4});
      }
  }

  

  const spendingList = () => {

      return <ListGroup>
          {pageState.spendList && pageState.spendList.map(list => {
              return <ListGroup.Item id={list.id}>{list.text}</ListGroup.Item> 
          })}
      
      <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
      <ListGroup.Item>Morbi leo risus</ListGroup.Item>
      <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
      <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
    </ListGroup>
  }

  const pageHeaderContent = () => {
      return <Jumbotron style={{ textAlign: "center" }}>
      <h3>Your Spendings</h3>
      <p>Manage and Track down your Spendings</p>
    </Jumbotron>
  }

  return (
    <div >
      {pageHeaderContent()}
      {!pageState.index && AddSpendingButton()}
      <SpendingFormComponent saveSpending={saveSpending} index={pageState.index} manageButtons={manageButtons}/>
      <div >
        <section className="global-flex">
          <article>
          </article>
          <article>
            {spendingList()}
          </article>
        </section>
      </div>
    </div>
  );
};

export default Spendings;
