import { StyledButtons, Button } from "./styled";
const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (
    <StyledButtons>
        {tasks.length > 0 && (
            <>
                <Button onClick={toggleHideDone}>
                    {hideDone ? "Pokaz" : "Ukryj"} ukonczone
                </Button>
                <Button
                    onClick={setAllDone}
                    disabled={tasks.every(({ done }) => done)}
                >
                    Ukoncz wszystkie
                </Button>
            </>
        )}
    </StyledButtons >
);


export default Buttons;