import React, { useEffect } from 'react'
import styled from 'styled-components'
import { CompBar } from '../components/CompBar'
import { DashBoardNav } from '../components/DashBoardNav'
import { OverviewChannelA, OverviewChannelB } from '../components/OverviewChannel'
import { Colors } from '../components/StyledComponents'

export const Overview = () => {

    const User = {
        user_id: 'andaob17aiwdbaywd02orjjo1ifw8wa',
        name: 'Rhyo'
    }

    const Active = {
        one: {
            opacity: '0.5',
        },
        two: {
            opacity: '1',
        },
        three: {
            opacity: '1',
        },
        four: {
            opacity: '1',
        },
        left: '0px'
    }

    useEffect(() => {
        


    }, [])

    return (
        <>
            <DashBoardNav Active={Active}/>
            <DashBoardHolder>
                <WelcomeText>Welcome Back, {User.name}</WelcomeText>
                <Header>Account Usage</Header>
                <SectionA>
                        <CompBar width="30%" title="Audience" value="2" total="5" margin="0px 0px 20px 0px" />
                        <CompBar width="30%" title="Audience" value="16" total="100" margin="0px 0px 20px 0px" />
                        <CompBar width="30%" title="Audience" value="2" total="5" margin="0px 0px 20px 0px" />
                        <CompBar width="30%" title="Audience" value="16" total="100" margin="0px 0px 20px 0px" />
                        <CompBar width="30%" title="Audience" value="2" total="5" margin="0px 0px 20px 0px" />
                        <CompBar width="30%" title="Audience" value="16" total="100" margin="0px 0px 20px 0px" />
                </SectionA>
                <SectionB>
                        <BCol1>
                            <SectionHeader>
                                Recent Activity
                            </SectionHeader>
                            <div>
                                <OverviewChannelA title="My Email Campaign" date="5st Jan 2021" link="/campaigns/campaign" />
                                <OverviewChannelA title="My Email Campaign 2" date="5st Jan 2021" link="/campaigns/campaign" />
                                <OverviewChannelA title="My Email Campaign 3" date="5st Jan 2021" link="/campaigns/campaign" />
                                <OverviewChannelA title="My Email Campaign 4" date="5st Jan 2021" link="/campaigns/campaign" />
                            </div>
                        </BCol1>
                        <BCol2>
                            <SectionHeader>
                                Audiences
                            </SectionHeader>
                            <div>
                                <OverviewChannelB title="My Audience" subscribers="500" link="/audience/list1" />
                                <OverviewChannelB title="My Audience 1" subscribers="500" link="/audience/list1" />
                                <OverviewChannelB title="My Audience 2" subscribers="500" link="/audience/list1" />
                                <OverviewChannelB title="My Audience 3" subscribers="500" link="/audience/list1" />
                                <OverviewChannelB title="My Audience 4" subscribers="500" link="/audience/list1" />
                            </div>
                        </BCol2>
                </SectionB>
            </DashBoardHolder>
        </>
    )
}

const SectionHeader = styled.div`

    display: flex;
    align-items: center;
    color: ${Colors.primary};
    height: 48px;
    border-bottom: 1px solid ${Colors.profile};
    widows: 100%;

`

const BCol1 = styled.div`

    width: 47.5%;
    min-width: 300px;

    margin-bottom: 40px;
    
    @media (max-width: 1000px)
    {
        width: 45%;
    }

    @media (max-width: 700px)
    {
        width: 90%;
        min-width: 90%;
    }

`
const BCol2 = styled.div`

    width: 47.5%;
    min-width: 300px;

    margin-bottom: 40px;

    @media (max-width: 1000px)
    {
        width: 45%;
    }

    @media (max-width: 700px)
    {
        width: 90%;
        min-width: 90%;
    }


`

const SectionB = styled.div`

    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

`

const Header = styled.div`

    font-size: 18px;
    color: ${Colors.dark};
    margin-bottom: 12px;

`

const SectionA = styled.div`

    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    margin-bottom: 24px;

`

const DashBoardHolder = styled.div`

    padding-left: 20%;
    padding-right: 20%;

    @media (max-width: 1366px) 
        {
            padding-left: 5%;
            padding-right: 5%;
        }

    @media (max-width: 800px) 
        {
            padding-left: 20px;
            padding-right: 20px;
        }

`

const WelcomeText = styled.div`

    font-size: 32px;
    font-weight: 800;
    color: ${Colors.dark};
    margin: 48px 0px;

`