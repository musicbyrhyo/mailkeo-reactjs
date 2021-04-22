import styled from 'styled-components'
import { Colors } from '../StyledComponents'

export const RightBar = () => {
    return (
        <RightBarHolder>
            
        </RightBarHolder>
    )
}

const RightBarHolder = styled.div`

    position: fixed;
    right: 0px;
    width: 320px;
    height: 100vh;
    background-color: ${Colors.light};

`