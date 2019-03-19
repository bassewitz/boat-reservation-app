import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
 

  body {
    font-family: Roboto, sans-serif;
    margin: 0;
  }

  h1,  h5, h6,
  ul, ol {
    margin: 0;
  }
  h4{
    font-weight: normal; 
    letter-spacing: 2px;
    color: white;
  }

  label {
    font-family: Roboto, sans-serif;
    font-weight: normal; 
    color: darkturquoise;
    font-size: 13px;
    margin-top: 20px;
  }


  h4{
    font-family: Roboto, sans-serif;
    font-weight: normal; 
    color: darkturquoise;
    font-size: 13px;
    margin: 20px 0 0 0;

  }

  h3 {
    font-family: Roboto, sans-serif;
    font-weight: normal; 
    color: darkturquoise;
    font-size: 13px;
    margin: 20px 0 -10px 0;
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
    margin: -440px 0 0px 0px;
    position: absolute;
  
  }


  input {
    background: white;
    border: 1px solid #ddd;
    border-radius: none;
    background: white;
    padding-left: 4px;
  
  }

  button {
  background: white;
  border: none;
  border-radius: 2px;
  color: darkturquoise;
  font-weight: normal;
  font-size: 13;
  padding: 5px 20px;
  margin: -400px 0 0px 20px;
  position: absolute;

}
`
