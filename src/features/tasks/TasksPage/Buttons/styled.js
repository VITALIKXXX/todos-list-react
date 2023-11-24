import styled from "styled-components";

export const StyledButtons = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const Button = styled.button`
    background: transparent;
    color: ${({ theme }) => theme.colors.primeriColors};
    border: none;
    margin: 0 0 0 20px;
    transition: color 0.3s;
    cursor: pointer;

    @media(max-width: 767px) {
        flex-basis: 100%;
        margin: 10px;
}

&:hover {
    color: hsl(180, 100%, 35%);
}

&:disabled {
    color: #ccc;
}
`;