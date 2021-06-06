import React from "react";
import {Container} from "./question.css";
import {connect} from "react-redux";
import { UITYPE } from "../../common/uitype";
import { Input } from "../Modal/model.css"

const QuestionForm =(props) => {    
    return (
        <Container>
            <h1>Question Form</h1>
            {props.questions.length > 0 && 
                props.questions.map((ele,index)=>{
                   if(ele.uitype === UITYPE.TEXT)
                   {
                       return <>
                            <h4>{index + 1} . {ele.question}</h4>
                            <Input type="text" id={'element'+index} />
                       </>
                   }
                   if(ele.uitype === UITYPE.RADIO)
                   {
                       return <>
                            <h4 className="mt-2">{index + 1} . {ele.question}</h4>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" 
                                name="exampleRadios" 
                                id={"element"+index} value="option1" checked />
                                <label className="form-check-label" htmlFor={"element"+index}>
                                    Default radio
                                </label>
                            </div>
                       </>
                   }
                })
            }
        </Container>       
    )
}

const mapStateToProps = (state) => {
    return {
        questions: state.questionReducer,
      };
}

export default connect(mapStateToProps, null)(QuestionForm);