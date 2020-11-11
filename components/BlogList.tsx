import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'
import { device } from '../lib'

type Props = {
  title: string;
  date: string;
  description: string;
  slug: string;
}

export const BlogList: React.FC<Props> = ({ title, date, description, slug }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Date>{date}</Date>
      <Description>{description}</Description>
      <ReadMore href={slug}>Read More...</ReadMore>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  margin-top: 2rem;

  &:last-child {
    margin-bottom: 2rem;
  }
`

const Title = styled.h3`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.primary};

  @media ${device.mobileS} {
    font-size: 1.5rem;
  }
`

const Date = styled.p`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.gray};
`

const Description = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.gray};
  margin-top: 12px;
`

const ReadMore = styled(Link)`
  color: ${({ theme }) => theme.colors.primary};
  margin-top: 16px;
`
