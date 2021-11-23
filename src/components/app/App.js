import New from "../new/New";
import Home from "../home/Home";
import "./app.css"

import {BrowserRouter as Router, Switch, Route, NavLink, Redirect} from "react-router-dom";

function App() {

    return (
        <Router>
            <div className="App">
                <div className="d-flex">
                    <div className="clickMe">
                        <NavLink to="/">Список, удаление градиентов</NavLink>
                    </div>
                    <div className="clickMe">
                        <NavLink to="/new">Добавить новый градиент</NavLink>
                    </div>
                </div>
                <Switch>
                    <Route exact path="/"><Home/></Route>
                    <Route path="/new"><New/></Route>
                    <Redirect to="/"/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
