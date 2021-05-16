import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import styled from 'styled-components'
import { DashBoardNav } from '../components/DashBoardNav'
import { Colors } from '../components/StyledComponents'
import './font.css'

const hostname = process.env.REACT_APP_API
const token = localStorage.getItem('token')
const username = localStorage.getItem('username')

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
        left: '1000px'
    }

    const { id } = useParams()

    const [Audience, setAudience] = useState({a_subscribers: []})

    let AudienceList = Audience.a_subscribers.map((audience)=><AudienceItem name={audience.s_name} email={audience.s_email} />)

    const DeleteAudience = async (req,res) => {

        try {
            
            const res = await axios.post(`${hostname}/audience/delete`,{
                _id: id
            },{
                headers:{
                    'authorization': token
                }
            })

            console.log(res);

            window.location.href='/campaigns'

        } catch (error) {
            
            console.log(error.response);

        }

    }

    useEffect(() => {

        console.log(id);

        const GetCampaign = async () => {
        
            try {
                
                const res = await axios.post(`${hostname}/audience/get`,{
                    _id: id
                },{
                    headers:{
                        'authorization': token
                    }
                })

                console.log(res);
                setAudience(res.data)

            } catch (error) {
                
            }

        }

        GetCampaign()

    }, [id])

    return (
        <>
            <DashBoardNav Active={Active} />
            <Holder>
                <Header>Audience</Header>
                <Pos> Home -> Audience -> {Audience.a_name} </Pos>
                <HolderInner>
                    <LeftCol>
                        <HeaderLeft>Audience Details</HeaderLeft>
                        <CamItems><Field>Audience Name:</Field><Value>{Audience.a_name}</Value></CamItems>
                        <CamItems><Field>Audience uri:</Field><Value>{Audience.a_uri}</Value></CamItems>
                        <CamItems><Field>Join Link:</Field><Value> localhost:3000/join/{username}/{Audience.a_uri} </Value></CamItems>
                        <SecondaryBtn onClick={DeleteAudience} >
                            Delete Audience
                        </SecondaryBtn>
                    </LeftCol>
                    <RightCol>
                        <div>
                            <SideBHeader>Audience Details</SideBHeader>
                            <SideBDesc>This list consists of these subscribers</SideBDesc>
                            <AItemHeader>
                                <AColL>
                                    Name
                                </AColL>
                                <AColR>
                                    Email
                                </AColR>
                            </AItemHeader>
                            <div>
                                {AudienceList}
                            </div>
                        </div>
                    </RightCol>
                </HolderInner>
            </Holder>
        </>
    )
}

const AudienceItem = ({name,email}) => {
    return(
        <AItem>
            <AName>{name}</AName>
            <AEmail>{email}</AEmail>
        </AItem>
    )
}

const CamItems = styled.div`

    margin-top: 14px;

`

const Field = styled.div`

    font-size: 14px;
    font-weight: 600;
    margin-bottom: 4px;

`
const Value = styled.div`

    font-size: 18px;
    font-weight: 500;

`

const Pos = styled.div`

    font-weight: 500;

`

const SecondaryBtn = styled.div`

    letter-spacing: 0.5px;
    font-size: 12px;
    font-weight: 400;
    height: 40px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content:center;
    background-color: transparent;
    color: ${Colors.dark};
    border: 1px solid ${Colors.dark};
    margin: 20px 0px;
    cursor: pointer;
    transition: 100ms ease-in-out;

    &:hover{
        box-shadow: 0 5px 5px rgba(0, 0, 0, 0.397);
        transition: 100ms ease-in-out;
    }

`

const SideBDesc = styled.div`

    margin-bottom: 12px;
    font-weight: 500;

`

const SideBHeader = styled.div`

    font-size: 24px;
    margin-bottom: 4px;

`

const AColL = styled.div`

    font-size: 18px;
    font-weight: 800;
    width: 40%;

`

const AColR = styled.div`

    font-size: 18px;
    font-weight: 800;
    width: 60%;

`

const AItemHeader = styled.div`

    display: flex;
    align-items: center;
    border-bottom: 1px solid ${Colors.dark};
    padding-bottom: 6px;
    margin-bottom: 10px;

`

const AItem = styled.div`

    display: flex;
    align-items: center;
    margin-bottom: 8px;

`

const AName = styled.div`

    width: 40%;
    font-weight: 500;

`

const AEmail = styled.div`

    width: 60%;
    font-weight: 500;

`

const Header = styled.div`

    margin-top: 30px;
    font-size: 32px;
    margin-bottom: 10px;

`

const HeaderLeft = styled.div`

    /* margin-top: 30px; */
    font-size: 24px;
    font-weight: 800;
    margin-bottom: 20px;

`

const HolderInner = styled.div`

    margin-top: 30px;
    display: flex;
    align-items: flex-start;
    justify-content: center;

`

const LeftCol = styled.div`

    background-color: ${Colors.light};
    border-radius: 5px;
    padding: 20px;
    width: 480px;

`

const RightCol = styled.div`

    border: 1px solid ${Colors.dark};
    border-radius: 5px;
    width: calc(100% - 60px);
    padding: 20px;
    margin-left: 20px;

`

const Holder = styled.div`

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
