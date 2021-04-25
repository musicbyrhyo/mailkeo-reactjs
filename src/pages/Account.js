import React from 'react'
import { DashBoardNav } from '../components/DashBoardNav'

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
        </>
    )
}

