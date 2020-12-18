import React, { Component } from "react"

import Army from "./withArmy"

class Shyam extends  Component{
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-2">
                          <h2 
                            onMouseOver={this.props.hocHandlegunshots}>
                            Shyam_GunName : {this.props.hocgunname}<br/>
                            shyam_Total_gunshots : {this.props.hocgunshots}
                        </h2>
                    </div>
                </div>
            </div>
        )
    }
}

export default Army(Shyam);