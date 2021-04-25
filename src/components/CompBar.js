import styled from 'styled-components'
import { Colors } from './StyledComponents'

export const CompBar = ({title,value,total,width,padding,margin}) => {

    const Percentage = ((value/total)*100) + '%'

    return (
        <CompHolder width={width} padding={padding} margin={margin}>
            <CompTop>
                <CompTittle> {title} </CompTittle>
                <CompValue> {value} / {total} </CompValue>
            </CompTop>
            <CompBottom>
                <Background></Background>
                <Overlay width={Percentage}></Overlay>
            </CompBottom>
        </CompHolder>
    )
}

const CompHolder = styled.div`

    width: ${props => props.width};
    margin: ${props => props.margin};
    padding: ${props => props.padding};

    @media (max-width: 800px)
    {
        min-width: 47.5%;
    }

`

const CompTop = styled.div`

    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 6px;

`
const CompBottom = styled.div`

    position: relative;
    height: 12px;

`
const CompTittle = styled.div`

    font-size: 14px;
    color: ${Colors.profile};

    @media (max-width: 1366px) 
        {
            font-size: 12px;
        }

`
const CompValue = styled.div`

    font-size: 14px;
    color: ${Colors.profile};

    @media (max-width: 1366px) 
        {
            font-size: 12px;
        }

`
const Overlay = styled.div`

    position: absolute;
    width: ${props => props.width};
    height: 7px;
    background-color: ${Colors.primary};
    border-radius: 3.5px;

`
const Background = styled.div`

    position: absolute;
    width: 100%;
    height: 7px;
    background-color: ${Colors.underlay};
    border-radius: 3.5px;

`