import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from "./Components/Home";


function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path='/' element={<Home/>}/>
{/*
                    <Route path='/test' element={<Test/>}/>
*/}
                </Routes>
            </Router>
        </div>
    );
}

export default App;
