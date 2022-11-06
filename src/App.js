import './App.css';
import AppRouter from './components/Header/Header';
import { BrowserRouter } from "react-router-dom"

function App() {
  return (
    <BrowserRouter className="App">      
      <AppRouter/>
    </BrowserRouter>
  );
}

export default App;
