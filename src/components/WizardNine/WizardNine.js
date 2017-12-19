import React,  { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { updateAddress1 } from "../../ducks/reducer.js";
import { updateAddress2 } from "../../ducks/reducer.js";
import { updateAddress3 } from "../../ducks/reducer.js";

class WizardNine extends Component {

    render(){
        const { updateAddress1, updateAddress2, updateAddress3 } = this.props
        return(
            <div className="parent-div">
                <div className="vert-align">                    
                    
                    <p>What is your address?</p> <br />

                    <input type="text" placeholder="Line One" onChange={(e) => updateAddress1(e.target.value)}/>
                    <input type="text" placeholder="Line Two" onChange={(e) => updateAddress2(e.target.value)}/>
                    <input type="text" placeholder="Line Three" onChange={(e) => updateAddress3(e.target.value)}/>
                
                    
                    <Link to="/wTen"><button className="margin-btn"> Next </button></Link>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { updateAddress1, updateAddress2, updateAddress3 } = state;

    return {
        updateAddress1,
        updateAddress2,
        updateAddress3
    };
}

export default connect(mapStateToProps, { updateAddress1, updateAddress2, updateAddress3 })(WizardNine); 