import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
class Navbar extends React.Component{



    render(){
        console.log(this.state);        
        const {isAuthenticated} = true;

        const adminLinks = (
            <ul className="nav nav-pills ">
                <li role="presentation" className="active"><Link to="/">Home</Link></li>
                <li role="presentation" className="active"><Link to="/logout">Logout</Link></li>
                
            </ul>
   ) ;

        const guestLinks = (
            <ul className="nav nav-pills ">
                <li role="presentation" className="active"><Link to="/">Home</Link></li>
                <li role="presentation" className="active"><Link to="/register">Register</Link></li>
                <li role="presentation" className="active"><Link to="/login">Login</Link></li>
            </ul>
        );

        return(
            <nav className="navbar navbar-inverse">
                 <div className="container-fluid">
                     {isAuthenticated ? adminLinks : guestLinks}
                 </div>
            </nav>
        )}
}

const mapStateToProps = (state, ownProps) => {
    return {
        admin: state.activeAdmin
    }
}


export default connect(mapStateToProps)(Navbar);