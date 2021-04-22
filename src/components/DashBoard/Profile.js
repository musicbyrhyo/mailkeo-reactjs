import styled from 'styled-components'
import { Colors } from '../StyledComponents'

export const Profile = ({name,email}) => {

    const FirstLetter = name.charAt(0)

    return (
        <ProfileHolder>
            <ProfileHeader>
                Profile
            </ProfileHeader>
            <CircleHolder>
                <Circle width="100" height="100" viewBox="0 0 100 100" fill={Colors.primary} xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50" cy="50" r="48.5"/>
                </Circle>
                <LetterDiv>
                    {FirstLetter}
                </LetterDiv>
            </CircleHolder>
            <Name>
                {name}
            </Name>
            <Email>
                {email}
            </Email>
        </ProfileHolder>
    )
}

export const ProfileHeader = styled.div`

    font-size: 20px;
    color: ${Colors.dark};
    margin-bottom: 16px;

`

const ProfileHolder = styled.div`

    width: 320px;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 24px;

`

const LetterDiv = styled.div`

    font-family: 'Playfair Display', serif;
    font-size: 40px;
    position: absolute;
    color: ${Colors.light};
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
`

const CircleHolder = styled.div`

    position: relative;
    height: 100px;
    width: 100px;
    margin-bottom: 12px;

`

const Circle = styled.svg`

    position: absolute;
    top: 0px;

`

const Name = styled.div`

    font-size: 18px;
    font-weight: 600;
    color: ${Colors.dark};
    margin-bottom: 2px;

`

const Email = styled.div`

    font-size: 14px;
    font-weight: 400;
    color: ${Colors.dark};
    letter-spacing: 1px;

`