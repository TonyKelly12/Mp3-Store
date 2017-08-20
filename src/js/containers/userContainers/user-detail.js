import React, {Component} from 'react';
import {connect} from 'react-redux';

class UserDetail extends Component{
    render(){ 
        if(!this.props.user){ //If there is no user selected render below
                return(<h4>Please Select User...</h4>);
            }
        return(
           //when  prop user is selected render below
            <div>
                <h2>{this.props.user.first} {this.props.user.last}</h2>
                <h3>{this.props.user.age}</h3>

            </div>
        );
    }
}
//maps the state to the activer user selected as  prop user
    const mapStateToProps = (state, ownProps) => {
        return {
            user: state.ActiveUser 
        }
    }

    //Exports state and connects it to UserDetail component only
    export default connect(mapStateToProps)(UserDetail);