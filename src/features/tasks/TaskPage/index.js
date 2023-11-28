import Section from "../../../common/Section";
import Header from "../../../common/Header";
import { Container } from "../../../common/Container";
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../theme';
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useSelector } from "react-redux";
import { getTaskById } from "../tasksSlice";


function TaskPage() {
    const { id } = useParams();
    const task = useSelector(state => getTaskById(state, id));

    return (
        <ThemeProvider theme={theme}>
            <Container>
                <Header title="Szczeguly zadania" />
                <Section
                    title={task ? task.content : "Nie znaleziono zadania😔"}
                    body={
                        <><strong>Ukonczono:</strong> {task.done ? "Tak" : "Nie"}</>
                    }
                />
            </Container >
        </ThemeProvider>
    );
}

export default TaskPage;
