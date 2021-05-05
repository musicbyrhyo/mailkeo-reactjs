import styled from 'styled-components'
import { Colors } from './StyledComponents'

export const OverviewChannelA = ({title,date,id}) => {

    const Link = `/campaigns/${id}`

    return (
        <LinkA href={Link} >
            <LinkHolder>
                <LinkLeft>
                    <LinkHeader>
                        {title}
                    </LinkHeader>
                    <LinkDescription>
                        Date Started: {date}
                    </LinkDescription>
                </LinkLeft>
                <LinkRight>
                    <LinkText>
                        View Campaign
                    </LinkText>
                    <svg width="19" height="11" viewBox="0 0 19 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.7072 0.345703L12.8669 1.18609L16.4323 4.75149H0.935547V5.94003H16.4322L12.8669 9.50532L13.7072 10.3457L18.7073 5.3457L13.7072 0.345703Z" fill="#4052F0"/>
                    </svg>
                </LinkRight>
            </LinkHolder>
        </LinkA>
    )
}

export const OverviewChannelB = ({title,subscribers,id}) => {

    const Link = `/campaigns/${id}`

    return (
        <LinkA href={Link}>
            <LinkHolder>
                <LinkLeft>
                    <LinkHeader>
                        {title}
                    </LinkHeader>
                    <LinkDescription>
                        Subscribers: {subscribers}
                    </LinkDescription>
                </LinkLeft>
                <LinkRight>
                    <LinkText>
                        View Audience
                    </LinkText>
                    <svg width="19" height="11" viewBox="0 0 19 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.7072 0.345703L12.8669 1.18609L16.4323 4.75149H0.935547V5.94003H16.4322L12.8669 9.50532L13.7072 10.3457L18.7073 5.3457L13.7072 0.345703Z" fill="#4052F0"/>
                    </svg>
                </LinkRight>
            </LinkHolder>
        </LinkA>
    )
}

const LinkLeft = styled.div`

`
const LinkText = styled.div`

    font-size: 14px;
    margin-right: 6px;

`
const LinkRight = styled.div`

    margin-top: 32px;
    display: flex;
    align-items: center;
    color: ${Colors.primary};

`

const LinkHolder = styled.div`

    margin-top: 24px;
    padding: 30px;
    background-color: ${Colors.light};
    border: 1px solid ${Colors.light};
    border-radius: 5px;
    transition: 100ms ease-in-out;
    
    &:hover
    {
        border: 1px solid ${Colors.primary};
        transition: 100ms ease-in-out;
    }

`

const LinkA = styled.a`

`

const LinkHeader = styled.div`

    color: ${Colors.dark};
    font-size: 18px;
    font-weight: 600;

`

const LinkDescription = styled.div`

    color: #686868;
    font-size: 12px;
    font-weight: 500;
    margin-top: 6px;

`