import React from 'react'
import styled from 'styled-components'
import { ChannelA } from '../components/Channels'
import { DashBoardNav } from '../components/DashBoardNav'
import { Colors } from '../components/StyledComponents'

export const Campaigns = () => {

    const Active = {
        one: {
            opacity: '1',
        },
        two: {
            opacity: '0.5',
        },
        three: {
            opacity: '1',
        },
        four: {
            opacity: '1',
        },
        left: '100px'
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
            list: 'list3',
            id: 2
        },
        {
            title: 'My Email Campaign 3',
            date: '05-01-2021',
            list: 'list2',
            id: 3
        },
    ]

    const CampaignList = Campaigns.map((campaign) => <ChannelA title={campaign.title} date={campaign.date} id={campaign.id} list={campaign.list} />)

    return (
        <>
            <DashBoardNav Active={Active}/>
            <CampaignHolder>
                <HeaderHolder>
                    <Header>
                        Your Campaigns
                    </Header>
                    <CreateCampaign href="/create/campaign">
                        Create New Campaign
                    </CreateCampaign>
                </HeaderHolder>
                <div>
                    <SubHeader>
                        Last 30 Days
                    </SubHeader>
                    <Divider></Divider>
                    <div>
                        {CampaignList}
                    </div>
                </div>
                <div>
                    <SubHeader>
                        Past Campaigns
                    </SubHeader>
                    <Divider></Divider>
                    <div>
                        {CampaignList}
                    </div>
                </div>
            </CampaignHolder>
        </>
    )
}

const Divider = styled.div`

    height: 1px;
    width: 100%;
    background-color: ${Colors.profile};
    margin-top: 8px;

`

const SubHeader = styled.div`

    font-size: 16px;
    color: ${Colors.profile};
`

const Header = styled.div`

    font-size: 32px;
    font-weight: 800;

`

const HeaderHolder = styled.div`

    margin: 40px 0px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    
`

const CreateCampaign = styled.a`

    font-size: 12px;
    letter-spacing: 0.5px;
    font-weight: 400;
    border-radius: 5px;
    padding: 10px;
    height: 40px;
    width: 200px;
    background-color: ${Colors.primary};
    display: flex;
    align-items: center;
    justify-content: center;

`

const CampaignHolder = styled.div`

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