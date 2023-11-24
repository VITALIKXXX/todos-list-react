import { useSelector } from "react-redux/es/hooks/useSelector";
import { List, Item, Content, Button, Message } from "./styled"
import { toggleTaskDone, removeTasks, selectShowMessage, selectTasksByQuery, selectAllTasksDone } from "../../tasksSlice";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom/cjs/react-router-dom";

const TasksList = () => {
    const location = useLocation();
    const serchParams = new URLSearchParams(location.search);
    const query = serchParams.get("szukaj");

    const { tasks } = useSelector(state => selectTasksByQuery(state, query));
    const { hideDone } = useSelector(selectAllTasksDone)
    const showMessage = useSelector(selectShowMessage)

    const dispatch = useDispatch();

    return (
        <List>
            {showMessage ? (
                <Item>
                    <Message>Ukonczone zadania sa ukryte😉!!!</Message>
                </Item>
            ) : (
                tasks?.map(task => (
                    <Item
                        key={task.id}
                        hidden={task.done && hideDone}
                    >
                        <Button
                            toggleDone
                            onClick={() => dispatch(toggleTaskDone(task.id))}
                        >
                            {task.done ? " ✓" : ""}
                        </Button>

                        <Content done={task.done}>
                            <Link to={`/zadania/${task.id}`}>{task.content}</Link>
                        </Content>

                        <Button
                            remove
                            onClick={() => dispatch(removeTasks(task.id))}
                        >
                            🗑️
                        </Button>
                    </Item>
                )))}
        </List>

    );
};

export default TasksList;