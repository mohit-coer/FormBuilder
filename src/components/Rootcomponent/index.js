import React from "react";
import '../../App.css';
import {AddButtonField} from '../../App.style';
import Modal from "../Modal/index";
import 'antd/dist/antd.css';
import { Alert } from 'antd';
import QuestionForm from "../QuestionForm/index";

const RootComponent = (props) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [opacity, setOpacity] = React.useState(0);
    const [success, setSuccess] = React.useState(false);
    const toggleModal = (e) => {
        setOpacity(0);
        setIsOpen(!isOpen);
    }

    const afterOpen = (e) => {
        setTimeout(() => {
        setOpacity(1);
        }, 100);
    }

    const beforeClose = () => {
        return new Promise((resolve) => {
        setOpacity(0);
        setTimeout(resolve, 300);
        });
    }

  const handleQuestionAdded = () => {
     setSuccess(true);
     setTimeout(()=>{
       setSuccess(false)
     },2000);
  }
    return (
        <>
        <AddButtonField onClick={toggleModal}>Add Question</AddButtonField>
      <hr/>
      { success && <Alert
      message="Question Added"
      type="success"
      style={{padding: "24px", width:"95%", marginLeft: "10px"}}
      closable />
      }
      <Modal 
          isOpen={isOpen}
          afterOpen={afterOpen}
          beforeClose={beforeClose}
          toggleModal={toggleModal}
          opacity={opacity}
          backgroundProps={{ opacity }}
          handleQuestionAdded = {handleQuestionAdded}>
      </Modal>
      <QuestionForm {...props} />
      </>
    )
}

export default RootComponent;