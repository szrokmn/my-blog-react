import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter } from "react-router-dom"

function App() {
  return (
    <BrowserRouter className="App">
      <Header/>
    </BrowserRouter>
  );
}

export default App;
