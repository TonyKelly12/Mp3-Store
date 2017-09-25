import React, {Component} from 'react';
import TDropzone from './TDropzone';
import {connect} from 'react-redux';

//function callUploadFile(file) {
//    return fetch('http://localhost:9000/admin/upload', {
//      method: 'POST',
//      mode: 'cors',
//      headers: {
//        
//        'Content-Type': 'application/json',
//      },
//      body: JSON.stringify(file)
//    })
//      .then((response) => response.json())
//      .then((responseJson) => {
//        return responseJson;
//      })
//      .catch((error) => {
//        console.error(error);
//      });
//  }


class Mp3Dropzone extends Component{
    constructor(props) {    // fires before component is mounted    
        super(props); 
            const acceptedFiles = ['jpeg']
        // makes this refer to this component
            this.state = {
                
                isAuthenticated:{},
                acceptedFiles: [],
                rejectedFiles: [],
                bucketName:{}
            } 
            
 
            
            const uploadFile = (uploadedFile) =>{
              console.log('Run ondrop')
              console.log(uploadedFile);
              localStorage.setItem('uploadedFile', uploadedFile)
             
              const loadedFiles = {
                    file: uploadedFile.file,
                    bucketName: this.state.bucketName,
                    fileName: uploadedFile.fileName
               }
             
             //console.log(loadedFiles.files[0].preview)
             //this.setState(uploadedFile)
             
             callUploadFile(loadedFiles);
             
             
    }
  }

    render(){
        console.log(this.state);
        console.log(this.props.activeAdmin)
        return(
           <section>
           <div >
             <TDropzone/>  
           </div>
          </section>
        )
    }

}

const mapStateToProps = (state, ownProps) => {
    return {
        activeAdmin: state.activeAdmin 
    }
}



//Exports state and connects it to UserDetail component only
export default connect(mapStateToProps)(Mp3Dropzone);