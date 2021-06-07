import React, { useState } from "react";
import {StyledModal, ModalFooter, ModalHeader, 
    ModalContent, Button, Cancel, Row, Column, TextArea, Select, Option} from "./model.css";
import { UITYPE } from "../../common/uitype";
import {connect} from "react-redux";
import { addQues } from "../../redux/questions/actiontypes";
const Modal = (props) => 
{
    const {isOpen, afterOpen, beforeClose, toggleModal, opacity, handleQuestionAdded} = props;
    const [questions, setQuestions] = useState({
        question: "",
        uitype: "",
        label: "",
        options: ""
    })
    const [nonEmpty, setNonEmpty] = useState(false);

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
                rows={4} cols={50} placeholder={"Enter the Question"}
                onChange={(e)=>{
                    setQuestions({
                        ...questions, question : e.target.value
                    })
                }}>
                </TextArea>
                </Column>                
            </Row>
            <Row style={{marginTop: "10px"}}>
                <Column size={1}>
                    <h3>2. </h3>
                </Column>
                <Column size={10}>
                    <Select onChange={(e)=>{
                        e.target.value !== "" ? setQuestions({
                            ...questions, uitype: Number(e.target.value)
                        }): setQuestions({
                            ...questions, uitype: null
                        });
                    }}>
                        <Option value="">Select Question Type</Option>
                        <Option value={UITYPE.TEXT}>Text</Option>
                        <Option value={UITYPE.CHK}>Multichoice Checkbox</Option>
                        <Option value={UITYPE.RADIO}>Single Select Radio</Option>
                    </Select>
                </Column>                
            </Row>
            {questions.uitype !== '' && 
                <Row style={{marginTop: "10px"}}>
                    <Column size={1}>
                        <h3>3. </h3>
                    </Column>
                    <Column size={10}>
                        {questions.uitype === UITYPE.TEXT && <h3>Text Box Added for response</h3>}
                        {questions.uitype === UITYPE.RADIO && <>
                            <TextArea id="w3review" name="w3review" className="mt-1"
                            rows={4} cols={50} placeholder={"Enter the options"} onChange={(e)=>{
                                setQuestions({
                                    ...questions, options: e.target.value
                                })
                            }}>
                            </TextArea>
                        </>}
                        {questions.uitype === UITYPE.CHK && <> 
                            <TextArea id="w3review" name="w3review" className="mt-1"
                            rows={4} cols={50} placeholder={"Enter the options"} onChange={(e)=>{
                                setQuestions({
                                    ...questions, options: e.target.value
                                })
                            }}>
                            </TextArea>
                             </>}
                    </Column>                
                </Row>}
                {nonEmpty ? <h3 style={{color: "red", marginTop: "20px"}}>Kindly fill all details!!</h3> : null}
            </ModalContent>
        <ModalFooter>
            <Row>
            <Column mt={2} style={{marginRight: "auto"}}>
            <Cancel onClick={toggleModal}> Cancel </Cancel>
            </Column>
            <Column mt={1}>
                <Button onClick={()=>{
                    if(questions.question!== "" && 
                        questions.uitype!== "")
                        {
                            props.addQuestion([...props.questions,{
                                question: questions.question,
                                uitype: questions.uitype,
                                label: questions.label,
                                options: questions.options
                            }]);
                            toggleModal();
                            handleQuestionAdded();
                            setNonEmpty(false);
                            setQuestions({question: "",
                                uitype: "",
                                label: "",
                                options: ""});
                        }
                        else
                        {
                            setNonEmpty(true);
                        }
                }}>
                    Add
                </Button>
            </Column>
            </Row>
        </ModalFooter>
      </StyledModal>
    );
}

const mapStateToProps = (state) => {
    return {
        questions: state.questionReducer,
      };
}

const mapDistpatchToProps = (dispatch, ownprops) => {
    return {
        addQuestion: (data) => dispatch(addQues(data)),
      };
}


export default connect(mapStateToProps, mapDistpatchToProps)(Modal);


