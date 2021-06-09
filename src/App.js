import './App.css';
import { FadingBackground} from './App.style';
import Navbar from "./containers/Navbar/NavbarComponent";
import React from "react";
import 'antd/dist/antd.css';
import  { ModalProvider } from "styled-react-modal";
import {
  Switch,
  Route
} from "react-router-dom";
import RootComponent from "./components/Rootcomponent/index";
import QuestionFormListing from "./components/QuestionFormListing/index";
import FormFilling from "./components/FormFilling/index";
function App() {

  return (
    <>
      <ModalProvider backgroundComponent={FadingBackground}>
        <Navbar />
        <Switch>
            <Route path="/" exact={true} component={RootComponent} />
            <Route path="/formlist" exact={true} component={QuestionFormListing} />
            <Route path="/formlist/:id" exact={true} component={FormFilling} />
        </Switch>
      </ModalProvider>
    </>
  );
}

export default App;
