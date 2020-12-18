import React, { Component } from "react"

const Army = (Men) => {
    class NewMen extends Component{
        state ={
            gunshotes : 0
             };
    
       handleGunshots = () => {
        this.setState({gunshotes : this.state.gunshotes + 1})
        }
        render(){
            return (
                <Men 
                        hocgunname = "AK-47" 
                        hocgunshots={this.state.gunshotes} 
                        hocHandlegunshots={this.handleGunshots}
                />
            );
        }
    }
    return NewMen;
}

export  default Army
