import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { StyledButtons } from "./styled";
import {
    selectTasks,
    toggleHideDone,
    setAllDone,
    selectAllTasksDone,
    selectTasksDone
} from "../../tasksSlice";
import { Button } from "../Button";

const Buttons = () => {
    const tasks = useSelector(selectTasks);
    const hideDone = useSelector(selectAllTasksDone);
    const allTasksDone = useSelector(selectTasksDone);
    const dispatch = useDispatch();

    return (
        <StyledButtons>
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