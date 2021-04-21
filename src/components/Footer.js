import React from 'react'
import styled from 'styled-components'
import { Colors } from './StyledComponents'

export const Footer = () => {
    return (
        <FooterHolder>
            <FooterLeft>
                © Mailkeo 2021 | Beta
            </FooterLeft>
            <FooterRight>
                Support: <FooterSupport href="mailto:hello@mailkeo.com">hello@mailkeo.com</FooterSupport>
            </FooterRight>
        </FooterHolder>
    )
}

const FooterLeft = styled.div`

    margin-left: 12.5%;
    font-weight: 400;
    color: ${Colors.light};
    transition: 200ms ease-in-out;

    @media (max-width: 550px)
    {
        margin-left: 10px;
    }

`

const FooterRight = styled.div`

    margin-right: calc(12.5% - 10px);
    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-weight: 400;
    color: ${Colors.light};
    transition: 200ms ease-in-out;

    @media (max-width: 550px)
    {
        margin-right: 0px;
    }

`

const FooterSupport = styled.a`

    font-weight: 400;
    color: ${Colors.light};
    padding: 10px 10px 10px 5px;

`

const FooterHolder = styled.div`

    position: fixed;
    bottom: 0px;
    height: 48px;
    width: 100%;
    background-color: ${Colors.primary};
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;

    @media (max-width: 1100px)
    {
        font-size: 12px;
    }

`