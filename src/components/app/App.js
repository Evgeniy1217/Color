import New from "../new/New";
import Home from "../home/Home";
import Edit from "../edit/Edit";
import "./app.css"
import {Routes, Route, Link} from "react-router-dom";

function App() {
    return (
        <div className="App ">
            <nav className="nav nav-fill bg-secondary justify-content-center">
                <Link className="nav-link display-6 p-2 text-white" to="/">home</Link>
                <Link className="nav-link display-6 p-2 text-white" to="/new">new</Link>
                <Link className="nav-link display-6 p-2 text-white" to="/edit">edit</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/new" element={<New/>}/>
                <Route path="/edit" element={<Edit/>}/>
            </Routes>
        </div>
    );
}

export default App;
