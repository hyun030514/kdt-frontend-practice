import { useState, useEffect } from 'react';
import type { Todo } from './types';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // 마운트 시점에 필요한 초기 데이터를 조회
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=5') // Promise<response>
      .then((response) => response.json()) // promise<any>
      .then((data: Todo[]) => {
        setTodos(data);
        setLoading(false);
      });
  }, []);

  // 새 Todo 추가
  const addTodo = (title: string): void => {
    // 새 Todo 객체 (id는 임의로 생성)
    const newTodo: Todo = {
      id: Date.now(),
      title: title,
      completed: false,
      userId: 1,
    };
    setTodos([newTodo, ...todos]);
  };

  // Todo 완료/미완료
  const toggleComplete = (id: number): void => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h1>My Todo List</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} toggleComplete={toggleComplete} />
    </>
  );
}

export default App;
