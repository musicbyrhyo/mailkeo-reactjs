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

    return (
        <>
            <DashBoardNav Active={Active}/>
            <Holder>
                <Header>
                    Your Account
                </Header>
                <AccountCreated>
                    Account created: 
                </AccountCreated>
                <OverviewHolder>
                    <Overview>
                        Overview
                    </Overview>
                    <CompBarHolder>
                        <CompBar title="Subscribers" total="100" value="20" width="30%" />
                        <CompBar title="Subscribers" total="100" value="20" width="30%" />
                        <CompBar title="Subscribers" total="100" value="20" width="30%" />
                        <CompBar title="Subscribers" total="100" value="20" width="30%" />
                        <CompBar title="Subscribers" total="100" value="20" width="30%" />
                        <CompBar title="Subscribers" total="100" value="20" width="30%" />
                    </CompBarHolder>
                </OverviewHolder>
                <div>
                    <div>
                        Recent Actions
                    </div>
                    <div></div>
                    <div>
                        <div>Action</div>
                        <div>Date</div>
                        <div>Time</div>
                        <div>Location</div>
                    </div>
                </div>
            </Holder>
        </>
    )
}


const CompBarHolder = styled.div`

    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

`
const Overview = styled.div`



`

const OverviewHolder = styled.div`



`

const AccountCreated = styled.div`

    font-size: 16px;
    color: ${Colors.profile};
    font-weight: 400;

`

const Header = styled.div`

    font-size: 32px;
    font-weight: 800;
    color: ${Colors.dark};
    margin: 20px 0px;

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