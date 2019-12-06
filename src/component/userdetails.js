import React, { Component } from 'react';
import '../App.css';

//const imgMyimageexample = require('../static/hospital.jpg');


class Userdetails extends Component {
    render() {
        return ( 
            <div className="divStyle" >
                  <form className="container" onSubmit={this.submitLogin}>
                                <h1  align="center" >The User Details</h1> 
                                <div >
                                    <div className="logincontainer">
                                        <label>Member User ID</label>
                                        <input name="userid" id="userid" type="text" placeholder="User ID" onChange={this.emailChangeHandler} required />
                                    </div>
                                </div> 
                                <div >
                                    <div className="logincontainer" >
                                        <label>Visited Date</label>
                                        <input name="date" id="date" type="text" placeholder="Date" onChange={this.passwordChangeHandler} required />
                                    </div>
                                </div>
                                <div >
                                    <div className="logincontainer" >
                                        <label>Visited Time</label>
                                        <input name="time" id="time" type="text" placeholder="Time" onChange={this.passwordChangeHandler} required />
                                    </div>
                                </div>  
                                <div >
                                    <div className="logincontainer" >
                                        <label>Member Age</label>
                                        <input name="age" id="age" type="age" placeholder="Age" onChange={this.passwordChangeHandler} required />
                                    </div>
                                </div> 
                                <div >
                                    <div className="logincontainer" >
                                        <label>Member Gender</label>
                                        <input name="gender" id="gender" type="gender" placeholder="Gender" onChange={this.passwordChangeHandler} required />
                                    </div>
                                </div> 
                                <div >
                                    <div className="logincontainer" >
                                        <label>Member Height</label>
                                        <input name="height" id="height" type="height" placeholder="Height" onChange={this.passwordChangeHandler} required />
                                    </div>
                                </div>                               
                                <div >
                                    <div className="logincontainer" >
                                        <label>Member Weight</label>
                                        <input name="weight" id="weight" type="weight" placeholder="weight" onChange={this.passwordChangeHandler} required />
                                    </div>
                                </div>
                                <div >
                                    <div className="logincontainer" >
                                        <label>Heart Rate</label>
                                        <input name="heartrate" id="heartrate" type="heartrate" placeholder="Heart Rate" onChange={this.passwordChangeHandler} required />
                                    </div>
                                </div>
                                <div >
                                    <div className="logincontainer" >
                                        <label>Glucose Value</label>
                                        <input name="glucose" id="glucose" type="glucose" placeholder="Glucose" onChange={this.passwordChangeHandler} required />
                                    </div>
                                </div>
                                <form className="buttonContainer">
                                <div >
                                    <button className="loginbutton" type="submit">Log in </button>
                                    <label className="buttonlabel">
                                    </label>
                                    
                                    
                                </div>  
                                </form> 
                            </form>
            </div>   
            
        )
    }
}
//Export The Main Component
export default Userdetails;