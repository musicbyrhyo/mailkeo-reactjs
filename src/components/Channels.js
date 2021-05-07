import { useState } from 'react'
import styled from 'styled-components'
import { AudienceView } from './AudienceView'
import { CampaignView } from './CampaignView'
import { Colors } from './StyledComponents'

export const ChannelA = ({title,date,list,id}) => {

    const [OpenView, setOpenView] = useState(false)

    const ViewCampaign = async () => {

        setOpenView(true)

    }

    return (
        <>
            <ChannelAHolder>
                <div>
                    <Title>
                        Campaign Name:
                    </Title>
                    <Value>
                        {title}
                    </Value>
                </div>
                <div>
                    <Title>
                        Date Started:
                    </Title>
                    <Value>
                        {date}
                    </Value>
                </div>
                <div>
                    <Title>
                        Recipients
                    </Title>
                    <Value>
                        {list}
                    </Value>
                </div>
                <PrimaryBtn onClick={ViewCampaign}>
                    View Campaign
                </PrimaryBtn>
            </ChannelAHolder>
            <CampaignView Trigger={OpenView} setTrigger={setOpenView} id={id} />
        </>
    )
}

export const ChannelB = ({title,date,subscribers,id}) => {

    const [OpenView, setOpenView] = useState(false)

    const ViewAudience = async () => {

        setOpenView(true)

    }

    return (
        <>
            <ChannelAHolder>
                <div>
                    <Title>
                        Campaign Name:
                    </Title>
                    <Value>
                        {title}
                    </Value>
                </div>
                <div>
                    <Title>
                        Date Started:
                    </Title>
                    <Value>
                        {date}
                    </Value>
                </div>
                <div>
                    <Title>
                        Subscribers
                    </Title>
                    <Value>
                        {subscribers}
                    </Value>
                </div>
                <PrimaryBtn onClick={ViewAudience} >
                    View Audience
                </PrimaryBtn>
            </ChannelAHolder>
            <AudienceView Trigger={OpenView} setTrigger={setOpenView} id={id} />
        </>
    )
}

const Title = styled.div`

    font-size: 14px;
    font-weight: 400;

`
const Value = styled.div`

    font-size: 20px;
    font-weight: 600;

`

const PrimaryBtn = styled.div`

    margin: 0px 10px;
    letter-spacing: 0.5px;
    font-size: 12px;
    font-weight: 400;
    padding: 0px 12px;
    height: 40px;
    width: 160px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content:center;
    background-color: ${Colors.primary};
    border: 2px solid ${Colors.primary};
    color: ${Colors.light};
    cursor: pointer;
    transition: 250ms ease-in-out;

    &:hover{
        background-color: ${Colors.light};
        color: ${Colors.primary};
        font-weight: 800;
        transition: 100ms ease-in-out;
    }

    @media (max-width: 700px)
    {
        width: calc(100% - 10px);
        margin-bottom: 10px;
    }

    @media (max-width: 700px)
    {
        width: calc(100% - 10px);
        margin-bottom: 10px;
        margin-top: 10px;
    }

`

const ChannelAHolder = styled.div`

    width: 100%;
    border: 1px solid ${Colors.light};
    border-radius: 5px;
    background-color: ${Colors.light};
    padding: 32px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: 100ms ease-in-out;

    margin: 20px 0px;

    &:hover{

        border: 1px solid ${Colors.primary};
        transition: 10ms ease-in-out;
    
    }

    @media (max-width: 500px)
    {
        width: 100%;
        flex-direction: column;
    }

`
