import React from 'react'
import styled from 'styled-components'
import { ChannelA, ChannelB } from '../components/Channels'
import { CompBar } from '../components/CompBar'
import { DashBoardNav } from '../components/DashBoardNav'
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
            list: 'list1',
            id: 1
        },
        {
            title: 'My Email Campaign 2',
            date: '05-01-2021',
            list: 'list1',
            id: 2
        },
        {
            title: 'My Email Campaign 3',
            date: '05-01-2021',
            list: 'list1',
            id: 3
        },
    ]

    const CampaignList = Campaigns.map((campaign) => <ChannelA title={campaign.title} date={campaign.date} list={campaign.list} id={campaign.id}/>)

    const Audience = [
        {
            title: 'audience 1',
            subscribers: 600,
            date: '05-10-2020',
            id: 1
        },
        {
            title: 'audience 2',
            subscribers: 800,
            date: '05-10-2020',
            id: 2
        },
        {
            title: 'audience 3',
            subscribers: 1200,
            date: '05-10-2020',
            id: 3
        },
    ]

    const AudienceList = Audience.map((audience) => <ChannelB title={audience.title} subscribers={audience.subscribers} date={audience.date} id={audience.id}/>)

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
                    <SectionHeader>
                        Recent Campaigns
                    </SectionHeader>
                    <div>
                        {CampaignList}
                    </div>
                </SectionB>
                <SectionC>
                    <SectionHeader>
                        Frequently Used Audience
                    </SectionHeader>
                    <div>
                        {AudienceList}
                    </div>
                </SectionC>
            </DashBoardHolder>
        </>
    )
}

const SectionHeader = styled.div`

    font-size: 20px;
    border-bottom: 1px solid ${Colors.dark};
    padding-bottom: 12px;

`

const SectionC= styled.div`


`

const SectionB = styled.div`


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