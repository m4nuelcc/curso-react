import React, { Component } from 'react'
import {ajaxGet } from '../index'


export default class Test extends Component {ç
    state ={ cuentos: [] }
    componentDidMount()
    hacerAjax(){
       ajaxGet('http://192.168.105.97:3000/tere/cuentos', (cuentos) => {
           console.log(cuentos)
           this.setState({cuentos:cuentos}) 
        })
    }
    render() {
        return (
            <div>
                <button onClick={()=> this.hacerAjax()}>hace el ajax a cosola</button>
                {this.state.cuentos.map( (c, i ) => <div key ={c._id}> {c.titulo} </div> )}

                
            </div>
        )
    }
}
