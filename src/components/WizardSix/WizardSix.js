import React,  { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { cost } from "../../ducks/reducer.js";
import { updateDownPayment } from "../../ducks/reducer.js";

class WizardSix extends Component {

    render(){
        const { cost, updateDownPayment } = this.props
        return(
            <div className="parent-div">
                    <div className="vert-align">                    <p>What is the estimated purchase price?</p> <br />
                        
                        
                        <input type="text" placeholder="amount" onChange={(e) => cost(e.target.value)}/> <br />


                    <p>How much are you putting down as a down payment?</p> <br />
                        
                        
                        <input type="text" placeholder="amount" onChange={(e) => updateDownPayment(e.target.value)}/>                    
                        
                    
                    <Link to="/wSeven"><button className="margin-btn"> Next </button></Link>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { cost, updateDownPayment } = state;

    return {
        cost,
        updateDownPayment
    };
}

export default connect(mapStateToProps, { cost, updateDownPayment })(WizardSix); 