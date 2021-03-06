//Goal is to make a network request to fetch some JSON and print the result
import axios from 'axios';

const url ='http://jsonplaceholder.typicode.com/todos/1';

interface Todo {
  id: number;
  title: string; 
  completed: boolean; 
}

axios.get(url).then(response => {
  const todo = response.data as Todo; 

  const id = todo.id; 
  const title = todo.title; 
  const completed = todo.completed; 

  logTodo(id, title, completed);
});

//Extract console.log to a helper fn
const logTodo = (id:number, title: string, completed: boolean) => {
  console.log(`The Todo with ID: ${id}
    Has  a title of: ${title}
    Is it finished? ${completed}
  `);
}