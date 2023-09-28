import React from 'react'
import MyComp3 from './MyComp3'
export default function MyComp2(props) {
    return (
        <>
            <div>MyComp2 {props.name}</div>
            <MyComp3 name={props.name} />
        </>

    )
}
