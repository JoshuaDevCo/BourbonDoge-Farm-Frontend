import React from 'react'
import styled from 'styled-components'
import { Heading, Text, BaseLayout} from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import Page from 'components/layout/Page'
import FarmStakingCard from 'views/Home/components/FarmStakingCard'
import CakeStats from 'views/Home/components/CakeStats'
import TotalValueLockedCard from 'views/Home/components/TotalValueLockedCard'
import TwitterCard from 'views/Home/components/TwitterCard'

const Hero = styled.div`
  align-items: center;
  background-repeat: no-repeat;
  background-position: top center;
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-bottom: 22px;
  padding-top: 60px;

  ${({ theme }) => theme.mediaQueries.lg} {
    background-position: left center, right center;
    height: 165px;
    padding-top: 0;
  }
`
const Blurb = styled(Text)`
  color: #000000;
  font-size: 18px;
  font-weight: 600;
`
const Cards = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 32px;

  & > div {
    grid-column: span 6;
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 6;
    }
  }
`

const CTACards = styled(BaseLayout)`
  align-items: start;
  margin-bottom: 32px;

  & > div {
    grid-column: span 6;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 4;
    }
  }
`
const Header = styled.div`
  padding: 32px 0px;
  background: ${({ theme }) => theme.colors.primaryBright};

  padding-left: 16px;
  padding-right: 16px;


  ${({ theme }) => theme.mediaQueries.sm} {
    padding-left: 24px;
    padding-right: 24px;
  }
`

const Home: React.FC = () => {
  const TranslateString = useI18n()

  return (
    <>
      <Header>
        <Heading as="h1" size="xl" color="#FFFFFF" mb="24px">
          Bourbon Finance
        </Heading>
        <Blurb>High yields bottled on DogeChain</Blurb>
      </Header>
      <Page>
        <div>
          <Cards>
            <FarmStakingCard />
            <TotalValueLockedCard />
          </Cards>
        </div>
      </Page>
    </>
  )
}

export default Home
