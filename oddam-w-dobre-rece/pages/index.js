import Head from 'next/head';
import styled from 'styled-components';

import PreNav from '../components/Nav/Nav';
import React from "react";


const Body = styled.body`
box-sizing: border-box;
`

export default function Home() {
  return (
    <>
      <Head>
        <title>Oddam w dobre ręce</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Body>
        <PreNav />
      </Body>
    </>

  )
}
