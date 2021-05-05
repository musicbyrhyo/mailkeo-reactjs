import React from 'react'
import styled from 'styled-components'
import { ChannelA } from '../components/Channels'
import { DashBoardNav } from '../components/DashBoardNav'
import { OverviewChannelA, OverviewChannelB } from '../components/OverviewChannel'

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

    // const CampaignList = Campaigns.map((campaign) => <OverviewChannelA title={campaign.title} date={campaign.date} id={campaign.id}/>)

    return (
        <>
            <DashBoardNav Active={Active}/>
            <CampaignHolder>
                <div>
                    <div>
                        Your Campaigns
                    </div>
                    <div>
                        Create New Campaign
                    </div>
                </div>
                <div>
                    
                </div>
                <div>
                    <ChannelA />
                </div>
            </CampaignHolder>
        </>
    )
}

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