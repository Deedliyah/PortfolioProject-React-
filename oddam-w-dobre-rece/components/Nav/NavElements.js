import styled from 'styled-components';
import { Link as LinkS } from 'react-scroll';

export const NavWrapper = styled.nav`
background: ${({ scrollNav }) => (scrollNav ? '#FFFFFF' : 'transparent')};
/* margin-top: -132px; */
padding-top: 37px;
height: 132px;
width: 100%;
display: flex;
flex-direction: column;
justify-content: flex-end;
z-index: 10;
max-width: 600px;
position: sticky;
top: 0;
margin-right: 142px;
margin-left: auto;
box-sizing: border-box;
`

export const SignWrapper = styled.div`
margin-top: 37px;
display: flex;
justify-content: flex-end;
align-items: center;
`
export const SignInBtn = styled.a`
text-decoration: none;
font-size: 13px;
font-family: 'Open Sans', sans-serif;
padding: 9px 10px;
color: #737373;
cursor: pointer;
`

export const SignUpBtn = styled.a`
text-decoration: none;
border: 0.75px solid #FAD648;
font-size: 13px;
font-family: 'Open Sans', sans-serif;
padding: 9px 10px;
color: #737373;
cursor: pointer;
`

export const PageNavWrapper = styled.ul`
/* max-width: 600px; */
margin-top: 15px;
display: flex;
justify-content: flex-end;
align-items: center;
list-style: none;
height: 45px;
`

export const NavItem = styled.li`
padding-left: 55px;
display:flex;

`

export const NavBtn = styled(LinkS)`
text-decoration: none;
white-space: nowrap;
font-size: 18px;
font-family: 'Open Sans', sans-serif;
color: #3C3C3C;
padding: 20px 17px;
cursor: pointer;

&:active {
    border: 0.75px solid #3C3C3C;
};
`