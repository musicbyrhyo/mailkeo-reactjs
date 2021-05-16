import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { ChannelA, ChannelB } from '../components/Channels'
import { DashBoardNav } from '../components/DashBoardNav'
import { Colors } from '../components/StyledComponents'

const hostname = process.env.REACT_APP_API
const token = localStorage.getItem('token')

export const Overview = () => {

    const Active = {
        one: {
            opacity: '0.5',
        },
        two: {
            opacity: '1',
        },
        three: {
            opacity: '1',
        },
        four: {
            opacity: '1',
        },
        left: '0px'
    }

    const [Campaigns, setCampaigns] = useState([])
    const [Audiences, setAudiences] = useState([{
        a_subscribers:[],
        a_created: ''
    }])

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

    const checkUser = async () => {
        if(!token) return window.location.href='/login'
    }

    const CampaignList = Campaigns.map((campaign) => <ChannelA title={campaign.c_name} date={campaign.c_date.slice(0,10)} id={campaign._id} complete={campaign.c_complete} />)

    const AudienceList = Audiences.map((audience) => <ChannelB title={audience.a_name} subscribers={audience.a_subscribers.length} id={audience._id} date={audience.a_created.slice(0,10)} />)

    useEffect(() => {

        getCampaign()
        getAudiences()
        checkUser()

    }, [])

    return (
        <>
            <DashBoardNav Active={Active}/>
            <DashBoardHolder>
                <WelcomeText>Welcome Back,</WelcomeText>
                <SectionB>
                    <SectionHeader>
                        Campaigns
                    </SectionHeader>
                    <div>
                        {CampaignList}
                    </div>
                </SectionB>
                <SectionC>
                    <SectionHeader>
                        Audiences
                    </SectionHeader>
                    <div>
                        {AudienceList}
                    </div>
                </SectionC>
            </DashBoardHolder>
        </>
    )
}

const SectionHeader = styled.div`

    font-size: 20px;
    border-bottom: 1px solid ${Colors.dark};
    padding-bottom: 12px;

`

const SectionC= styled.div`


`

const SectionB = styled.div`


`

const DashBoardHolder = styled.div`

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

const WelcomeText = styled.div`

    font-size: 32px;
    font-weight: 800;
    color: ${Colors.dark};
    margin: 48px 0px;

`