import styled from 'styled-components'
import { Colors } from '../StyledComponents'

export const CompBar = ({title,value,total,width,margin}) => {

    const Completed = `${(value/total)*100}%`;
    console.log(Completed);
    return (
        <CompBarHolder width={width} margin={margin}>
            <CompBarTop>
                <div>
                    {title}
                </div>
                <div>
                    {value}/{total}
                </div>
            </CompBarTop>
            <CompBarBottom>
                <BarUnderlay></BarUnderlay>
                <BarOverlay width={Completed} ></BarOverlay>
            </CompBarBottom>
        </CompBarHolder>
    )
}

const CompBarHolder = styled.div`

    width: ${props=> props.width};
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: ${props=> props.margin};

`

const CompBarTop = styled.div`

    font-size: 14px;
    margin-bottom: 8px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

`

const CompBarBottom = styled.div`

    position: relative;
    width: 100%;

`

const BarUnderlay = styled.div`

    position: absolute;
    width: 100%;
    background-color: ${Colors.underlay};
    height: 7.5px;
    border-radius: 3.75px;

`

const BarOverlay = styled.div`

    position: absolute;
    width: ${props=> props.width};
    background-color: ${Colors.primary};
    height: 7.5px;
    border-radius: 3.75px;
    transition: 600ms ease-in-out;

`