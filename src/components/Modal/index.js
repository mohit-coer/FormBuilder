import React, { useState } from "react";
import {StyledModal, ModalFooter, ModalHeader, 
    ModalContent, Button, Cancel, Row, Column, TextArea, Select, Option, Input} from "./model.css";
import { UITYPE } from "../../common/uitype";

const Modal = (props) => 
{
    const {isOpen, afterOpen, beforeClose, toggleModal, opacity, handleQuestionAdded} = props;
    const [selected, setSelected] = useState('');
    const handleSelect = (e) => {
        console.log(UITYPE);
        console.log(e.target.value);
        setSelected(Number(e.target.value));
    }
    return (
        <StyledModal
        isOpen={isOpen}
        afterOpen={afterOpen}
        beforeClose={beforeClose}
        onBackgroundClick={toggleModal}
        onEscapeKeydown={toggleModal}
        opacity={opacity}
        backgroundProps={{ opacity }}
      >
        <ModalHeader>
            <h2>Add  Question</h2>
        </ModalHeader>
        <ModalContent>
            <Row style={{marginTop: "10px"}}>
                <Column size={1}>
                    <h3>1. </h3>
                </Column>
                <Column size={10}>
                <TextArea id="w3review" name="w3review" 
                rows={4} cols={50} placeholder={"Enter the Question"}>
                </TextArea>
                </Column>                
            </Row>
            <Row style={{marginTop: "10px"}}>
                <Column size={1}>
                    <h3>2. </h3>
                </Column>
                <Column size={10}>
                    <Select onChange={handleSelect}>
                        <Option value="">Select Question Type</Option>
                        <Option value={UITYPE.TEXT}>Text</Option>
                        <Option value={UITYPE.CHK}>Multichoice Checkbox</Option>
                        <Option value={UITYPE.RADIO}>Single Select Radio</Option>
                    </Select>
                </Column>                
            </Row>
            {selected !== '' && 
                <Row style={{marginTop: "10px"}}>
                    <Column size={1}>
                        <h3>3. </h3>
                    </Column>
                    <Column size={10}>
                        {selected === UITYPE.TEXT && <h3>Text Box Added for response</h3>}
                        {selected === UITYPE.RADIO && <Input type="text" placeholder="Label for Radio button"/>}
                        {selected === UITYPE.CHK && <> 
                            <Input type="text" placeholder="Label for Checkbox"/>
                            <TextArea id="w3review" name="w3review" className="mt-1"
                            rows={4} cols={50} placeholder={"Enter the textarea"}>
                            </TextArea>
                             </>}
                    </Column>                
                </Row>}
        </ModalContent>
        <ModalFooter>
        <Row>
        <Column mt={2} style={{marginRight: "auto"}}>
           <Cancel onClick={toggleModal}> Cancel </Cancel>
        </Column>
        <Column mt={1}>
            <Button onClick={()=>{
                handleQuestionAdded();
                toggleModal();
            }}>
                Add
            </Button>
        </Column>
        </Row>
        </ModalFooter>
      </StyledModal>
    );
}

export default Modal;