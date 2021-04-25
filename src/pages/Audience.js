import React from 'react'
import { DashBoardNav } from '../components/DashBoardNav'

export const Audience = () => {

    const Active = {
        one: {
            opacity: '1',
        },
        two: {
            opacity: '1',
        },
        three: {
            opacity: '0.5',
        },
        four: {
            opacity: '1',
        },
        left: '200px'
    }

    return (
        <>
            <DashBoardNav Active={Active}/>
        </>
    )
}
