import { Footer } from '../components/Footer';
import { NavBar } from '../components/NavBar';
import styled from 'styled-components';
import { Colors } from '../components/StyledComponents';
import { useState } from 'react';
import axios from 'axios';

const hostname = process.env.REACT_APP_API

export const SignUp = () => {

    const [Email, setEmail] = useState('')
    const [Name, setName] = useState('')
    const [Password, setPassword] = useState('')
    const [Username, setUsername] = useState('')
    const [PopUpMessage, setPopUpMessage] = useState('')

    const Request = async () => {

        try {
            
            const response = await axios.post(`${hostname}/user/register`,{
                username: Username,
                email: Email,
                name: Name,
                password: Password
            })

            localStorage.setItem('_id'.response.headers['_id'])
            setPopUpMessage(response.data)

            window.location.href='/login'

        } catch (error) {

            console.log(error.response);

            setPopUpMessage(error.response.data)

        }

    }
    
    return (
        <>
            <Holder>
                <Header>
                    Create an account
                </Header>
                <Description>
                    Create a free account and get started...
                    <br/>
                    Have an account? <LogIn href="/login">Log In</LogIn>
                </Description>
                <div>
                    <InputDiv>
                        <Label>
                            Name
                        </Label>
                        <SmallP>(Your full name)</SmallP>
                        <InputHolder>
                            <Input type="text" onChange={(e)=>(setName(e.target.value))} autocomplete="off"/>
                        </InputHolder>
                    </InputDiv>
                    <InputDiv>
                        <Label>
                            Email
                        </Label>
                        <SmallP>(This email will be used to contact you)</SmallP>
                        <InputHolder>
                            <Input type="text" onChange={(e)=>(setEmail(e.target.value))} autocomplete="off"/>
                        </InputHolder>
                    </InputDiv>
                    <InputDiv>
                        <Label>
                            Username
                        </Label>
                        <SmallP>(your username will be visible to all)</SmallP>
                        <InputHolder>
                            <Input type="text" onChange={(e)=>(setUsername(e.target.value))} autocomplete="off"/>
                        </InputHolder>
                    </InputDiv>
                    <InputDiv>
                        <Label>
                            Password
                        </Label>
                        <SmallP>(Your password will highly encrypted before saving)</SmallP>
                        <InputHolder>
                            <Input type="password" onChange={(e)=>(setPassword(e.target.value))} autocomplete="off"/>
                        </InputHolder>
                    </InputDiv>
                    <CreateAccountDiv onClick={Request} >
                        Create account
                    </CreateAccountDiv>
                    <PopUp>
                        {PopUpMessage}
                    </PopUp>
                </div>
            </Holder>
            <NavBar/>
            <Footer/>
        </>
    )
}

const SmallP = styled.p`

    font-size: 12px;
    margin-bottom: 6px;

`

const PopUp = styled.div`

    margin-top: 18px;
    text-align: center;
    width: 80vw;
    max-width: 320px;
    color: ${Colors.dark};
    
`

const CreateAccountDiv = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    
    width: 80vw;
    max-width: 320px;
    height: 48px;

    color: ${Colors.light};

    border-radius: 5px;

    background-color: ${Colors.primary};

    cursor: pointer;

`

const InputDiv = styled.div`

    display: flex;
    flex-direction: column;
    margin-bottom: 16px;

`

const Label = styled.label`

    font-size: 20px;
    font-weight: 800;
    color: ${Colors.dark};
    margin-bottom: 4px;

`

const InputHolder = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;

    width: 80vw;
    max-width: 320px;
    height: 48px;
    
    border-radius: 5px;
    border: 1px solid ${Colors.primary};

`

const Input = styled.input`

    font-size: 16px;
    width: calc(80vw - 20px);
    max-width: 300px;
    height: 46px;
    background-color: transparent;
    border: 0px;
    color: ${Colors.dark};
    font-weight: 500;

    &:focus
    {
        outline: none;
    }

`

const Header = styled.div`

    text-align: center;
    font-size: 48px;
    font-weight: 600;
    color: ${Colors.primary};
    margin-bottom: 20px;

`

const Description = styled.div`
    
    text-align: center;
    font-size: 16px;
    color: ${Colors.dark};
    margin-bottom: 20px;

`

const LogIn = styled.a`

    color: ${Colors.dark};
    text-decoration: underline;

`

const Holder = styled.div`

    position: relative;
    top: 120px;
    left: 50%;
    transform: translate(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`