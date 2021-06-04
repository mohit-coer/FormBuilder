import styled from "styled-components";
import { BaseModalBackground } from "styled-react-modal";

export const AddButtonField = styled.button`
    background-color: black;
    margin: 20px;
    display: flex;
    align-items: flex-end;
    font-size: 22px;
    color: white;
    border: 1px solid black;
    border-radius: 3px;
`;

export const Container = styled.div`

`

export const FadingBackground = styled(BaseModalBackground)`
  opacity: ${(props) => props.opacity};
  transition: all 0.3s ease-in-out;
`;
