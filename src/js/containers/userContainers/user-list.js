import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectUser} from '../../actions/userActions/selectUser';

class UserList extends Component {
    createListItems() {
        return this
            .props
            .users
            .map((user) => {
                return (
                    <li key ={user.id} onClick={() => this.props.selectUser(user)}>
                        {user.first}
                        {user.last}
                    </li>
                )
            })
    }
    render() {
        return (
            <ul>
                {this.createListItems()}
            </ul>
        );
    }

}
// this function takes a piece of state and maps it to a property no you can use
// this.props.users for whole application
const mapStateToProps = (state, ownProps) => {
    return {users: state.Users}
}
// connects functions to redux
const matchDispatchToProps = (dispatch) => {
    return bindActionCreators({
        selectUser: selectUser, // prop selectUser equals the selectUser function 
    }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(UserList);