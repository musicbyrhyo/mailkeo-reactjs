import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar";
import styled from "styled-components";
import { Colors } from "../components/StyledComponents";
import { useState } from "react";
import axios from "axios";
const hostname = process.env.REACT_APP_API;
const token = localStorage.getItem("token");

export const Configure = () => {
    const [Hostname, setHostname] = useState("");
    const [Secure, setSecure] = useState(true);
    const [Port, setPort] = useState(465);
    const [Username, setUsername] = useState("");
    const [Password, setPassword] = useState("");
    const [PopUpMessage, setPopUpMessage] = useState("");

    const Request = async () => {
        try {
            const response = await axios.post(
                `${hostname}/user/configure`,
                {
                    hostname: Hostname,
                    secure: Secure,
                    port: Port,
                    username: Username,
                    password: Password,
                },
                {
                    headers: {
                        authorization: token,
                    },
                }
            );

            console.log(response);
            setPopUpMessage(response.data);
            window.location.href = "/overview";
        } catch (error) {
            if (error.response) {
                setPopUpMessage(error.response.data);
            }
        }
    };

    return (
        <>
            <Holder>
                <Header>Connect Your Mail Server</Header>
                <div>
                    <InputDiv>
                        <Label>Hostname</Label>
                        <SmallP>(Your SMTP server)</SmallP>
                        <InputHolder>
                            <Input
                                type="text"
                                onChange={(e) => setHostname(e.target.value)}
                                autocomplete="off"
                                placeholder="mail.example.com"
                            />
                        </InputHolder>
                    </InputDiv>
                    <InputDiv>
                        <Label>Use TLS</Label>
                        <SmallP>(Transport Layer Security)</SmallP>
                        <InputHolder>
                            <Select
                                onChange={(e) => {
                                    setSecure(e.target.value);
                                }}
                            >
                                <Option value={true}>Yes</Option>
                                <Option value={false}>No</Option>
                            </Select>
                        </InputHolder>
                    </InputDiv>
                    <InputDiv>
                        <Label>Port</Label>
                        <SmallP>(Usually 465 or 587)</SmallP>
                        <InputHolder>
                            <Input
                                type="text"
                                onChange={(e) => setPort(e.target.value)}
                                autocomplete="off"
                                placeholder="465"
                            />
                        </InputHolder>
                    </InputDiv>
                    <InputDiv>
                        <Label>Username</Label>
                        <SmallP>
                            (This account will be used to send emails)
                        </SmallP>
                        <InputHolder>
                            <Input
                                type="text"
                                onChange={(e) => setUsername(e.target.value)}
                                autocomplete="off"
                                placeholder="username@example.com"
                            />
                        </InputHolder>
                    </InputDiv>
                    <InputDiv>
                        <Label>Password</Label>
                        <SmallP>(This password will not be encrypted)</SmallP>
                        <InputHolder>
                            <Input
                                type="password"
                                onChange={(e) => setPassword(e.target.value)}
                                autocomplete="off"
                            />
                        </InputHolder>
                    </InputDiv>
                    <CreateAccountDiv onClick={Request}>
                        Confirm and continue
                    </CreateAccountDiv>
                    <PopUp>{PopUpMessage}</PopUp>
                </div>
            </Holder>
            <NavBar />
            <Footer />
        </>
    );
};

const SmallP = styled.p`
    font-size: 12px;
    margin-bottom: 6px;
`;

const Select = styled.select`
    width: 100%;
    height: 100%;
    background-color: transparent;
    border: none;
    padding-left: 5px;

    &:focus {
        outline: none;
    }
`;

const Option = styled.option`
    width: 100%;
    height: 48px;
`;

const PopUp = styled.div`
    margin-top: 18px;
    text-align: center;
    width: 80vw;
    max-width: 320px;
    color: ${Colors.dark};
`;

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
`;

const InputDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;
`;

const Label = styled.label`
    font-size: 20px;
    font-weight: 800;
    color: ${Colors.dark};
    margin-bottom: 4px;
`;

const InputHolder = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 80vw;
    max-width: 320px;
    height: 48px;

    border-radius: 5px;
    border: 1px solid ${Colors.primary};
`;

const Input = styled.input`
    font-size: 16px;
    width: calc(80vw - 20px);
    max-width: 300px;
    height: 46px;
    background-color: transparent;
    border: 0px;
    color: ${Colors.dark};
    font-weight: 500;

    &:focus {
        outline: none;
    }
`;

const Header = styled.div`
    text-align: center;
    font-size: 48px;
    font-weight: 600;
    color: ${Colors.primary};
    margin-bottom: 20px;
`;

const Holder = styled.div`
    position: relative;
    top: 120px;
    left: 50%;
    transform: translate(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
