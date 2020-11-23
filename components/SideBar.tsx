import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { device } from '../lib'
import { SocialLink } from '../components'

export const SideBar = () => {
  return (
    <Wrapper>
      <StickyContainer>
        <Title>
          <Link href="/">
            fumihumi
          </Link>
        </Title>
        <Description>WIP: 工事中</Description>
        <Logos>
          <SocialLink type="hatena" />
          <SocialLink type="scrapbox" />
          <SocialLink type="twitter" />
          <SocialLink type="github" />
        </Logos>
      </StickyContainer>
    </Wrapper>
  )
}

const StickyContainer = styled.div`
  position: sticky;
  bottom: 2rem;
  left: 0;
  right: 0;
`

const Wrapper = styled.aside`
  background-color: ${({ theme }) => theme.colors.bgDark};
  color: rgba(255,255,255,.5);
  text-align: center;
  display: flex;
  flex-direction: column;

  @media ${device.mobileS} {
    width: 100%;
    padding: 0;
    height: 30vh;
    justify-content: center;
  }

  @media ${device.tablet} {
    padding: 2rem 1rem;
    width: 20%;
    min-width: 300px;
    max-width: 400px;
    height: auto;
    min-height: 100vh;
    justify-content: flex-end;
    align-items: center;
  }
`

const Title = styled.h1`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.primary};

  a {
    text-decoration: none;

    &:visited {
      /* NOTE: Override visited link style */
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`

const Description = styled.p`
  font-size: 1rem;
`

const Logos = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: space-evenly;
`
