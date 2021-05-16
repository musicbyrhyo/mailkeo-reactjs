import axios from 'axios'
import { useState } from 'react'
import styled from 'styled-components'
import { Colors } from './StyledComponents'

const hostname = process.env.REACT_APP_API
const token = localStorage.getItem('token')
export const CreateAudience = ({Trigger,setTrigger}) => {

    const [List_name, setList_name] = useState('')
    const [List_uri, setList_uri] = useState('')
    const [Message, setMessage] = useState('')

    const CreateList = async () => {
        if(List_name==='') return setMessage('Please enter list name')
        if(List_uri==='') return setMessage('Please enter list Uri')
        try {
            const response = await axios.post(`${hostname}/audience/create`,{
                name: List_name,
                uri: List_uri
            },{
                headers:{
                    'authorization': token
                }
            })
            console.log(response);
            setMessage(response.data)
        } catch (error) {
            setMessage(error.response.data)
            console.log(error);
        }
    }

    const CloseView = () => {
        setTrigger(false)
    }

    return (Trigger) ? (
        <>
            <Darken>
                <ViewHolder>
                    <TopBar>
                        <TopBarHeader>
                            Create New Audience
                        </TopBarHeader>
                        <Close onClick={CloseView}> 
                            <svg width="14" height="14" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17 17L1 1M17 1L1 17" stroke="black" stroke-width="1" stroke-linecap="round"/>
                            </svg>
                        </Close>
                    </TopBar>
                    <Form>
                        <InputHolder>
                            <InputHeader>Audience Name </InputHeader>
                            <InputFieldHolder>
                                <InputField onChange={(e)=>setList_name(e.target.value)} type="text" />
                            </InputFieldHolder>
                        </InputHolder>
                        <InputHolder>
                            <InputHeader>Audience uri </InputHeader>
                            <InputFieldHolder>
                                <InputField onChange={(e)=>setList_uri(e.target.value)} type="text" />
                            </InputFieldHolder>
                        </InputHolder>
                        <SmallP> Your invite link will be: </SmallP>
                        <SmallP> localhost:3000/join/{localStorage.getItem('username')}/{List_uri} </SmallP>
                    </Form>
                    <PrimaryBtn onClick={CreateList} > Create Audience </PrimaryBtn>
                    <div>
                        {Message}
                    </div>
                </ViewHolder>
            </Darken>
        </>
    ) : '' ;
}

const SmallP = styled.p`

    font-size: 12px;
    margin-bottom: 6px;

`

const InputFieldHolder = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    border: 1px solid ${Colors.dark};
    height: 40px;
    border-radius: 5px;

`
const InputField = styled.input`

    font-size: 16px;
    border: none;
    height: 100%;
    width: 95%;

    &:focus{
        outline: none;
    }

`
const InputHolder = styled.div`

    margin-bottom: 20px;

`
const InputHeader = styled.div`

    font-size: 14px;
    color: ${Colors.dark};
    font-weight: 400;
    margin-bottom: 6px;

`
const Form = styled.div`



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