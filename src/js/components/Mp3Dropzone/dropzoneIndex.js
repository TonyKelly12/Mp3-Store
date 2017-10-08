import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as uploadCreators from './uploadActions';

import Mp3Dropzone from './Mp3Dropzone';

const mapStateToProps = (state, ownProps) => {
    return {
        prop: state.prop
    
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(uploadCreators,dispatch);
 
      
}

export default connect (mapStateToProps, mapDispatchToProps)(Mp3Dropzone);