import { Footer } from '../components/Footer';
import { NavBar } from '../components/NavBar';
import styled from 'styled-components';
import { Colors } from '../components/StyledComponents';
import { useState } from 'react';
import Axios from 'axios';
import { ApiBaseUrl } from '../variables';

export const SignUp = () => {

    const [Email, setEmail] = useState('')
    const [Name, setName] = useState('')
    const [Password, setPassword] = useState('')
    const [PopUpMessage, setPopUpMessage] = useState('')

    const Request = () => {

        if (Name !== '' && Email !== '' && Password !== '') {
            
            Axios.post(`${ApiBaseUrl}/register`,{
        
                full_name: Name,
                email_id: Email,
                password: Password
    
            }).then((res)=>{

                switch (res.data.code) {
                    
                    case 200:
                
                    setPopUpMessage('Account Created Successfully, You will be redirected to log in page')
                    window.location.href = 'http://192.168.0.114:3000/login'
                    
                    break;
    
                    case 1000:
    
                    setPopUpMessage('User already exists, redirecting to log in')
                    window.location.href = 'http://192.168.0.114:3000/login'
    
                    break;
    
                    case 500:

                    setPopUpMessage('Internal Server Error. Please try again later')
        
                    break;

                    default:
                        break;
                }
    
            });

        } else {
            setPopUpMessage('Please fill all the fields')
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
                        <InputHolder>
                            <Input type="text" onChange={(e)=>(setName(e.target.value))} value={Name} />
                        </InputHolder>
                    </InputDiv>
                    <InputDiv>
                        <Label>
                            Email
                        </Label>
                        <InputHolder>
                            <Input type="text" onChange={(e)=>(setEmail(e.target.value))} value={Email}/>
                        </InputHolder>
                    </InputDiv>
                    <InputDiv>
                        <Label>
                            Password
                        </Label>
                        <InputHolder>
                            <Input type="password" onChange={(e)=>(setPassword(e.target.value))} value={Password}/>
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

    font-size: 16px;
    color: ${Colors.dark};
    margin-bottom: 6px;

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

    font-size: 20px;
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
    top: 160px;
    left: 50%;
    transform: translate(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`