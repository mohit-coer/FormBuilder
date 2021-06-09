import React,{useEffect, useState} from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Link}  from "react-router-dom"
import "./index.css"

const RenderQuestionTable = () => {
    const [formData, setFormData] = useState([]);
    useEffect(()=>{
      const headers = {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      };
      axios.get(`${process.env.REACT_APP_URL}questions/getAll`,{
        headers: headers,
      }).then((response)=>{
        setFormData(response.data);
      }).catch((err)=>{
        toast.dark(err);
      })
    },[])
    return (
        <> 
        <ToastContainer />
        <div className="m-auto" style={{width: "70%"}}>
            <table className="table table-bordered mt-3">
              <thead>
                <tr>
                  <th scope="col">S.No</th>
                  <th scope="col">Form Name</th>
                  <th scope="col">Form URL</th>
                  <th scope="col">Created At</th>
                  <th scope="col">Number of Responses</th>
                </tr>
              </thead>
              <tbody>
                  {formData.map((ele, index) => {
                      return <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{ele.questions.formname}</td>
                        <td>
                          <Link className="color" to={"/formlist/"+ele._id}>View Form</Link>
                        </td>
                        <td>{ele.createdAt}</td>
                        <td>{ele.questions.responses.length}</td>
                      </tr>
                    })}
              </tbody>
            </table>
        </div>            
      </>
    );
}

export default RenderQuestionTable;