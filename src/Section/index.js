import { Body, Header, StyledSection, Title } from "./styled";
const Section = ({ title, body, extraHeaderContent }) => (
    <StyledSection>
        <Header>
            <Title>{title}</Title>
            {extraHeaderContent}
        </Header>
        <Body className="section__body">
            {body}
        </Body>
    </StyledSection>
);

export default Section;