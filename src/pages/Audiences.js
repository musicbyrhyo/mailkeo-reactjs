import axios from 'axios'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { ChannelB } from '../components/Channels'
import { CreateAudience } from '../components/CreateAudience'
import { DashBoardNav } from '../components/DashBoardNav'
import { Colors } from '../components/StyledComponents'

const hostname = process.env.REACT_APP_API
const token = localStorage.getItem('token')

export const Audiences = () => {

    const [Audiences, setAudiences] = useState([{
        a_subscribers:[],
        a_created: ''
    }])

    const [CreateAudienceTrigger, setCreateAudienceTrigger] = useState(false)

    const ViewCreateAudience = () => {
        setCreateAudienceTrigger(true);
    }

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

    const getAudiences = async () => {

        try {
            
            const response = await axios.post(`${hostname}/audience/all`,{},{
                headers:{
                    'authorization': token
                }
            })
    
            console.log(response);
            setAudiences(response.data)

        } catch (error) {
            
            console.log(error);

        }

    }

    const AudienceList = Audiences.map((audience) => <ChannelB title={audience.a_name} subscribers={audience.a_subscribers.length} id={audience._id} date={audience.a_created.slice(0,10)} />)

    useEffect(() => {
        
        getAudiences()

    }, [])

    return (
        <>
            <DashBoardNav Active={Active}/>
            <CampaignHolder>
                <HeaderHolder>
                    <Header>
                        Your Audiences
                    </Header>
                    <CreateCampaign onClick={ViewCreateAudience} >
                        Create New Audience
                    </CreateCampaign>
                </HeaderHolder>
                <div>
                    <SubHeader>
                        All Audiences
                    </SubHeader>
                    <Divider></Divider>
                    <div>
                        {AudienceList}
                    </div>
                </div>
            </CampaignHolder>
            <CreateAudience Trigger={CreateAudienceTrigger} setTrigger={setCreateAudienceTrigger} />
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