import {v4 as uuidv4} from 'uuid';
const initialState = {tasks:[{id:uuidv4(), name : "first task ", isDone:false },{id:uuidv4(), name : "Second task ", isDone:false },{id:uuidv4(), name : "Third task ", isDone:false }]};
const reducer = (state=initialState, {type,payload}) =>{
 switch (type) {
     case "add" : return({tasks:[{id:uuidv4(), name : payload , isDone:false},...state.tasks]})       
     case "delete" : return({tasks:[...state.tasks].filter(task=>task.id !== payload)});
     case "update" : return({tasks:[...state.tasks].map(task=>task.id===payload.id ?{...task,name:payload.newname}: task )})
     case "finished" : return({tasks:[...state.tasks].map(task=>task.id===payload ? {...task,isDone :!task.isDone} : task )});
     default:
         return (state)
 };
}
export default reducer ;