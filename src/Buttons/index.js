import { StyledButtons, HideDone } from "./styled";
const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (
    <StyledButtons>
        {tasks.length > 0 && (
            <>
                <HideDone onClick={toggleHideDone}>
                    {hideDone ? "Pokaz" : "Ukryj"} ukonczone
                </HideDone>
                <HideDone
                    onClick={setAllDone}
                    disabled={tasks.every(({ done }) => done)}
                >
                    Ukoncz wszystkie
                </HideDone>
            </>
        )}
    </StyledButtons >
);


export default Buttons;