import { useState } from 'react'
import styled from 'styled-components'
import { Colors } from './StyledComponents'

export const AudienceView = ({Trigger,setTrigger,id}) => {

    const [AudienceTrigger, setAudienceTrigger] = useState(false)

    const ViewAudience = () => {
        
        if (AudienceTrigger === true) {
            setAudienceTrigger(false)
        } else {
            setAudienceTrigger(true)
        }

    }

    const Audience = {
        title: 'audience 1',
        subscribers: 600,
        date: 'Jan 20 2021',
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
                        Audience Details
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
                        <DetailValue> {Audience.title} </DetailValue>
                    </DetailItem>
                    <DetailItem>
                        <DetailHeader> Audience id: </DetailHeader>
                        <DetailValue> {Audience.id} </DetailValue>
                    </DetailItem>
                    <DetailItem>
                        <DetailHeader> Date Created: </DetailHeader>
                        <DetailValue> {Audience.date} </DetailValue>
                    </DetailItem>
                </DetailHolder>
                <Divider></Divider>
                <PrimaryBtn onClick={ViewAudience}>
                    Show Audience
                </PrimaryBtn>
                <AudienceList Trigger={AudienceTrigger} />
                <Divider></Divider>
                <PrimaryBtn>
                    Create New Audience
                </PrimaryBtn>
                <SecondaryBtn>
                    Delete
                </SecondaryBtn>
            </ViewHolder>
        </Darken>
    ) : ''
}

const AudienceList = ({Trigger}) => {

    const List = [
        {
            id: 1,
            name: 'Username12345',
            email: 'Username12345@gmail.com'
        },
        {
            id: 2,
            name: 'Username12345',
            email: 'Username12345@gmail.com'
        },
        {
            id: 3,
            name: 'Username12345',
            email: 'Username12345@gmail.com'
        },
        {
            id: 4,
            name: 'Username12345',
            email: 'Username12345@gmail.com'
        },
        {
            id: 4,
            name: 'Username12345',
            email: 'Username12345@gmail.com'
        },
        {
            id: 4,
            name: 'Username12345',
            email: 'Username12345@gmail.com'
        },
        {
            id: 4,
            name: 'Username12345',
            email: 'Username12345@gmail.com'
        },
        {
            id: 4,
            name: 'Username12345',
            email: 'Username12345@gmail.com'
        },
        {
            id: 4,
            name: 'Username12345',
            email: 'Username12345@gmail.com'
        },
        {
            id: 4,
            name: 'Username12345',
            email: 'Username12345@gmail.com'
        },
        {
            id: 4,
            name: 'Username12345',
            email: 'Username12345@gmail.com'
        },
        {
            id: 4,
            name: 'Username12345',
            email: 'Username12345@gmail.com'
        },
        {
            id: 4,
            name: 'Username12345',
            email: 'Username12345@gmail.com'
        },
        {
            id: 4,
            name: 'Username12345',
            email: 'Username12345@gmail.com'
        },
        {
            id: 4,
            name: 'Username12345',
            email: 'Username12345@gmail.com'
        },
        {
            id: 4,
            name: 'Username12345',
            email: 'Username12345@gmail.com'
        },
        {
            id: 4,
            name: 'Username12345',
            email: 'Username12345@gmail.com'
        },
        {
            id: 4,
            name: 'Username12345',
            email: 'Username12345@gmail.com'
        },
        {
            id: 4,
            name: 'Username12345',
            email: 'Username12345@gmail.com'
        },
        {
            id: 4,
            name: 'Username12345',
            email: 'Username12345@gmail.com'
        },
        {
            id: 4,
            name: 'Username12345',
            email: 'Username12345@gmail.com'
        },
        {
            id: 4,
            name: 'Username12345',
            email: 'Username12345@gmail.com'
        },
        {
            id: 4,
            name: 'Username12345',
            email: 'Username12345@gmail.com'
        },
        {
            id: 4,
            name: 'Username12345',
            email: 'Username12345@gmail.com'
        },
        {
            id: 4,
            name: 'Username12345',
            email: 'Username12345@gmail.com'
        },
        {
            id: 4,
            name: 'Username12345',
            email: 'Username12345@gmail.com'
        },
        {
            id: 4,
            name: 'Username12345',
            email: 'Username12345@gmail.com'
        },
        {
            id: 4,
            name: 'Username12345',
            email: 'Username12345@gmail.com'
        },
        {
            id: 4,
            name: 'Username12345',
            email: 'Username12345@gmail.com'
        },
        {
            id: 4,
            name: 'Username12345',
            email: 'Username12345@gmail.com'
        },
        {
            id: 4,
            name: 'Username12345',
            email: 'Username12345@gmail.com'
        },
        {
            id: 4,
            name: 'Username12345',
            email: 'Username12345@gmail.com'
        },
    ]

    const ShowAudience = List.map((audience)=>(<AudienceItems id={audience.id} name={audience.name} email={audience.email} />))

    return (Trigger) ? (
        <div>
            <TableHeaders>
                <ColH1>
                Id
                </ColH1>
                <ColH2>
                Username
                </ColH2>
                <ColH3>
                Email id
                </ColH3>
            </TableHeaders>
            {ShowAudience}
        </div>
    ) : '';
}

const AudienceItems = ({id,name,email}) => {
    return(
        <ItemHolder>
        <Col1> {id} </Col1>
        <Col2> {name} </Col2>
        <Col3> {email} </Col3>
        </ItemHolder>
    )
}

const TableHeaders = styled.div`

    display: flex;
    border-bottom: 1px solid ${Colors.dark};
    padding-bottom: 4px;
    margin-bottom: 8px;

`

const ItemHolder = styled.div`

    display: flex;
    font-size: 12px;
    margin-bottom: 4px;

`

const Col1 = styled.div`

    width: 8%;

`
const Col2 = styled.div`

    width: 40%;

`
const Col3 = styled.div`

    width: 52%;

`

const ColH1 = styled.div`

    width: 8%;

`
const ColH2 = styled.div`

    width: 40%;

`
const ColH3 = styled.div`

    width: 52%;

`

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
    box-shadow: 0 0px 0px rgba(0, 0, 0, 0.397);

    &:hover{
        box-shadow: 0 5px 5px rgba(0, 0, 0, 0.199);
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
    
    &::-webkit-slider-thumb
        {
            -webkit-appearance: none;
            width: 2px;
        }

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