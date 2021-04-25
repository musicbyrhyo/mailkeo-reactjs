import React from 'react'
import { DashBoardNav } from '../components/DashBoardNav'

export const Campaigns = () => {

    const Active = {
        one: {
            opacity: '1',
        },
        two: {
            opacity: '0.5',
        },
        three: {
            opacity: '1',
        },
        four: {
            opacity: '1',
        },
        left: '100px'
    }

    return (
        <>
            <DashBoardNav Active={Active}/>
        </>
    )
}
