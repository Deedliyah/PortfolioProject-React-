import React, { useState } from 'react'
import Link from "next/link"
import { signIn, useSession } from "next-auth/client";
import { BtnWrapper, ContentWrapper, Header, InputLabel, InputSelector, InputWrapper, LayoutSign, SignBtn } from './SignElements';
import { NavBtn, NavItem, NavWrapper, PageNavWrapper, SignInBtn, SignUpBtn, SignWrapper } from './../Nav/NavElements';
import useSWR from 'swr';
import cookie from 'js-cookie';


const Logowanie = () => {
    const [loginError, setLoginError] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        //call api
        fetch('/api/auth', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password,
            }),
        })
            .then((r) => {
                return r.json();
            })
            .then((data) => {
                if (data && data.error) {
                    setLoginError(data.message);
                }
                if (data && data.token) {
                    //set cookie
                    cookie.set('token', data.token, { expires: 2 });
                    Router.push('/');
                }
            });
    }

    const { data, revalidate } = useSWR('/api/me', async function (args) {
        const res = await fetch(args);
        return res.json();
    });
    if (!data) return <h1>Loading...</h1>;
    let loggedIn = false;
    if (data.email) {
        loggedIn = true;
    };

    return (
        <LayoutSign>
            <NavWrapper>
                <SignWrapper>
                    {!loggedIn && (
                        <>
                            <SignInBtn>
                                <Link href="/logowanie"><a>Zaloguj się</a></Link></SignInBtn>
                        </>
                    )}
                    {loggedIn && (
                        <SignInBtn> Cześć {data.email}! </SignInBtn>
                    )}
                    <SignUpBtn>Zarejestruj się</SignUpBtn>
                </SignWrapper>
                <PageNavWrapper>
                    <NavItem>
                        <NavBtn to="/">Start</NavBtn>
                    </NavItem>
                    <NavItem>
                        <NavBtn to="mission" smooth={true} duration={500} spy={true} exact='true' offset={-132}>O co chodzi?</NavBtn>
                    </NavItem>
                    <NavItem>
                        <NavBtn to="aboutus" smooth={true} duration={500} spy={true} exact='true' offset={-132}>O nas</NavBtn>
                    </NavItem>
                    <NavItem>
                        <NavBtn to="organizations" smooth={true} duration={500} spy={true} exact='true' offset={-132}>Fundacje i organizacje</NavBtn>
                    </NavItem>
                    <NavItem>
                        <NavBtn to="contact" smooth={true} duration={500} spy={true} exact='true' offset={-132}>Kontakt</NavBtn>
                    </NavItem>
                </PageNavWrapper>
            </NavWrapper>
            <ContentWrapper>
                <Header>Logowanie</Header>
                <InputWrapper>
                    <form onSubmit={handleSubmit}>
                        <InputLabel>Email</InputLabel>
                        <InputSelector type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <InputLabel>Hasło</InputLabel>
                        <InputSelector type="password" value={password}
                            onChange={(e) => setPassword(e.target.value)} />
                    </form>
                </InputWrapper>

                <BtnWrapper>
                    <SignBtn>
                        Załóz konto
                    </SignBtn>
                    <SignBtn type="submit" value="Submit">
                        Zaloguj się
                    </SignBtn>
                    {loginError && <p style={{ color: 'red' }}>{loginError}</p>}
                </BtnWrapper>
            </ContentWrapper>
        </LayoutSign>
    )
}

export default Logowanie
