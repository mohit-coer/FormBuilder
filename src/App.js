import './App.css';
import {AddButtonField, FadingBackground} from './App.style';
import Navbar from "./containers/Navbar/NavbarComponent";
import Modal from "./components/Modal/index.js";
import React from "react";
import 'antd/dist/antd.css';
import { Alert } from 'antd';

import  { ModalProvider } from "styled-react-modal";

function App() {
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
    <ModalProvider backgroundComponent={FadingBackground}>
      <Navbar />
      <AddButtonField onClick={toggleModal}>Add Question</AddButtonField>
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
      </ModalProvider>
    </>
  );
}

export default App;
