import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actionCreators from './action-authAdmin';
import Login from './Login';

const mapStateToProps = (state, ownProps) => {
    return {
        prop: state.prop
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators,dispatch);
 
      
}

export default connect (mapStateToProps, mapDispatchToProps)(Login);