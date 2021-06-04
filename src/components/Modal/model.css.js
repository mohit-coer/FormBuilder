import Modal from "styled-react-modal";
import styled from "styled-components";

export const StyledModal = Modal.styled`
  width: 40rem;
  height: 30rem;
  padding: 20px;
  background-color: white;
  opacity: ${(props) => props.opacity};
  transition : all 0.3s ease-in-out;`;

export const ModalHeader = styled.div`
  height: 60px;
  border-bottom: 1px solid black;
`;

export const ModalContent = styled.div`
  min-height: calc(30rem - 150px);
`;

export const ModalFooter = styled.footer`
  height: 60px;
  border-top: 1px solid black;
`;
export const Row = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

export const Column = styled.div`
    flex: ${(props)=> props.size};
`;


export const Button = styled.button`
  color: white;
  margin: 10px;
  display: flex;
  border: 1px solid black;
  margin-left: auto;
  background-color: black;
  font-size: 22px;
  width: 100px;
  justify-content: center;
`;

export const Cancel = styled.a`
  font-size: 22px;
  color: black !important;
  cursor: pointer;
  margin: 10px;
`;

export const TextArea = styled.textarea`
  width: 90%;
  align-items: center;
  ::placeholder {
    font-size: 20px;
  }
`;
export const Select = styled.select`
  word-wrap: normal;
  width: 90%;
  height: 44px;
  cursor: pointer;
  ::placeholder {
    font-size: 20px;
  }
`;

export const Option = styled.option`
::placeholder {
  font-size: 20px;
}
`;

export const Input = styled.input`
  width: 90%;
  height: 45px;
`;