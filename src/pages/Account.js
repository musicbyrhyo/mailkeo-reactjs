import axios from 'axios'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { DashBoardNav } from '../components/DashBoardNav'
import { Colors } from '../components/StyledComponents'

const hostname = process.env.REACT_APP_API
const token = localStorage.getItem('token')

export const Account = () => {

    const [Secure, setSecure] = useState('false')

    const checkUser = async () => {
        if(!token) return window.location.href='/login'
    }

    const LogOut = async () => {

        await localStorage.removeItem('token')
        await localStorage.removeItem('username')

        window.location.href='/'

    }
    
    const [User, setUser] = useState({
        u_audiences: [],
        u_campaigns: [],
        mail_server:{
            auth: {}
        }
    })

    const GetUser = async () =>{

        try {
            
            const res = await axios.post(`${hostname}/user/get`,{},{
                headers:{
                    'authorization': token
                }
            })

            if(res.data.mail_server.secure) {
                setSecure('Yes')
            }

            setUser(res.data)

        } catch (error) {
            
        }

    }

    useEffect(() => {
        
        GetUser()
        checkUser()

    }, [])

    const Active = {
        one: {
            opacity: '1',
        },
        two: {
            opacity: '1',
        },
        three: {
            opacity: '1',
        },
        four: {
            opacity: '0.5',
        },
        left: '5000px'
    }

    return (
        <div>
            <DashBoardNav Active={Active}/>
            <Holder>
                <Header>
                    Your Account
                </Header>
                <About>
                    <AboutTop>
                        <AboutHeader>
                            Account Details
                        </AboutHeader>
                        <EditBtn onClick={LogOut} >
                            Log Out
                        </EditBtn>
                    </AboutTop>
                    <AboutDescription>
                        <AboutItems> 
                            <ATitle>Username:</ATitle>
                            <AValue>{User.username}</AValue>
                        </AboutItems>
                        <AboutItems> 
                            <ATitle>Full Name:</ATitle>
                            <AValue>{User.u_name}</AValue>
                        </AboutItems>
                        <AboutItems> 
                            <ATitle>Email:</ATitle>
                            <AValue>{User.u_email}</AValue>
                        </AboutItems>
                        <AboutItems> 
                            <ATitle>Active Plan:</ATitle>
                            <AValue>Beta</AValue>
                        </AboutItems>
                        <AboutItems> 
                            <ATitle>Account Type:</ATitle>
                            <AValue>Personal</AValue>
                        </AboutItems>
                        <AboutItems> 
                            <ATitle>Total Audiences</ATitle>
                            <AValue>{User.u_audiences.length}</AValue>
                        </AboutItems>
                        <AboutItems> 
                            <ATitle>Total Campaign</ATitle>
                            <AValue>{User.u_campaigns.length}</AValue>
                        </AboutItems>
                    </AboutDescription>
                </About>
                <About>
                <AboutTop>
                        <AboutHeader>
                            Mail Server Details
                        </AboutHeader>
                    </AboutTop>
                    <AboutDescription>
                        <AboutItems> 
                            <ATitle>Hostname:</ATitle>
                            <AValue>{User.mail_server.hostname}</AValue>
                        </AboutItems>
                        <AboutItems> 
                            <ATitle>Port:</ATitle>
                            <AValue>{User.mail_server.port}</AValue>
                        </AboutItems>
                        <AboutItems> 
                            <ATitle>Secure:</ATitle>
                            <AValue>{Secure}</AValue>
                        </AboutItems>
                        <AboutItems> 
                            <ATitle>Email:</ATitle>
                            <AValue>{User.mail_server.auth.username}</AValue>
                        </AboutItems>
                        <AboutItems> 
                            <ATitle>Password:</ATitle>
                            <AValue>{User.mail_server.auth.password}</AValue>
                        </AboutItems>
                    </AboutDescription>
                </About>
            </Holder>
        </div>
    )
}


const AboutTop = styled.div`

    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;

`

const EditBtn = styled.div`

    font-weight: 500;
    font-size: 12px;
    border: 1px solid ${Colors.primary};
    border-radius: 5px;
    padding: 6px 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${Colors.primary};

`

const About = styled.div`

    margin-bottom: 48px;
    background-color: ${Colors.light};
    padding: 32px;
    border-radius: 5px;

`
const AboutHeader = styled.div`

    font-size: 20px;
    font-weight: 800;
    color: ${Colors.primary};

`
const AboutDescription = styled.div`

    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

`

const AboutItems = styled.div`

    width: 30%;
    margin-bottom: 12px;

`

const AValue = styled.div`


`

const ATitle = styled.div`

    font-size: 14px;
    color: ${Colors.dark};
    font-weight: 500;
    margin-bottom: 3px;

`

const Header = styled.div`

    font-size: 32px;
    font-weight: 800;
    color: ${Colors.dark};
    margin: 20px 0px;
    padding-bottom: 16px;
    border-bottom: 1px solid ${Colors.dark};

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