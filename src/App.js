import { HashRouter, NavLink, Switch, Route, Redirect } from "react-router-dom/cjs/react-router-dom.min";
import TasksPage from "./features/tasks/TasksPage/index";
import TaskPage from "./features/tasks/TaskPage";
import AuthorPage from "./features/author/AuthorPage";

const App = () => (
    <HashRouter>
        <nav>
            <ul>
                <li>
                    <NavLink activeClassName="active" to="/zadania">Zadania </NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active" to="/autor">O autorze </NavLink>
                </li>
            </ul>
            <Switch>
                <Route path="/zadania/:id">
                    <TaskPage />
                </Route>
                <Route path="/zadania">
                    <TasksPage />
                </Route>
                <Route path="/autor">
                    <AuthorPage />
                </Route>
                <Route path="/">
                    <Redirect to="/zadania" />
                </Route>
            </Switch>
        </nav>
    </HashRouter>
);

export default App;