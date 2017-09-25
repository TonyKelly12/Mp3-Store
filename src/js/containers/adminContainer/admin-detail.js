import React, {Component} from 'react';

import {connect} from 'react-redux';


class AdminDetail extends Component{
    

    render(){
        
        
        if(!this.props.admin || this.props.admin.isAuthenticated == false){ //If there is no user selected or if isAuthenticated null render below
                return(<h4>Please Log In</h4>);
            }
             console.log('admin detail ' + this.props.admin)
        return(
           //when  prop user is selected render below
            <div>
                <h1> Its Reading a User </h1>
               
                <h2>{this.props.admin.admin.email} {this.props.admin.admin.lastName}</h2>
                <h3>{this.props.admin.admin.username}</h3>

            </div>
        );
    }
}
//maps the state to the activer user selected as  prop user
    const mapStateToProps = (state, ownProps) => {
        return {
            admin: state.activeAdmin 
        }
    }



    //Exports state and connects it to UserDetail component only
    export default connect(mapStateToProps)(AdminDetail);