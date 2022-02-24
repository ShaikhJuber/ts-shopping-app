import styled from "styled-components";


export const Wrapper = styled.div`

display: flex;
justify-content: space-between;
flex-direction: column;
width: 100%;
height: 100%;
border: 1px solid black;



Button {
    transition-duration: 0.4s;
    background-color: #047BD5; 
    color: white;

  }
  
  Button:hover {
    background-color: #4CAF50; 
    color: white;
  }

img {
    max-height: 250px;
    object-fit: cover;
    border-redius: 20px 20px 0 0;
}

div {
    font-family: Arial, Helvetica, sans-serif;
    padding: 1rem;
    height: 100%;
}

`;