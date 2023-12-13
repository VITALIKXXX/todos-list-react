import styled from "styled-components";

export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Button =  styled.button`
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
