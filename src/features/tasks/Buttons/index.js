import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { StyledButtons, Button } from "./styled";
import { selectTasksState, toggleHideDone, setAllDone, selectAllTasksDone } from "../tasksSlice";

const Buttons = () => {
    const allTasksDone = useSelector(selectAllTasksDone)
    const { tasks, hideDone } = useSelector(selectTasksState);
    const dispatch = useDispatch();

    return (
        <StyledButtons>
            {tasks.length > 0 && (
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