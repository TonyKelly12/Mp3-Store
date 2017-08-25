import React, {Component} from 'react';

import {connect} from 'react-redux';
import {authAdmin} from '../../actions/formActions/authAdmin';

class AdminDetail extends Component{
    render(){ 
        if(!this.props.admin){ //If there is no user selected render below
                return(<h4>Please Log In</h4>);
            }
        return(
           //when  prop user is selected render below
            <div>
                <h2>{this.props.admin.first} {this.props.admin.last}</h2>
                <h3>{this.props.admin.username}</h3>

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