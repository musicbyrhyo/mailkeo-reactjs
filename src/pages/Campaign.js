import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import { DashBoardNav } from "../components/DashBoardNav";
import { Colors } from "../components/StyledComponents";
import "./font.css";

const hostname = process.env.REACT_APP_API;
const token = localStorage.getItem("token");

export const Campaign = () => {
    const Active = {
        one: {
            opacity: "1",
        },
        two: {
            opacity: "0.5",
        },
        three: {
            opacity: "1",
        },
        four: {
            opacity: "1",
        },
        left: "1000px",
    };

    const { id } = useParams();

    const [Complete, setComplete] = useState("No");
    const [BtnText, setBtnText] = useState("Start Campaign");
    const [Campaign, setCampaign] = useState({ c_date: "" });
    const [Audience, setAudience] = useState({ a_subscribers: [] });

    let AudienceList = Audience.a_subscribers.map((audience) => (
        <AudienceItem name={audience.s_name} email={audience.s_email} />
    ));

    const StartCampaign = async (req, res) => {
        try {
            const res = await axios.post(
                `${hostname}/campaign/start`,
                {
                    _id: id,
                },
                {
                    headers: {
                        authorization: token,
                    },
                }
            );

            console.log(res);

            window.location.reload(false);
        } catch (error) {
            console.log(error.response);
        }
    };

    const DeleteCampaign = async (req, res) => {
        try {
            const res = await axios.post(
                `${hostname}/campaign/delete`,
                {
                    _id: id,
                },
                {
                    headers: {
                        authorization: token,
                    },
                }
            );

            console.log(res);

            window.location.href = "/campaigns";
        } catch (error) {
            console.log(error.response);
        }
    };

    useEffect(() => {
        console.log(id);

        const GetCampaign = async () => {
            try {
                await axios
                    .post(
                        `${hostname}/campaign/get`,
                        {
                            _id: id,
                        },
                        {
                            headers: {
                                authorization: token,
                            },
                        }
                    )
                    .then(async (res) => {
                        if (res.data.c_complete) {
                            setComplete("yes");
                            setBtnText("Re-send Campaign");
                        }

                        setCampaign(res.data);
                        console.log(res);
                        await axios
                            .post(
                                `${hostname}/audience/get`,
                                {
                                    _id: res.data.c_audience,
                                },
                                {
                                    headers: {
                                        authorization: token,
                                    },
                                }
                            )
                            .then((res2) => {
                                console.log(res2);
                                setAudience(res2.data);
                            });
                    });
            } catch (error) {
                console.log(error.response);
                window.location.href = "/campaigns";
            }
        };

        GetCampaign();
    }, [id]);

    return (
        <>
            <DashBoardNav Active={Active} />
            <Holder>
                <Header>Campaign</Header>
                <Pos> Home -> Campaign -> {Campaign.c_name} </Pos>
                <HolderInner>
                    <LeftCol>
                        <HeaderLeft>Campaign Details</HeaderLeft>
                        <CamItems>
                            <Field>Campaign Name:</Field>
                            <Value>{Campaign.c_name}</Value>
                        </CamItems>
                        <CamItems>
                            <Field>Created:</Field>
                            <Value>{Campaign.c_date.slice(0, 10)}</Value>
                        </CamItems>
                        <CamItems>
                            <Field>Subject:</Field>
                            <Value>{Campaign.c_subject}</Value>
                        </CamItems>
                        <CamItems>
                            <Field>Message:</Field>
                            <Value>{Campaign.c_message}</Value>
                        </CamItems>
                        <CamItems>
                            <Field>Sent To:</Field>
                            <Value>{Audience.a_name}</Value>
                        </CamItems>
                        <CamItems>
                            <Field>Completed:</Field>
                            <Value>{Complete}</Value>
                        </CamItems>
                        <PrimaryBtn onClick={StartCampaign}>
                            {BtnText}
                        </PrimaryBtn>
                        <SecondaryBtn onClick={DeleteCampaign}>
                            Delete Campaign
                        </SecondaryBtn>
                    </LeftCol>
                    <RightCol>
                        <div>
                            <SideBHeader>Audience Details</SideBHeader>
                            <SideBDesc>
                                This campaign will be sent to.
                            </SideBDesc>
                            <AItemHeader>
                                <AColL>Name</AColL>
                                <AColR>Email</AColR>
                            </AItemHeader>
                            <div>{AudienceList}</div>
                        </div>
                    </RightCol>
                </HolderInner>
            </Holder>
        </>
    );
};

const AudienceItem = ({ name, email }) => {
    return (
        <AItem>
            <AName>{name}</AName>
            <AEmail>{email}</AEmail>
        </AItem>
    );
};

const CamItems = styled.div`
    margin-top: 14px;
`;

const Field = styled.div`
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 4px;
`;
const Value = styled.div`
    font-size: 20px;
    font-weight: 500;
`;

const Pos = styled.div`
    font-weight: 500;
`;

const PrimaryBtn = styled.div`
    letter-spacing: 0.5px;
    font-size: 12px;
    font-weight: 400;
    height: 40px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${Colors.primary};
    color: ${Colors.light};
    margin: 20px 0px;
    cursor: pointer;
    transition: 100ms ease-in-out;

    &:hover {
        box-shadow: 0 5px 5px rgba(0, 0, 0, 0.397);
        transition: 100ms ease-in-out;
    }
`;

const SecondaryBtn = styled.div`
    letter-spacing: 0.5px;
    font-size: 12px;
    font-weight: 400;
    height: 40px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    color: ${Colors.dark};
    border: 1px solid ${Colors.dark};
    margin: 20px 0px;
    cursor: pointer;
    transition: 100ms ease-in-out;

    &:hover {
        box-shadow: 0 5px 5px rgba(0, 0, 0, 0.397);
        transition: 100ms ease-in-out;
    }
`;

const SideBDesc = styled.div`
    margin-bottom: 12px;
    font-weight: 500;
`;

const SideBHeader = styled.div`
    font-size: 24px;
    margin-bottom: 4px;
`;

const AColL = styled.div`
    font-size: 18px;
    font-weight: 800;
    width: 40%;
`;

const AColR = styled.div`
    font-size: 18px;
    font-weight: 800;
    width: 60%;
`;

const AItemHeader = styled.div`
    display: flex;
    align-items: center;
    border-bottom: 1px solid ${Colors.dark};
    padding-bottom: 6px;
    margin-bottom: 10px;
`;

const AItem = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 8px;
`;

const AName = styled.div`
    width: 40%;
    font-weight: 500;
`;

const AEmail = styled.div`
    width: 60%;
    font-weight: 500;
`;

const Header = styled.div`
    margin-top: 30px;
    font-size: 32px;
    margin-bottom: 10px;
`;

const HeaderLeft = styled.div`
    /* margin-top: 30px; */
    font-size: 24px;
    font-weight: 800;
    margin-bottom: 20px;
`;

const HolderInner = styled.div`
    margin-top: 30px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
`;

const LeftCol = styled.div`
    background-color: ${Colors.light};
    border-radius: 5px;
    padding: 20px;
    width: 480px;
`;

const RightCol = styled.div`
    border: 1px solid ${Colors.dark};
    border-radius: 5px;
    width: calc(100% - 60px);
    padding: 20px;
    margin-left: 20px;
`;

const Holder = styled.div`
    padding-left: 20%;
    padding-right: 20%;

    @media (max-width: 1366px) {
        padding-left: 5%;
        padding-right: 5%;
    }

    @media (max-width: 800px) {
        padding-left: 20px;
        padding-right: 20px;
    }
`;
