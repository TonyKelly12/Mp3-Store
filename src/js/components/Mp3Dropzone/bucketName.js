import React, { Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Field, reduxForm, Form,SubmissionError  } from 'redux-form';


class BucketName extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: this.props.activeAdmin.admin.bucketName};
  
      
    }

   
  
    render() {
        const bucketName = this.props.activeAdmin.admin.bucketName
        console.log(bucketName)
      return (
       <div className="input-row">
       
       <div>
       <input type = "hidden" name = "topic" value = {bucketName} />
       </div>
     </div>
      );
    }
  }

  const mapStateToProps = (state, ownProps) => {
    return {
        activeAdmin: state.activeAdmin
    }
}

export default connect(mapStateToProps) (BucketName);
