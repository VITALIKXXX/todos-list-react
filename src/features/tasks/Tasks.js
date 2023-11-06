import Form from "./Form";
import TasksList from "./TasksList";
import Buttons from "./Buttons";
import Section from "../../common/Section";
import Header from "../../common/Header";
import { Container } from "../../common/Container";
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styled';


function Tasks() {

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header title="Lista zadan" />
        <Section
          title="Dodaj nowe zadanie"
          body={<Form />}
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

export default Tasks;
