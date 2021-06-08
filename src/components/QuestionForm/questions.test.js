import 'jsdom-global/register';
import React from 'react';
import { ADD_QUESTION } from "../../redux/questions/actions";
import QuestionForm from "./index";
import { configure,mount  } from 'enzyme';
import { Provider } from "react-redux";
import store from "../../redux/store/index";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
configure({ adapter: new Adapter() });

describe('Questions',()=>{
    it('render questions ', () => {
        //const store = mockStore({});
        store.dispatch({
            type: ADD_QUESTION,
            payload: [{
                question: "This is the ques",
                uitype: 0,
                label: "",
                options: "",
            }]
        });
        const wrapper = mount(
            <Provider store={store}>
            <QuestionForm />
            </Provider>
        );
        expect(wrapper).toMatch(/This is the ques/i);
    });    
    it('render Uis ', () => {
        //const store = mockStore({});
        store.dispatch({
            type: ADD_QUESTION,
            payload: [{
                question: "Gender",
                uitype: 1,
                label: "",
                options: "Male\nFemale",
            }]
        });
        const wrapper = mount(
            <Provider store={store}>
            <QuestionForm />
            </Provider>
        );
        expect(wrapper).toMatch(/Male/i);
    });    
})
