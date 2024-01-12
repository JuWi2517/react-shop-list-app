
import './App.css';
import ShopList from "./ShopList";
import { Routes, Route, Link } from 'react-router-dom';
import HomePage from "./HomePage";
function App() {
  return (
    <div className="App">

        <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/ShopList" element={<ShopList />} />
        </Routes>
    </div>

  );
}

export default App;
