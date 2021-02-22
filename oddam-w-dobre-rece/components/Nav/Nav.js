import React, { useState, useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { NavBtn, NavItem, NavWrapper, PageNavWrapper, SignInBtn, SignUpBtn, SignWrapper } from './NavElements';
import Link from "next/link"
import useSWR from 'swr';
import cookie from 'js-cookie';

const PreNav = ({ toggle }) => {

    const changeNav = () => {
        if (window.scrollY >= 132) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    };
    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    };

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
        <>
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
                        <NavBtn to="/" onClick={toggleHome}>Start</NavBtn>
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
        </>
    )
}

export default PreNav
