import "./style.css";
const Buttons = ({ tasks, hideDone }) => (
    <div className="buttons">
        {tasks.length > 0 && (
            <>
                <button className="buttons__button">
                    {hideDone ? "Pokaz" : "Ukryj"} ukonczone
                </button>
                <button
                    className="buttons__button"
                    disabled={tasks.every(({ done }) => done)}
                >
                    Ukoncz wszystkie
                </button>
            </>
        )}
    </div >
);


export default Buttons;