import React ,{useState}from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {useDispatch} from 'react-redux';


const Tasks = () => {
  const dispatch = useDispatch();
  const [done, setdone] = useState("")
  const [incomplete, setincomplete] = useState("")
  const [all, setall] = useState("")
  const doneTask = ()=>{
    dispatch({type:"done",payload:done})
    setdone();  
  }
  const incompleteTask = ()=>{
    dispatch({type:"incomplete",payload:incomplete})
    setincomplete()
    
  }
  const allTask = ()=>{
    dispatch({type:"all",payload:all})
    setall();
    
  }

  return (
    <div className="app">
      <Button style={{ margin: "5px" }} variant="outline-success" onClick={doneTask}>
        Finished Tasks
      </Button>
      <Button style={{ margin: "5px" }} variant="outline-success" onClick={incompleteTask}>
        Incomplete Tasks
      </Button>
      <Button style={{ margin: "5px" }} variant="outline-success" onClick={allTask}>
        All Tasks
      </Button>
    </div>
  );
};

export default Tasks;
