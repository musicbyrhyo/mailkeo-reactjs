import styled from 'styled-components'
import { CompBar } from '../components/CompBar'
import { DashBoardNav } from '../components/DashBoardNav'
import { Colors } from '../components/StyledComponents'

export const Account = () => {

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

    const RecentActions = [
        {
            action: 'Log In from new browser',
            date: '9-01-2021',
            time: '1822',
            location: 'Mumbai,India'
        },
        {
            action: 'Log In from new browser',
            date: '11-01-2021',
            time: '1452',
            location: 'Mumbai,India'
        },
        {
            action: 'Log In from new browser',
            date: '14-01-2021',
            time: '1536',
            location: 'Mumbai,India'
        },
        {
            action: 'Log In from new browser',
            date: '20-01-2021',
            time: '1943',
            location: 'Mumbai,India'
        }
    ]

    const ActionTable = RecentActions.map((action)=><TableEntry action={action.action} time={action.time} date={action.date} location={action.location} />)

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
                        <EditBtn>
                            Edit Account Details
                        </EditBtn>
                    </AboutTop>
                    <AboutDescription>
                        <AboutItems> 
                            <ATitle>Username:</ATitle>
                            <AValue>Nishchay Beharam</AValue>
                        </AboutItems>
                        <AboutItems> 
                            <ATitle>Email:</ATitle>
                            <AValue>contact.nishchayb@gmail.com</AValue>
                        </AboutItems>
                        <AboutItems> 
                            <ATitle>Phone:</ATitle>
                            <AValue>012345678</AValue>
                        </AboutItems>
                        <AboutItems> 
                            <ATitle>Date Joined:</ATitle>
                            <AValue>Jan 2, 2021</AValue>
                        </AboutItems>
                        <AboutItems> 
                            <ATitle>Active Plan:</ATitle>
                            <AValue>Beta</AValue>
                        </AboutItems>
                        <AboutItems> 
                            <ATitle>Account Type:</ATitle>
                            <AValue>Personal</AValue>
                        </AboutItems>
                    </AboutDescription>
                </About>
                <OverviewHolder>
                    <Overview>
                        Overview
                    </Overview>
                    <CompBarHolder>
                        <CompBar title="Subscribers" total="100" value="20" width="30%" margin="10px 0px" />
                        <CompBar title="Subscribers" total="100" value="20" width="30%" margin="10px 0px" />
                        <CompBar title="Subscribers" total="100" value="20" width="30%" margin="10px 0px" />
                        <CompBar title="Subscribers" total="100" value="20" width="30%" margin="10px 0px" />
                        <CompBar title="Subscribers" total="100" value="20" width="30%" margin="10px 0px" />
                        <CompBar title="Subscribers" total="100" value="20" width="30%" margin="10px 0px" />
                    </CompBarHolder>
                </OverviewHolder>
                <RecentActHolder>
                    <RecentActionsHolder>
                        Recent Actions
                    </RecentActionsHolder>
                    <ActionTableHolder>
                        <Col1H>Action</Col1H>
                        <Col2H>Date</Col2H>
                        <Col3H>Time</Col3H>
                        <Col4H>Location</Col4H>
                    </ActionTableHolder>
                    <div>
                        {ActionTable}
                    </div>
                </RecentActHolder>
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

const EditBtnHolder = styled.div`

    width: 100%;
    display: flex;
    justify-content: flex-end;

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

const RecentActHolder = styled.div`

    margin-top: 20px;

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

const TableEntry = ({action,date,time,location}) => {
    return(
        <TableEntryHolder>
            <Col1> {action} </Col1>
            <Col2> {date} </Col2>
            <Col3> {time} </Col3>
            <Col4> {location} </Col4>
        </TableEntryHolder>
    )
}

const RecentActionsHolder = styled.div`

    font-size: 20px;
    margin-bottom: 20px;

`

const TableEntryHolder = styled.div`

    display: flex;
    margin-bottom: 16px;

`

const ActionTableHolder = styled.div`

    display: flex;
    font-size: 14px;
    color: ${Colors.primary};
    margin-bottom: 16px;

`

const Col1H = styled.div`

    width: calc(35% - 10px);
    margin-right: 10px;
    padding-bottom: 4px;
    border-bottom: 1px solid ${Colors.profile};

`
const Col2H = styled.div`

    width: calc(15% - 10px);
    margin-right: 10px;
    padding-bottom: 4px;
    border-bottom: 1px solid ${Colors.profile};

`
const Col3H = styled.div`

    width: calc(15% - 10px);
    margin-right: 10px;
    padding-bottom: 4px;
    border-bottom: 1px solid ${Colors.profile};


`
const Col4H = styled.div`

    width: 35%;
    padding-bottom: 4px;
    border-bottom: 1px solid ${Colors.profile};

`

const Col1 = styled.div`

    width: 35%;

`
const Col2 = styled.div`

    width: 15%;

`
const Col3 = styled.div`

    width: 15%;

`
const Col4 = styled.div`

    width: 25%;

`

const Divider = styled.div`

    height: 1px;
    width: 100%;
    background-color: ${Colors.dark};

`

const CompBarHolder = styled.div`

    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

`
const Overview = styled.div`
    
    font-size: 20px;
    border-bottom: 1px solid ${Colors.dark};
    padding: 0px 0px 8px 0px;
    margin-bottom: 12px;

`

const OverviewHolder = styled.div`

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