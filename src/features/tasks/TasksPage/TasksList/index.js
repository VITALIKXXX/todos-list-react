import { useSelector } from "react-redux/es/hooks/useSelector";
import { List, Item, Content, Button, Message, StyledLink } from "./styled"
import { toggleTaskDone, removeTasks, selectShowMessage, selectTasksByQuery, selectAllTasksDone } from "../../tasksSlice";
import { useDispatch } from "react-redux";
import searchQueryParamName from "../searchQueryParamName";
import { toTask } from "../../../../routes";
import { useQueryParameter } from "../queryParameters";

const TasksList = () => {
    const query = useQueryParameter(searchQueryParamName);
    const tasks = useSelector(state => selectTasksByQuery(state, query));
    const hideDone = useSelector(selectAllTasksDone)
    const showMessage = useSelector(selectShowMessage)

    const dispatch = useDispatch();

    return (
        <List>
            {showMessage && tasks.length > 0 && hideDone && tasks.every(task => task.done) ? (
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
                            <StyledLink to={toTask({ id: task.id })}>{task.content}</StyledLink>
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