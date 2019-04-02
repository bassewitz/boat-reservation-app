import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
 

  body {
    font-family: Roboto, sans-serif;
    margin: 0;
    box-sizing: content-box;
width: 100%;
height:100%;
  }

  h1 {
    font-family: Roboto, sans-serif;
    font-weight: normal; 
    color: white;
    font-weight: bold; 
    margin:0px 50px 0 20px;
    padding: 50px 0 0 0;
    font-size: 30px;
  }
  ul, ol {
    margin: 0;
  }

   

  label {
    font-family: Roboto, sans-serif;
    font-weight: normal; 
    color: darkturquoise;
    font-size: 13px;
    margin-top: 10px;
    width: 335px;
    @media (min-width: 400px) {
   display: flex; 
  justify-content: center; 
  flex-direction: column;
  margin: auto;

  }}


  h4{
    font-weight: normal; 
    letter-spacing: 2px;
    color: pink;
    font-family: Roboto, sans-serif;
    font-weight: normal; 
    color: white;
    font-size: 13px;
    margin: 20px 0 0 0;

  }

  h3 {
    font-family: Roboto, sans-serif;
    font-weight: normal; 
    color: darkturquoise;
    font-size: 13px;
    margin: 40px 0 -10px 0;
    @media (min-width: 400px) {
   display: flex;   
   justify-content: center; 
  }
  }
  
  p{
    color:black;
    font-size:14px;
  }

  
  h2 {
    border: none;
    border-radius: 2px;
    color: white;
    font-family: roboto, sans-serif;
    font-weight: lighter;
    font-size: 15px;
    padding: 5px 20px;
    text-align: left;
    top: 0;
    margin: 280px 0 0px 0px;
    position: absolute;
    
  
  }

  h5 {
    font-family: Roboto, sans-serif;
    font-weight: normal; 
    color: darkturquoise;
    font-size: 15px;
    margin: 40px 0 0 0;
    padding:20px 0 0 20px;
  }
  
  h6{
    font-family: Roboto, sans-serif;
    font-weight: bolder; 
    color: dimgray;
    font-size: 22px;
    margin: -30px 0 0 250px;
  }

  input {
    background: white;
    border: 1px solid #ddd;
    border-radius: none;
    background: white;
    padding-left: 4px;
  
  }
`
