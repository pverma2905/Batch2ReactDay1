import React, { Component } from 'react'
import MyComp4 from './MyComp4'

export default class MyComp3 extends Component {
    surname = "verma";
    address = "";
    constructor() {
        super()
        this.address = 'agra'
    }
    render() {
        return (
            <>
                <div>
                    Hello World {this.props.name} {this.surname} {this.address}
                </div>
                <MyComp4 name={this.props.name} >Verma</MyComp4>
            </>

        )
    }
}
