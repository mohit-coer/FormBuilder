import styled from "styled-components";

export const Container = styled.div`
    padding: 10px;
`;

export const Row = styled.div`
    display: flex;
`;

export const Column = styled.div`
    flex: ${(props)=> props.size};
`;

export const StyledButton = styled.button`
    background-color: ${(props)=>props.color};
    width: 100%;
    display: flex;
    align-items: flex-end;
    font-size: 32px;
    color: white;
`;