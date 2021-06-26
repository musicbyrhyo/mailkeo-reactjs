import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import { Colors } from "../components/StyledComponents";

const hostname = process.env.REACT_APP_API;

export const JoinList = () => {
    let { list, username } = useParams();
    const [Name, setName] = useState("");
    const [Email, setEmail] = useState("");
    const [Message, setMessage] = useState("");

    const GetData = async () => {
        if (!list || !username)
            return (window.location.href = "http://localhost:3000");

        try {
            const res = await axios.post(`${hostname}/subscriber/check`, {
                uri: list,
                username: username,
            });

            console.log(res);
        } catch (error) {
            console.log(error.response);

            window.location.href = "http://localhost:3000";
        }
    };

    const Subscribe = async () => {
        if (Name === "") return setMessage("Please enter your name");
        if (Email === "") return setMessage("Please enter your Email");

        try {
            const res = await axios.post(`${hostname}/subscriber/subscribe`, {
                uri: list,
                username: username,
                name: Name,
                email: Email,
            });

            setMessage(res.data);
        } catch (error) {
            setMessage(error.response.data);
        }
    };

    useEffect(() => {
        GetData();
        // eslint-disable-next-line
    }, []);

    return (
        <>
            <JoinListBg>
                <JoinListHolder>
                    <Header>Invitation to join our email list</Header>
                    <SubHeader>
                        This is an invitation from '{username}' to join their
                        emailing list
                    </SubHeader>
                    <div>
                        <InputHeader>Name</InputHeader>
                        <InputFieldHolder>
                            <InputField
                                type="text"
                                onChange={(e) => setName(e.target.value)}
                            />
                        </InputFieldHolder>
                    </div>
                    <div>
                        <InputHeader>Email</InputHeader>
                        <InputFieldHolder>
                            <InputField
                                type="text"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </InputFieldHolder>
                    </div>
                    <JoinListBtn onClick={Subscribe}>Join the list</JoinListBtn>
                    <Description>{Message}</Description>
                </JoinListHolder>
            </JoinListBg>
        </>
    );
};

const JoinListBtn = styled.div`
    width: 100%;
    height: 56px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${Colors.light};

    cursor: pointer;

    background: #214ed3;
    border-radius: 10px;

    margin-bottom: 20px;
`;

const Description = styled.div`
    font-weight: 500;
    font-size: 13px;
    line-height: 16px;
    display: flex;
    align-items: center;
    letter-spacing: 0.05em;

    color: #111e6c;
`;

const InputFieldHolder = styled.div`
    border: 1px solid #214ed3;
    box-sizing: border-box;
    border-radius: 5px;
    height: 48px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
`;

const InputField = styled.input`
    border: none;
    height: 95%;
    width: 95%;
    font-size: 20px;

    &:focus {
        outline: none;
    }
`;

const InputHeader = styled.div`
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
    display: flex;
    align-items: center;

    color: #445ba0;
    margin-bottom: 4px;
`;

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

    color: #6a6a6a;
    margin-bottom: 20px;
`;

const Header = styled.div`
    font-size: 48px;
    font-weight: 800;
    color: ${Colors.primary};
    margin-bottom: 16px;
`;

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
`;

const JoinListBg = styled.div`
    font-family: "Inter", sans-serif;
    position: fixed;
    top: 0px;
    left: 0px;
    height: 100vh;
    width: 100%;
    max-width: 100vw;
    z-index: 0;
    background: linear-gradient(180deg, #edf8ff 0%, #214ed3 92.71%);
    mix-blend-mode: normal;
`;
