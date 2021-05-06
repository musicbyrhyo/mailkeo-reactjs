import styled from 'styled-components'
import { ChannelA, ChannelB } from '../components/Channels'
import { DashBoardNav } from '../components/DashBoardNav'
import { Colors } from '../components/StyledComponents'

export const Audience = () => {

    const Active = {
        one: {
            opacity: '1',
        },
        two: {
            opacity: '1',
        },
        three: {
            opacity: '0.5',
        },
        four: {
            opacity: '1',
        },
        left: '200px'
    }

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

    const AudienceList = Audience.map((audience) => <ChannelB title={audience.title} subscribers={audience.subscribers} id={audience.id}/>)


    return (
        <>
            <DashBoardNav Active={Active}/>
            <CampaignHolder>
                <HeaderHolder>
                    <Header>
                        Your Campaigns
                    </Header>
                    <CreateCampaign href="/create/audience">
                        Create New Audience
                    </CreateCampaign>
                </HeaderHolder>
                <div>
                    <SubHeader>
                        Last 30 Days
                    </SubHeader>
                    <Divider></Divider>
                    <div>
                        {AudienceList}
                    </div>
                </div>
                <div>
                    <SubHeader>
                        Past Campaigns
                    </SubHeader>
                    <Divider></Divider>
                    <div>
                        {AudienceList}
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