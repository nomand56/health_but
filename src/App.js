import logo from './logo.svg';
import './App.css';
import {useDispatch} from "react-redux"
import {getPost} from "./actions/index"
import { useEffect } from 'react';
import Posts from './components/Posts/Posts';
import { Form } from './components/Forms/Form';
function App() {
const dispatch=useDispatch()


useEffect(() => {
  dispatch(getPost())
}, [])

  return (
    <div className="App">
    <Posts/>
    <Form/>
    </div>
  );
}

export default App;
