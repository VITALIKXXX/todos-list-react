import Form from "../TasksPage/Form"
import TasksList from "../TasksPage/TasksList";
import Buttons from "../TasksPage/Buttons";
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import { Container } from "../../../common/Container";
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../theme';
import Searcz from './Searcz';

function TasksPage() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header title="Lista zadan" />
        <Section
          title="Dodaj nowe zadanie"
          body={<Form />}
        />
        <Section
          title="Wyszukiwarka"
          body={<Searcz />}
        />
        <Section
          title="Lista zadan"
          body={<TasksList />}
          extraHeaderContent={<Buttons />}
        />
      </Container >
    </ThemeProvider>
  );
}

export default TasksPage;
