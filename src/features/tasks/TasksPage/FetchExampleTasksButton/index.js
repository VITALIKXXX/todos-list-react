import { useDispatch, useSelector } from "react-redux";
import { fetchExampleTasksRequest, selectLoading } from "../../tasksSlice";
import { FlexContainer, Button } from "../Button";

const FetchExampleTasksButton = () => {
    const dispatch = useDispatch();
    const loading = useSelector(selectLoading);

    return (
        <FlexContainer>
            <Button
                onClick={() => dispatch(fetchExampleTasksRequest())}
                disabled={loading} >
                {
                    loading 
                        ? "Ladowanie..."
                        : "Pobierz przykladowe zadania"
                }
            </Button>
        </FlexContainer>
    );
};

export default FetchExampleTasksButton;