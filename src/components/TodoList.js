import React,{useState} from 'react'

function TodoList() {
    const [taskName, setTaskName] = useState("");
    const [error,setError] = useState("");
    const [todos,setTodos] = useState([]);

const onButtonClick = () =>{
    console.log("inside function")
    const todo = {
        name:taskName,
        status:false
    }
    if(!todo.name){
        setError("enter todo name");
        return;
    }
    setError("");
    setTodos([...todos,todo]);
    setTaskName("")
        
    
}
const deleteTodo = (itemsend) =>{
    const array = [...todos];
    let filteredArray = array.filter(item => item.name !== itemsend);
    setTodos(filteredArray);
}
  const handleChange = (itemName,id) =>{
      console.log("i am handle item change",itemName)
    const array = [...todos];
    // var index = array.indexOf(itemName);
    // console.log("index of the selected",itemName ,"is",index);
    // if (index !== -1) {
        array[id].status = true;
        setTodos(array);
    //   }
  }

  const DeleteAllChecked = ()=>{
      const newArray = [...todos]
      const checkedArray = newArray.filter(item=>item.status!==true)
      console.log("checking the checked arry",checkedArray)
      if(checkedArray){
          console.log('we are doing great',checkedArray)
          setTodos(checkedArray)
      }
     

  }
  console.log("all todos",todos)
    return (
        <div>
            <input value={taskName} onChange = {(e)=>setTaskName(e.target.value)} style={{border:error?'1px solid red':''}}/>
            <button onClick ={onButtonClick} >Add</button>
            {error && <h3 className="error">{error}</h3>}
            <ul>
                {todos.map((item,index)=>{
                   return (
                   
                   <li key={item.name}><span className={item.status?"name-style":""}> {item.name}</span> <input type="checkbox" onChange={()=>{handleChange(item.name,index)}}/> <button onClick={()=>deleteTodo(item.name)} ><i className="fas fa-times"></i></button></li>
                   
                   
                   
                   ) ;
                })}
            </ul>
            {todos.length >0 ? <button onClick={DeleteAllChecked}>Delete all done todos</button>: <h3>No Todo Is Present</h3>}

        </div>
    )
}

export default TodoList;
