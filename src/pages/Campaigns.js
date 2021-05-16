import axios from 'axios'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { ChannelA } from '../components/Channels'
import { CreateCampaign as CCPop } from '../components/CreateCampaign'
import { DashBoardNav } from '../components/DashBoardNav'
import { Colors } from '../components/StyledComponents'

const hostname = process.env.REACT_APP_API
const token = localStorage.getItem('token')

export const Campaigns = () => {

    const [CreateCampaignTrigger, setCreateCampaignTrigger] = useState(false)
    const [Campaigns, setCampaigns] = useState([])
    const [Lists, setLists] = useState([])

    const getLists = async () => {

        try {
            
            const response = await axios.post(`${hostname}/audience/names`,{},{
                headers:{
                    'authorization': token
                }
            })

            setLists(response.data)

        } catch (error) {
            
        }

    }

    const getCampaign = async () => {

        try {
            
            const response = await axios.post(`${hostname}/campaign/getall`,{},{
                headers:{
                    'authorization': token
                }
            })
    
            console.log(response);
            setCampaigns(response.data)

        } catch (error) {
            
            console.log(error);

        }

    }

    const ViewCreateCampaign = () => {
        setCreateCampaignTrigger(true);
    }

    useEffect(() => {
        
        getCampaign()
        getLists()

    }, [])

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
        left: '5000px'
    }

    const CampaignList = Campaigns.map((campaign) => <ChannelA title={campaign.c_name} date={campaign.c_date.slice(0,10)} id={campaign._id} complete={campaign.c_complete} />)

    return (
        <>
            <DashBoardNav Active={Active}/>
            <CampaignHolder>
                <HeaderHolder>
                    <Header>
                        Your Campaigns
                    </Header>
                    <CreateCampaignBtn onClick={ViewCreateCampaign} >
                        Create New Campaign
                    </CreateCampaignBtn>
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
            </CampaignHolder>
            <CCPop setTrigger={setCreateCampaignTrigger} Trigger={CreateCampaignTrigger} Lists={Lists} />
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

const CreateCampaignBtn = styled.a`

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
    cursor: pointer;
    transition: 150ms ease-in-out;

    &:hover{
        box-shadow: 0 5px 5px rgba(0, 0, 0, 0.397);
        transition: 100ms ease-in-out;
    }

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
