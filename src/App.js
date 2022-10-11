/* eslint-disable */

import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let post = "강남 우동 맛집";
  let [title, setTitle] = useState(["남자 코트 추천","강남 우동맛집","파이선 독학"]);
  let [count, setCount] = useState([0,0,0]);
  let [modal, setModal] = useState(false);
  let [modalTitle, setModalTitle] = useState('');
  let [inputValue, setInputValue] = useState('');

  return (
    <div className="App">
      <div className="black-nav">
        <h4>블로그</h4>
      </div>

      <button onClick={() => {
        let copy = [...title];
        copy[0] = '여자코트 추천'
        setTitle(copy)
      }}>글수정</button>

      <button onClick={() => {
        let copy = [...title];
        copy.sort();
        setTitle(copy)
      }}>가나다순정렬</button>

      { /*
      <div className="list">
        <h4>{title[0]} <span onClick={ ()=>{ setCount(count+1)} }>👍</span> { count } </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{title[1]}</h4>
        <p>2월 17일 발행</p>
      </div>      
      <div className="list">
        <h4 onClick={()=> setModal(!modal) }>{title[index]}</h4>
        <p>2월 17일 발행</p>
      </div>   
      */ }
 
      {
        title.map((value,index)=>{
          return (
          <div className="list" key={index}>
            <h4 onClick={()=> {setModalTitle(value); setModal(!modal)} }>
              {title[index]}
              <span onClick={ (e)=>{
                e.stopPropagation();
                let tempCount = [...count]; 
                tempCount[index] = tempCount[index] + 1
                setCount(tempCount)
              }}>👍</span> { count[index] }        
              <span onClick={()=>{
                e.stopPropagation();
                let tempTitle = [...title];
                tempTitle.splice(index,1);
                setTitle(tempTitle);
              }}>삭제</span>    
            </h4>
            <p>2월 17일 발행</p>
          </div>               
          );
        })
      }

      <input onChange={(e)=>{ setInputValue(e.target.value) }}></input>
      <button onClick={()=>{
        let tempTitle = [inputValue,...title];
        setTitle(tempTitle);
      }}>저장</button>

      {
        modal ? <Modal title={modalTitle} setTitle={setTitle} color="skyblue"></Modal> : null
      }




    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal" style={{ background : props.color }}>
    <h4>{props.title}</h4>
    <p>날짜</p>
    <p>상세내용</p>
    <button onClick={()=>{
      let tempTitle = [...props.title];
      tempTitle[0] = '여자코트 추천';
      props.setTitle(tempTitle);
    }}>글수정</button>
  </div>
  )
}

export default App;
