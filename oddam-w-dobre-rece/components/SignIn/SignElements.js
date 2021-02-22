import styled from "styled-components";

export const LayoutSign = styled.div`
display: flex;
flex-direction: column;
margin-top: 0;
box-sizing: border-box;
width: 100%;
`

export const ContentWrapper = styled.div`
display: flex;
flex-direction: column;
/* justify-content: center; */
width: 504px;
margin: 0 auto;
`

export const Header = styled.h1`
font-size: 40px;
color: #3C3C3C;
letter-spacing: -0.8px;
margin-top: 109px;
display: flex;
align-items: center;
justify-content: center;
width: 100%;
`

export const InputWrapper = styled.div`
box-sizing: border-box;
display: flex;
flex-direction: column;
justify-content: center;
align-self: center;
/* align-items: center; */
background-color: #F0F1F1;
height: 235px;
width: 385px;
padding: 40px 67.25px;
/* margin: 40px 67.25px; */
/* padding: 40px 67.25px; */


`
export const InputLabel = styled.label`
font-size: 16px;
font-weight: 600;
color: #3C3C3C;
`


export const InputSelector = styled.input`
border:0; 
  border-bottom:1px solid #3C3C3C; 
  background-color: transparent;
  height: 60px;
  width: 250px;
  margin-bottom: 15px;
  text-align: left;
  align-self: center;
`

export const BtnWrapper = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
margin-top: 40px;
`

export const SignBtn = styled.button`
box-sizing: border-box;
color: #3C3C3C;
font-weight: 300;
font-size: 18px;
padding: 13px 15px;
border: none;
background-color: white;
&:active {
    border: 0.75px solid #3C3C3C;
}
`