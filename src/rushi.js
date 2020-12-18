import React, { Component } from "react"
import Army from "./withArmy"

class Rushi extends  Component{
        

    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-2">
                          <h2 
                            onMouseOver={this.props.hocHandlegunshots}>
                            Rushi {this.props.hocgunname} <br/>
                            Total_gunshots : {this.props.hocgunshots}    
                        </h2>
                    </div>
                </div>
            </div>
        )
    }
}

export default Army(Rushi);