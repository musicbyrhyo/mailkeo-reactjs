import styled from 'styled-components'
import { Colors } from './StyledComponents'

export const CampaignView = ({Trigger,setTrigger,id}) => {
    

    const Campaign = {
        title: 'My Email Campaign 1',
        date: '05-01-2021',
        list: 'list1',
        message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        id: 1
    }

    const CloseView = () => {
        setTrigger(false)
    }

    return (Trigger) ? (
        <Darken>
            <ViewHolder>
                <TopBar>
                    <TopBarHeader>
                        Campaign Details
                    </TopBarHeader>
                    <Close onClick={CloseView}> 
                        <svg width="14" height="14" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17 17L1 1M17 1L1 17" stroke="black" stroke-width="1" stroke-linecap="round"/>
                        </svg>
                    </Close>
                </TopBar>
                <DetailHolder>
                    <DetailItem>
                        <DetailHeader> Campaign Name: </DetailHeader>
                        <DetailValue> {Campaign.title} </DetailValue>
                    </DetailItem>
                    <DetailItem>
                        <DetailHeader> Campaign id: </DetailHeader>
                        <DetailValue> {Campaign.id} </DetailValue>
                    </DetailItem>
                    <DetailItem>
                        <DetailHeader> Date Started: </DetailHeader>
                        <DetailValue> {Campaign.date} </DetailValue>
                    </DetailItem>
                    <DetailItem>
                        <DetailHeader> Recipients: </DetailHeader>
                        <DetailValue> {Campaign.list} </DetailValue>
                    </DetailItem>
                    <DetailItem>
                        <DetailHeader> Message: </DetailHeader>
                        <DetailValue> {Campaign.message} </DetailValue>
                    </DetailItem>
                </DetailHolder>
                <Divider></Divider>
                <PrimaryBtn>
                    Start New Campaign
                </PrimaryBtn>
                <SecondaryBtn>
                    Restart Campaign
                </SecondaryBtn>
                <SecondaryBtn>
                    Delete
                </SecondaryBtn>
            </ViewHolder>
        </Darken>
    ) : ''
}

const Divider = styled.div`

    height: 1px;
    width: 100%;
    background-color: ${Colors.dark};
    margin-top: 6px;

`

const PrimaryBtn = styled.div`

    letter-spacing: 0.5px;
    font-size: 12px;
    font-weight: 400;
    height: 40px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content:center;
    background-color: ${Colors.primary};
    color: ${Colors.light};
    margin: 20px 0px;
    cursor: pointer;
    transition: 100ms ease-in-out;

    &:hover{
        box-shadow: 0 5px 5px rgba(0, 0, 0, 0.397);
        transition: 100ms ease-in-out;
    }

`

const SecondaryBtn = styled.div`

    color: ${Colors.primary};
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
    margin: 20px 0px;
    cursor: pointer;

`

const DetailValue = styled.div`

    font-size: 18px;
    font-weight: 500;

`

const DetailHeader = styled.div`

    font-size: 14px;
    font-weight: 400;
    margin-bottom: 6px;

`

const DetailItem = styled.div`

    margin-bottom: 16px;

`

const DetailHolder = styled.div`

    display: flex;
    flex-direction: column;

`

const TopBarHeader = styled.div`

    font-size: 28px;
    margin-bottom: 24px;
    color: ${Colors.primary};

`

const TopBar = styled.div`

    display: flex;
    align-items: flex-start;
    justify-content: space-between;

`

const ViewHolder = styled.div`

    top: 100px;
    left: 50%;
    transform: translateX(-50%);
    width: 24%;
    height: 80%;
    overflow-y: auto;
    min-width: 360px;
    background-color: #f7f7f7;
    padding: 48px;
    position: absolute;
    z-index: 1;

`

const Close = styled.div`
    
    display: flex; 
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border: 1px solid ${Colors.profile};
    border-radius: 5px;
    cursor: pointer;

`

const Darken = styled.div`

    position: fixed;
    top: 0px;
    left: 0px;
    background-color: rgba(0, 0, 0, 0.253);
    height: 100vh;
    width: 100%;
    max-width: 100vw;
    z-index: 0;

`