import './App.css';
import TodoList from './component/TodoList/TodoList';
import { DarkModeProvider } from './context/DarkModeContext';

function App() {
  return (
    <DarkModeProvider>
      <TodoList />
    </DarkModeProvider>
  );
}

export default App;
