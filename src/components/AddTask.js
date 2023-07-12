import React, {useState} from 'react';
import '../App.css';
import { Button,  Form } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import {useDispatch} from 'react-redux';
const AddTask = ()=>{
 const dispatch = useDispatch();
 const [newTask, setNewTask] = useState("");
 const addFunct = ()=>{
     if (newTask.trim()){
         dispatch({type:"add",payload:newTask})
         setNewTask(" ");
     }
 }
return (
        <Form > 
        <Form.Group>
          <Form.Label><b>Add Todo</b></Form.Label>
          <Form.Control type="text" className="input" value={newTask} placeholder="Add new todo" onChange={(e)=>setNewTask(e.target.value)} />
        </Form.Group>
        <Button variant="primary mb-3" onClick={addFunct}>
          Submit
        </Button>
        </Form>
        );
}
export default AddTask;
