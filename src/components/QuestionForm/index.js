import React from "react";
import {Container, SubmitButton} from "./question.css";
import {connect} from "react-redux";
import { UITYPE } from "../../common/uitype";
import { Input } from "../Modal/model.css";
import { saveQues } from "../../redux/saveanswer/actionTypes";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const QuestionForm =(props) => {
    const [submit, setSubmit] = React.useState([]);
    const [name, setName] = React.useState('');
    return (
        <>
        <ToastContainer />
        <Container>
                    <h1>Question Form</h1>
            <h4>Name of the form</h4>
            <Input type="text" id="formname" className="mb-4" onChange={(e)=>{
                setName(e.target.value);
            }} />
            {props.questions.length > 0 && 
                <>
                        {props.questions.map((ele,index) => {
                            if(ele.uitype === UITYPE.TEXT)
                            {
                                return <div key={index}>
                                        <h4>{index + 1} . {ele.question}</h4>
                                        <Input type="text" id={'element'+index} 
                                        onChange={(e)=>{
                                            let res = submit;
                                        let flag = false;
                                        res.map(s => {
                                            if(s.question === ele.question)
                                            {
                                                s.answer = e.target.value;                                                                                  
                                                flag = true;
                                            }
                                        })
                                        flag ? setSubmit(res) : setSubmit((prevState)=>[...prevState, {
                                            question: ele.question,
                                            answer: e.target.value,
                                        }]);
                                        
                                        }}/>
                                </div>
                            }
                            if(ele.uitype === UITYPE.RADIO)
                            {
                                return <div key={index} onChange={(e)=>{
                                    let res = submit;
                                    let flag = false;
                                    res.map(s => {
                                        if(s.question === ele.question)
                                        {
                                            s.answer = e.target.value;                                                                                  
                                            flag = true;
                                        }
                                    })
                                    flag ? setSubmit(res) : setSubmit((prevState)=>[...prevState, {
                                        question: ele.question,
                                        answer: e.target.value,
                                    }]);
                                }}>
                                        <h4 className="mt-2">{index + 1} . {ele.question}</h4>
                                        { 
                                            ele.options.split("\n").map((option)=>{
                                                return <div className="form-check">
                                                    <input className="form-check-input" type="radio" 
                                                    name={"element"+index} 
                                                    id={"element"+index} value={option} />
                                                    <label className="form-check-label" htmlFor={"element"+index}>
                                                        {option}
                                                    </label>
                                                </div>
                                            })
                                        }                           
                                </div>
                            }
                            if(ele.uitype === UITYPE.CHK)
                            {
                                return <div key={index} onChange={(e)=>{
                                        let res = submit;
                                        let flag = false;
                                        res.map(s => {
                                            if(s.question === ele.question)
                                            {
                                                if(e.target.checked)
                                                {
                                                    s.answer = s.answer + ", " + e.target.value;
                                                }
                                                else
                                                {
                                                    let answers = s.answer.split(", ");
                                                    let answers_ = [];
                                                    answers.map((ele,n_) => {
                                                        if(ele !== e.target.value)
                                                        {
                                                            answers_.push(answers[n_]);
                                                        }
                                                    });
                                                    let new_ = "";
                                                    answers_.map(ele => {
                                                        new_ = new_ === "" ? ele !== "" && (new_ + ele) : (new_ + ", " + ele);
                                                    })
                                                    s.answer = new_;
                                                }                                               
                                                flag = true;
                                            }
                                        })
                                        flag ? setSubmit(res) : setSubmit((prevState)=>[...prevState, {
                                            question: ele.question,
                                            answer: e.target.value,
                                        }]);
                                        
                                    }}>
                                        <h4 className="mt-2">{index + 1} . {ele.question}</h4>
                                        { 
                                            ele.options.split("\n").map((option)=>{
                                                return <div className="form-check">
                                                <input className="form-check-input" type="checkbox" 
                                                value={option} id={"element"+index} />
                                                <label className="form-check-label" htmlFor={"element"+index}>
                                                    {option}
                                                </label>
                                            </div>
                                            })
                                        }                           
                                </div>
                            }
                        })}
                    <SubmitButton onClick={(e)=>{   
                        props.saveQues({
                            questions: props.questions,
                            responses: [],
                            formname: name
                        });
                    }}>Add Form</SubmitButton>                
                </>
            }
            </Container>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        questions: state.questionReducer,
      };
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        saveQues: (data) => {
            dispatch(saveQues(data, ownProps));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionForm);