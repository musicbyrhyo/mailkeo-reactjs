import styled from 'styled-components'

export const Colors = {
    primary: '#214ED3',
    light: '#C3D8FA',
    dark: '#0A1A47',
    underlay: '#C4C4C4',
    profile: '#7A7A7A'
}

export const PrimaryBtn = styled.a`

    width: ${props=> props.width};
    height: ${props=> props.height};
    padding: ${props=> props.padding};
    margin: ${props=> props.margin};

    background-color: ${props=> props.primary ? Colors.primary : "transparent"};
    color: ${props=> props.primary ? Colors.light : Colors.primary};
    border: 1px solid ${props=> props.primary ? "transparent" : Colors.primary};
    border-radius: 5px;
    font-weight: 500;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: 200ms ease-in-out;
`

export const PrimaryHeading = styled.div`

    width: ${props=> props.width};
    height: ${props=> props.height};
    padding: ${props=> props.padding};
    margin: ${props=> props.margin};

    font-size: 48px;
    font-weight: 800;
    color: ${Colors.primary};

    display: ${props=> props.display};
    align-items: ${props=> props.align};
    justify-content: ${props=> props.content};
    flex-direction: ${props=> props.direction};

`

export const DescriptionText = styled.div`

    width: ${props=> props.width};
    height: ${props=> props.height};
    padding: ${props=> props.padding};
    margin: ${props=> props.margin};

    font-size: 24px;
    font-weight: 400;
    color: ${Colors.dark};

    display: ${props=> props.display};
    align-items: ${props=> props.align};
    justify-content: ${props=> props.content};
    flex-direction: ${props=> props.direction};

`