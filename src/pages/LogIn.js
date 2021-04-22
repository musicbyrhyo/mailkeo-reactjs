import { Footer } from '../components/Footer';
import { NavBar } from '../components/NavBar';
import styled from 'styled-components';
import { Colors } from '../components/StyledComponents';
import { useState } from 'react';
import Axios from 'axios';
import { ApiBaseUrl } from '../variables';

export const LogIn = () => {

    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')

    const [PopUpMessage, setPopUpMessage] = useState('')

    const Request = () => {

        if (Email !== '' && Password !== '') {
            
            Axios.post(`${ApiBaseUrl}/login`,{

                email_id: Email,
                password: Password
    
            }).then((res)=>{

                switch (res.data.code) {
   
                    case 1200:
    
                    setPopUpMessage('No user found, please check your credentials.');

                    break;

                    case 1400:

                    setPopUpMessage('Logged In Successfully, You will be redirected to dashboard.')
                    const user_id = res.data.data.user_id;
                    sessionStorage.setItem('id',user_id)
                    // const id = sessionStorage.getItem('id')
                    window.location.href = `/dashboard`

                    break;


                    case 401:

                    setPopUpMessage('Wrong Password, Please check your entered password.')

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
                    Log In to dashboard
                </Header>
                <Description>
                    Log into your existing account to access dashboard
                    <br/>
                    Have an account? <SignUp href="/signup">Sign Up</SignUp>
                </Description>
                <div>
                    <InputDiv>
                        <Label>
                            Email
                        </Label>
                        <InputHolder>
                            <Input type="text" onChange={(e)=>(setEmail(e.target.value))} />
                        </InputHolder>
                    </InputDiv>
                    <InputDiv>
                        <Label>
                            Password
                        </Label>
                        <InputHolder>
                            <Input type="password" onChange={(e)=>(setPassword(e.target.value))}/>
                        </InputHolder>
                    </InputDiv>
                    <LogInDiv onClick={Request}>
                        Log In
                    </LogInDiv>
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

const LogInDiv = styled.div`

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

const SignUp = styled.a`

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