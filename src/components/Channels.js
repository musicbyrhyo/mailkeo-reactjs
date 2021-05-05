import styled from 'styled-components'
import { Colors } from './StyledComponents'

export const ChannelA = ({title,date,list,id}) => {

    const viewcampaign = `/campaigns/${id}`
    const deletecampaign = `/campaigns/${id}/delete`
    const restartcampaign = `/campaigns/${id}/resend`

    return (
            <ChannelAHolder>
                <ALeft>
                    <ALeftHeader>
                        {title}
                    </ALeftHeader>
                    <DateStarted>
                        Date Started: {date}
                    </DateStarted>
                    <DateStarted>
                        Selected List: {list}
                    </DateStarted>
                </ALeft>
                <ARight>
                    <PrimaryBtn href={viewcampaign}>
                        View Campaign
                    </PrimaryBtn>
                    <SecondBtns>
                    <SecondaryBtn href={restartcampaign}>
                        Restart
                    </SecondaryBtn>
                    <SecondaryBtn href={deletecampaign}>
                        Delete
                    </SecondaryBtn>
                    </SecondBtns>
                </ARight>
            </ChannelAHolder>
    )
}

export const ChannelB = ({title,date,subscribers,id}) => {

    const viewlist = `/audience/${id}`
    const deletelist = `/audience/${id}/delete`
    const restartlist = `/audience/${id}/resend`

    return (
            <ChannelAHolder>
                <ALeft>
                    <ALeftHeader>
                        {title}
                    </ALeftHeader>
                    <DateStarted>
                        Date Created: {date}
                    </DateStarted>
                    <DateStarted>
                        Subscribers: {subscribers}
                    </DateStarted>
                </ALeft>
                <ARight>
                    <PrimaryBtn href={viewlist}>
                        View Audience
                    </PrimaryBtn>
                    <SecondaryBtn href={deletelist}>
                        Delete
                    </SecondaryBtn>
                </ARight>
            </ChannelAHolder>
    )
}

const SecondBtns = styled.div`

    display: flex;

`

const DateStarted = styled.div`

    font-weight: 500;
    font-size: 14px;
    color: ${Colors.profile};

`

const ALeft = styled.div`

    @media (max-width: 500px)
    {
        text-align: center;
    }

`
const ARight = styled.div`

    display: flex;
    align-items: center;

    @media (max-width: 700px)
    {
        flex-direction: column;
    }

`

const ALeftHeader = styled.div`

    margin-bottom: 12px;
    color: ${Colors.dark};
    font-size: 20px;
    font-weight: 600;

`

const PrimaryBtn = styled.a`

    margin: 0px 10px;
    letter-spacing: 0.5px;
    font-size: 12px;
    font-weight: 400;
    padding: 0px 12px;
    height: 40px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content:center;
    background-color: ${Colors.primary};

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

const SecondaryBtn = styled.a`

    color: ${Colors.primary};
    margin: 0px 10px;
    letter-spacing: 0.5px;
    font-size: 12px;
    font-weight: 600;
    padding: 0px 12px;
    height: 40px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content:center;
    border: 1px solid ${Colors.primary};

    @media (max-width: 700px)
    {
        margin: 0px 5px;
        width: 100%;
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
