import styled from 'styled-components'
import { Colors } from './StyledComponents'

export const ChannelA = () => {
    return (
        <HolderA href="">
            <ChannelAHolder>
                <div>
                    <div>
                        My Campaign 1
                    </div>
                    <div>
                        Date Started:
                    </div>
                </div>
                <div>
                    <div>
                        Analytics
                    </div>
                    <div>
                        Re-send
                    </div>
                    <div>
                        Delete
                    </div>
                </div>
            </ChannelAHolder>
        </HolderA>
    )
}

const HolderA = styled.a`



`

const ChannelAHolder = styled.div`

    width: 100%;
    border: 1px solid ${Colors.light};
    border-radius: 5px;
    background-color: ${Colors.light};
    padding: 32px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: 100ms ease-in-out;

    &:hover{

        border: 1px solid ${Colors.primary};
        transition: 10ms ease-in-out;
    
    }

`
