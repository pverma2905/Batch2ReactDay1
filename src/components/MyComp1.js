import React from 'react'
import MyComp2 from './MyComp2'

export default function MyComp1(props) {
    return (
        <>
            <div>MyComp1 {props.name}</div>
            <MyComp2 name={props.name} />
        </>
    )
}
