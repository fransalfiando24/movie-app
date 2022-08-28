import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';


function Search() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const searchMoviesHandle = (e) => {
    e.preventDefault();
    if(input.length > 0){
      navigate('/searched/'+input);
    }
    else{
      navigate('/');
    }
  }

  return (
      <FormComponent onSubmit={searchMoviesHandle}>
        <input type="text" onChange={(e) => setInput(e.target.value)} value={input} placeholder='Search by title...'/>
      </FormComponent>
  )
}

const FormComponent = styled.form`
  position: relative;
  display: block;
  input{
    background: transparent;
    outline: none;
    border: 2px solid #f3da35a7;
    border-radius: 2rem;
    color: #adadad;
    padding: .5rem;
  }
`



export default Search