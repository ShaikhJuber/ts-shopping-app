import styled from "styled-components"

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: Arial, Helvetica, sans-serif;
  padding-bottom: 20px;
  border: 2px solid lightblue;
  padding: 12px;
  div {
      flex: 1;
   }

   .information,
   button {
       display:flex;
       justify-content: space-between;
       
   }

   img{
       width: 100px;
       height: 100%;
       object-fit: cover;
       margin-left: 40px;
   }
`
