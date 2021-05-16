import styled from 'styled-components'
import { Colors } from './StyledComponents'

export const DashBoardNav = ({Active}) => {
    return (
        <Nav>
            <NavLeft href="/overview">
                <Logo viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.2672 9.36898L1.37967 0.244758C0.870239 -0.278163 0 0.0922926 0 0.831978V4.87263L10.8385 15.9999L21.6773 4.87263V0.831978C21.6773 0.0922926 20.8068 -0.278163 20.2976 0.244758L11.4098 9.36898C11.2582 9.52455 11.0528 9.61196 10.8385 9.61196C10.6243 9.61196 10.4188 9.52455 10.2672 9.36898Z"/>
                    <path d="M0 15.3761V9.80664L6.1935 16.0001H0.623495C0.458135 16.0001 0.299546 15.9344 0.182618 15.8174C0.0656896 15.7004 0 15.5416 0 15.3761Z" />
                    <path d="M21.6769 15.3755V9.80664L15.4834 16.0001H21.0527C21.2182 16.0001 21.377 15.9343 21.4941 15.8172C21.6111 15.7 21.6769 15.541 21.6769 15.3755Z" />
                </Logo>
            </NavLeft>
            <NavRight>
                <NavMenu>
                    <NavItemA href="/overview"><NavItem opacity={Active.one.opacity} >Overview</NavItem></NavItemA>
                    <NavItemA href="/campaigns"><NavItem opacity={Active.two.opacity} >Campaigns</NavItem></NavItemA>
                    <NavItemA href="/audiences"><NavItem opacity={Active.three.opacity} >Audience</NavItem></NavItemA>
                    <ActiveDiv left={Active.left}></ActiveDiv>
                </NavMenu>
                <DivLine></DivLine>
                <User href="/account" opacity={Active.four.opacity}>
                    <UserText>
                        Account
                    </UserText>
                    <ProfileIcon viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 3C11.66 3 13 4.34 13 6C13 7.66 11.66 9 10 9C8.34 9 7 7.66 7 6C7 4.34 8.34 3 10 3ZM10 17.2C8.81186 17.2 7.64218 16.906 6.59528 16.3441C5.54837 15.7823 4.65678 14.9701 4 13.98C4.03 11.99 8 10.9 10 10.9C11.99 10.9 15.97 11.99 16 13.98C15.3432 14.9701 14.4516 15.7823 13.4047 16.3441C12.3578 16.906 11.1881 17.2 10 17.2Z" />
                    </ProfileIcon>
                </User>
            </NavRight>
        </Nav>
    )
}

const ActiveDiv = styled.div`

    position: absolute;
    bottom: -5px;
    left: ${props => props.left};
    width: 96px;
    height: 2px;
    background-color: ${Colors.light};

    @media (max-width: 1366px) 
        {   
            width: 80px;
        }

`

const UserText = styled.div`

    position: absolute;
    top: 54px;
    display: none;
    align-items: center;
    justify-content: center;
    color: ${Colors.light};
    font-weight: 500;
    margin-right: 10px;
    font-size: 10px;
    background-color: ${Colors.dark};
    left: 50%;
    transform: translateX(-50%);
    padding: 10px;

`

const ProfileIcon = styled.svg`

    fill: ${Colors.light};
    height: 20px;

`

const NavRight = styled.div`

    display: flex;
    align-items: center;

`

const DivLine = styled.div`

    height: 40px;
    width: 1px;
    background-color: ${Colors.light};

`

const Nav = styled.div`

    height: 60px;
    width: 100%;
    background-color: ${Colors.primary};
    display: flex;
    align-items: center;
    justify-content: space-between;

`
const Logo = styled.svg`

    fill: ${Colors.light};
    height: 16px;

    @media (max-width: 1366px)
        {
            height: 14px;
        }

`
const NavMenu = styled.div`

    position: relative;
    display: flex;
    align-items: center;
    margin-right: 10px;

`
const User = styled.a`

    display: flex;
    align-items: center;
    padding: 10px 20px;
    opacity: ${props => props.opacity};
    position: relative;

    &:hover ${UserText}
    {
        display: flex;
    }

`
const NavLeft = styled.a`

    display: flex;
    align-items: center;
    padding: 20px;

`
const NavItem = styled.div`

    width: 100px;
    padding: 10px 10px;
    color: ${Colors.light};
    font-weight: 500;
    font-size: 14px;
    opacity: ${props => props.opacity};
    text-align: center;

    @media (max-width: 1366px) 
        {   
            width: 80px;
            font-size: 12px;
        }

`
const NavItemA = styled.a`

    display: flex;
    align-items: center;
    justify-content: center;

`