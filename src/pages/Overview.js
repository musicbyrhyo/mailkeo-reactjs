import React from 'react'
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

    const Campaigns = [
        {
            title: 'My Email Campaign 1',
            date: '05-01-2021',
            id: 1
        },
        {
            title: 'My Email Campaign 2',
            date: '05-01-2021',
            id: 2
        },
        {
            title: 'My Email Campaign 3',
            date: '05-01-2021',
            id: 3
        },
    ]

    const CampaignList = Campaigns.map((campaign) => <OverviewChannelA title={campaign.title} date={campaign.date} id={campaign.id}/>)

    const Audience = [
        {
            title: 'audience 1',
            subscribers: 600,
            id: 1
        },
        {
            title: 'audience 2',
            subscribers: 800,
            id: 2
        },
        {
            title: 'audience 3',
            subscribers: 1200,
            id: 3
        },
    ]

    const AudienceList = Audience.map((audience) => <OverviewChannelB title={audience.title} subscribers={audience.subscribers} id={audience.id}/>)

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
                                {CampaignList}
                                <ViewAll href="/campaigns">
                                    <LinkText>
                                        All Campaigns
                                    </LinkText>
                                    <svg width="19" height="11" viewBox="0 0 19 11" fill={Colors.light} xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13.7072 0.345703L12.8669 1.18609L16.4323 4.75149H0.935547V5.94003H16.4322L12.8669 9.50532L13.7072 10.3457L18.7073 5.3457L13.7072 0.345703Z"/>
                                    </svg>
                                </ViewAll>
                            </div>
                        </BCol1>
                        <BCol2>
                            <SectionHeader>
                                Audiences
                            </SectionHeader>
                            <div>
                                {AudienceList}
                                <ViewAll href="/audience" >
                                    <LinkText>
                                        All Audiences
                                    </LinkText>
                                    <svg width="19" height="11" viewBox="0 0 19 11" fill={Colors.light} xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13.7072 0.345703L12.8669 1.18609L16.4323 4.75149H0.935547V5.94003H16.4322L12.8669 9.50532L13.7072 10.3457L18.7073 5.3457L13.7072 0.345703Z"/>
                                    </svg>
                                </ViewAll>
                            </div>
                        </BCol2>
                </SectionB>
            </DashBoardHolder>
        </>
    )
}

const LinkText = styled.div`

    font-size: 14px;
    margin-right: 6px;

`

const ViewAll = styled.a`

    color: ${Colors.light};
    width: 100%;
    min-width: 140px;
    max-width: 200px;
    margin-top: 20px;
    display: flex;
    align-items: center;
    padding: 16px;
    background-color: ${Colors.primary};
    border-radius: 5px;


`

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