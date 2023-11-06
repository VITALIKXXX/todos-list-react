import { useSelector } from "react-redux/es/hooks/useSelector";
import { List, Item, Content, Button } from "./styled"
import { selectTasks, toggleTaskDone, removeTasks } from "../tasksSlice";
import { useDispatch } from "react-redux";
const TasksList = () => {
    const { tasks, hideDone } = useSelector(selectTasks);
    const dispatch = useDispatch();
    return (
        <List>
            {tasks.map(task => (
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
            ))}
        </List>

    );
};

export default TasksList;