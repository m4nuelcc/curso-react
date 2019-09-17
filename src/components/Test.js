import React, { Component } from 'react'
import {ajaxGet } from '../index'



export default class CogerAjax extends Component {
    
    state ={ datos: [] }
    
    hacerAjax(){
       ajaxGet('http://localhost:3000/manuel/diskoplay', (diskos) => {
           console.log(diskos)
           this.setState({datos:diskos}) 
        })
    }
    render() {
        return (
            <div>
            
                <button onClick={()=> this.hacerAjax()}>hace el ajax a cosola</button>
                {this.state.datos.map( (c, i ) => <div key ={c._id}> {c.disko} </div> )}

                
            </div>
        )
    }
}
