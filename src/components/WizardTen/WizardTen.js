import React,  { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { updateFirst } from "../../ducks/reducer.js";
import { updateLast } from "../../ducks/reducer.js";
import { updateEmail } from "../../ducks/reducer.js";

class WizardTen extends Component {
    render(){
        const { updateFirst, updateLast, updateEmail} = this.props
        return(
            <div className="parent-div">
                <div className="vert-align">                    
                    
                    <p>What is your name?</p> <br />

                    <input type="text" placeholder="First Name" onChange={(e) => updateFirst(e.target.value)}/>
                    <input type="text" placeholder="Last Name" onChange= {(e) => updateLast(e.target.value)}/>
                    <input type="text" placeholder="email" onChange={(e) => updateEmail(e.target.value)}/>
                    
                    <Link to="/wEleven"><button className="margin-btn"> Next </button></Link>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { updateFirst, updateLast, updateEmail } = state;

    return {
        updateFirst,
        updateLast,
        updateEmail
    };
}

export default connect(mapStateToProps, { updateFirst, updateLast, updateEmail })(WizardTen); 
