import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {logout}  from './LoginForm/action-authAdmin';
import {bindActionCreators} from 'redux'

class Navbar extends React.Component{
    
    constructor(props) {   
         // fires before component is mounted    
        super(props); 
      
        // makes this refer to this component
      if (!this.props.admin || this.props.admin == {}){
          this.state = null;
          this.logout = this.props.logout.bind(this);
      } else
        this.state = isAuthenticated;
        this.logout = this.props.logout.bind(this);   
    
    }
    
    
     logout(props){
         console.log("admin logout " + this.props.admin)
         props.preventDefault();
        this.logout(this.props.admin);
    }

    render(){
        console.log('is authenticated ' + this.props.admin); 
        if (!this.props.admin || !this.props.admin.isAuthenticated){       
        var isAuthenticated = false;
    }else{
        var isAuthenticated = this.props.admin.isAuthenticated;
    }

        const adminLinks = (
            <ul className="nav nav-pills ">
                <li role="presentation" className="active"><Link to="/">Home</Link></li>
                <li role="presentation" className="active"><a href='#' onClick= {this.logout}>Logout</a></li>
            </ul>

            
   ) ;
   if (!this.props.admin || !this.props.admin.isAuthenticated){       
    var welcomeName = false;
}else{
    var welcomeName = this.props.admin.admin.username;
}
   const adminWelcom = (
       
    <h3> Hi {welcomeName}</h3> 
   );
        const guestLinks = (
            <ul className="nav nav-pills ">
                <li role="presentation" className="active"><Link to="/">Home</Link></li>
                <li role="presentation" className="active"><Link to="/register">Register</Link></li>
                <li role="presentation" className="active"><Link to="/login">Login</Link></li>
            </ul>
        );

        const guestWelcome = (
            <h3> Welcome! Please login </h3>
        );
        return(
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className='links'>
                         {isAuthenticated === true ? adminLinks : guestLinks}
                    </div>
                    <div className='welcome'>
                         {isAuthenticated === true ? adminWelcom : guestWelcome}
                    </div>
                </div>
                 
            </nav>
        )}
}


const mapStateToProps = (state, ownProps) => {
    return {
        admin: state.activeAdmin
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({logout: logout}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps )(Navbar);