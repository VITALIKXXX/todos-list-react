import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { StyledButtons, Button } from "./styled";
import { selectTasks, toggleHideDone, setAllDone, selectAllTasksDone, fetchExapleTasks } from "../../tasksSlice";

const Buttons = () => {
    const allTasksDone = useSelector(selectAllTasksDone)
    const tasks = useSelector(selectTasks);
    const hideDone = useSelector(selectAllTasksDone);
    const dispatch = useDispatch();

    return (
        <StyledButtons>
            <Button onClick={() => dispatch(fetchExapleTasks())}>
                Pobierz przykladowe zadania
            </Button>
            {tasks && tasks.length > 0 && (
                <>
                    <Button onClick={() => dispatch(toggleHideDone())}>
                        {hideDone ? "Pokaz" : "Ukryj"} ukonczone
                    </Button>
                    <Button
                        onClick={() => dispatch(setAllDone())}
                        disabled={allTasksDone}
                    >
                        Ukoncz wszystkie
                    </Button>
                </>
            )}
        </StyledButtons >
    );
}


export default Buttons;