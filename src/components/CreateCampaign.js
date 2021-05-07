import styled from 'styled-components'
import { Colors } from './StyledComponents'

export const CreateCampaign = ({Trigger,setTrigger}) => {

    const Lists = [
        {
            ListName: 'list1'
        },
        {
            ListName: 'list2'
        },
        {
            ListName: 'list3'
        },
        {
            ListName: 'list4'
        },
        {
            ListName: 'list5'
        },
    ]

    const SelectList = Lists.map((list)=> <ListItems value={list.ListName}>{list.ListName}</ListItems> )

    const CloseView = () => {
        setTrigger(false)
    }

    return (Trigger) ? (
        <>
            <Darken>
                <ViewHolder>
                    <TopBar>
                        <TopBarHeader>
                            Create New Campaign
                        </TopBarHeader>
                        <Close onClick={CloseView}> 
                            <svg width="14" height="14" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17 17L1 1M17 1L1 17" stroke="black" stroke-width="1" stroke-linecap="round"/>
                            </svg>
                        </Close>
                    </TopBar>
                    <Form>
                        <InputHolder>
                            <InputHeader>Campaign Name </InputHeader>
                            <InputFieldHolder>
                                <InputField type="text" />
                            </InputFieldHolder>
                        </InputHolder>
                        <InputHolder>
                            <InputHeader> Campaign Description </InputHeader>
                            <InputFieldAreaHolder>
                                <InputFieldArea type="text" />
                            </InputFieldAreaHolder>
                        </InputHolder>
                        <InputHolder>
                            <InputHeader> Recipients </InputHeader>
                            <ListSelect>
                                {SelectList}
                            </ListSelect>
                        </InputHolder>
                    </Form>
                    <PrimaryBtn> Create Campaign </PrimaryBtn>
                </ViewHolder>
            </Darken>
        </>
    ) : '' ;
}

const InputFieldAreaHolder = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100px;
    border: 1px solid ${Colors.dark};
    border-radius: 5px;

`

const InputFieldArea = styled.textarea`

    font-size: 16px;
    border: none;
    height: 100%;
    width: 95%;

    &:focus{
        outline: none;
    }

`

const ListSelect = styled.select`

    width: 100%;
    border: 1px solid ${Colors.dark};
    height: 40px;
    padding-left: 10px;
    font-size: 16px;
    border-radius: 5px;
    font-weight: 500;
    
    &:focus{
        outline: none;
    }

`

const ListItems = styled.option`

    width: 100%;
    border: 1px solid ${Colors.dark};
    padding-left: 10px;
    font-weight: 400;

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