import { useParams } from 'react-router';
import styled from 'styled-components'
import { Colors } from '../components/StyledComponents';

export const JoinList = () => {

    let { list , username } = useParams();

    console.log(list,username);

    return (
        <>
        <JoinListBg>
            <JoinListHolder>
                <Header>
                Invitation to join our email list
                </Header>
                <SubHeader>
                    This is an invitation from 'Mailkeo' to join their emailing list
                </SubHeader>
                <div>
                    <InputHeader>
                        Name
                    </InputHeader>
                    <InputFieldHolder>
                        <InputField type="text" />
                    </InputFieldHolder>
                </div> 
                <div>
                    <InputHeader>
                        Email
                    </InputHeader>
                    <InputFieldHolder>
                        <InputField type="text" />
                    </InputFieldHolder>
                </div> 
                <JoinListBtn>
                    Join the list
                </JoinListBtn>
                <Description>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </Description>
            </JoinListHolder>
        </JoinListBg>
        </>
    )
}

const JoinListBtn = styled.div`

    width: 100%;
    height: 56px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${Colors.light};

    background: #214ED3;
    border-radius: 10px;

    margin-bottom: 20px;


`

const Description = styled.div`

    font-weight: 500;
    font-size: 13px;
    line-height: 16px;
    display: flex;
    align-items: center;
    letter-spacing: 0.05em;

    color: #111E6C;

`


const InputFieldHolder = styled.div`

    border: 1px solid #214ED3;
    box-sizing: border-box;
    border-radius: 5px;
    height: 48px;
    width: 100%; 
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;

`

const InputField = styled.input`

    border: none;
    height: 95%;
    width: 95%;
    font-size: 20px;

    &:focus{
        outline: none;
    }
`

const InputHeader = styled.div`

    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
    display: flex;
    align-items: center;

    color: #445BA0;
    margin-bottom: 4px;

`

const SubHeader = styled.div`

/* This is an invitation from ‘Mailkeo’ to join their emailing list. */
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    display: flex;
    align-items: center;
    letter-spacing: 0.05em;

    color: #6A6A6A;
    margin-bottom: 20px;

` 

const Header = styled.div`

    font-size: 48px;
    font-weight: 800;
    color: ${Colors.primary};
    margin-bottom: 16px;

`

const JoinListHolder = styled.div`

    top: 50px;
    left: 50%;
    transform: translateX(-50%);
    width: calc(24% - 100px);
    height: 75%;
    overflow-y: auto;
    min-width: 320px;
    max-width: 400px;
    background-color: #f7f7f7;
    padding: 50px;
    position: absolute;
    z-index: 1;

`

const JoinListBg = styled.div`

    font-family: 'Inter', sans-serif;
    position: fixed;
    top: 0px;
    left: 0px;
    height: 100vh;
    width: 100%;
    max-width: 100vw;
    z-index: 0;
    background: linear-gradient(180deg, #EDF8FF 0%, #214ED3 92.71%);
    mix-blend-mode: normal;

`