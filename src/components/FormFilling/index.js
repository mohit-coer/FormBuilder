import React, { useEffect, useState } from "react";
import axios from "axios";
import {Container, SubmitButton} from "./index.css";
import { UITYPE } from "../../common/uitype";
import { Input } from "../Modal/model.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FormFilling = (props) => {
    const [questions, setQuestions] = useState([]);
    const [submit, setSubmit] = useState([]);
    const [formname, setFormname] = useState('');
     useEffect(()=>{
        const headers = {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          };
          axios.post(`${process.env.REACT_APP_URL}questions/getById`,{
            "questions_id": props.match.params.id
        },{
            headers: headers,
          }).then((response)=>{
              setFormname(response.data[0].questions.formname);
              setQuestions(response.data[0].questions.questions);
          }).catch((err)=>{
          })
    },[]);
    return (
        <>
        <ToastContainer />
            <Container>
                <h1>{formname}</h1>   
                {questions.map((ele,index) => {
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
                const headers = {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                  };
                axios.put(`${process.env.REACT_APP_URL}questions/addResponseInForm`, {
                    "questions_id": props.match.params.id,
                    "questions": submit
                }, {
                headers: headers,
                }).then((res)=>{
                    props.history.push("/formlist");
                });
            }}>Submit</SubmitButton>          
            </Container>
        </>
        );
}

export default FormFilling;