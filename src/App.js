import './App.css';
import { useState } from 'react';
import Todolist from './Todolist';
import TodoForm from './TodoForm';
import TodoFooter from './TodoFooter';
function App() {

  const [todos,setTodos]= useState([
    {
      id:Math.random(),
      text:'Learn js',
      isCompleted: false,
    },
    {
      id:Math.random(),
      text:'Learn react',
      isCompleted: false,
    },
    {
      id:Math.random(),
      text:'Learn angular',
      isCompleted: false,
    }
  ])

  return (
    <div className="App">
      <div>
      <TodoForm  onAdd={(text)=>{
        setTodos([
          ...todos,
          {
            id:Math.random(),
            text:text,
            isCompleted:false
          }
        ])
      }}/>
     <Todolist
      todos={todos} 
      onDelete={(todo)=>{
        setTodos(todos.filter((t)=>t.id!==todo.id))
      }}
      onChange={(newTodo)=>{
        setTodos(todos.map((todo)=>{
          if(todo.id ===newTodo.id){
            return newTodo
          }
          return todo
        }))
      }}
      />
     <TodoFooter todos={todos} Clearompleted={()=>{
      setTodos(todos.filter((todo)=>!todo.isCompleted))
     }}/>
     </div>
    </div>
  );
}

export default App;
