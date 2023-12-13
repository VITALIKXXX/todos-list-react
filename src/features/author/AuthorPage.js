import { ThemeProvider } from "styled-components";
import { Container } from "../../common/Container";
import Header from "../../common/Header";
import Section from "../../common/Section";
import { theme } from "../../theme";

export default () => (
    <ThemeProvider theme={theme}>
        <Container>
            <Header title="O autorze" />
            <Section
                title="Vitalii Tomenko"
                body={
                    <p>We wrześniu 2014 zamieszkał w Polsce. W grudniu tego samego roku wziął do siebie żonę.Pracował na
                        różnych
                        stanowiskach .Na początku na budowie, potem jeździł Uberem, zajmował się nawet montażem dźwigów na
                        budowach. Obecnie od 6 lat pracuję jako pracownik techniczny w firmie weterynaryjnej. Firma nie jest
                        zła, a praca jest dobrze płatna.Ale główną wadą jest stres i brak czasu dla rodziny. Dlaczego
                        zdecydowałem się radykalnie zmienić rodzaj mojej działalności.Dlatego pierwszym punktem w moich
                        planach jest ukończenie kursu.</p>
                }
            />
        </Container>
    </ThemeProvider>
);