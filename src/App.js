import './App.css';
import AppRouter from './router/AppRouter';
import { BrowserRouter } from "react-router-dom"

function App() {
  return (
    <BrowserRouter className="App">      
      <AppRouter/>          
    </BrowserRouter>
  );
}

export default App;
