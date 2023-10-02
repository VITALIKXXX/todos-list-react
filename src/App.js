import { useTasks } from './useTasks';
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import { Container } from "./Container";
import { ThemeProvider } from 'styled-components';
import { theme } from './styled';

function App() {

  const {
    tasks,
    hideDone,
    toggleHideDone,
    removeTask,
    toggleTaskDone,
    setAllDone,
    addNewTask
  } = useTasks();

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header title="Lista zadan" />
        <Section
          title="Dodaj nowe zadanie"
          body={<Form addNewTask={addNewTask} />}
        />
        <Section
          title="Lista zadan"
          body={
            <Tasks
              tasks={tasks}
              hideDone={hideDone}
              removeTask={removeTask}
              toggleTaskDone={toggleTaskDone}
            />
          }
          extraHeaderContent={
            <Buttons
              tasks={tasks}
              hideDone={hideDone}
              toggleHideDone={toggleHideDone}
              setAllDone={setAllDone}
            />
          }
        />
      </Container >
    </ThemeProvider>
  );
}

export default App;
