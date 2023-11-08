import { useSelector } from "react-redux/es/hooks/useSelector";
import { List, Item, Content, Button, Message } from "./styled"
import { selectTasksState, toggleTaskDone, removeTasks, selectShowMessage } from "../tasksSlice";
import { useDispatch } from "react-redux";

const TasksList = () => {
    const { tasks, hideDone } = useSelector(selectTasksState);
    const showMessage = useSelector(selectShowMessage)
    const dispatch = useDispatch();

    return (
        <List>
            {showMessage ? (
                <Item>
                    <Message>Ukonczone zadania sa ukryte😉!!!</Message>
                </Item>
            ) : (
                tasks.map(task => (
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
                            {task.content}
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