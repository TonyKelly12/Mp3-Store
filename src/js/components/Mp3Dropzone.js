import React, {Component} from 'react';
import Dropzone from 'react-dropzone';
import {connect} from 'react-redux';

function callUploadFile(acceptedFiles) {
  return fetch('http://localhost:9000/admin/upload', {
    method: 'POST',
    mode: 'cors',
    headers: {
      
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(acceptedFiles)
  })
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson;
    })
    .catch((error) => {
      console.error(error);
    });
}


class Mp3 extends Component{
    constructor(props) {    // fires before component is mounted    
        super(props); 
            const acceptedFiles = ['jpeg']
        // makes this refer to this component
            this.state = {
                
                isAuthenicated:{},
                acceptedFiles: [],
                rejectedFiles: [],
                bucketName:{}
            } 
            
         }

         componentDidMount() {   
             // fires immediately after the initial render 
             if(this.props.admin){
                this.setState({
                    isAuthenicated: this.props.admin.admin.isAuthenicated,
                    bucketName: this.props.admin.admin.bucketName
                })
            }// set state 
            } 
            componentDidUpdate() {   
                // fires immediately after rendering with new P or S  
            
            }
            uploadFile = ({acceptedFiles, rejectedFiles}) =>{
                const loadedFiles = {
                    files: acceptedFiles,
                    bucketName: this.state.bucketName
                }
             console.log('Run ondrop')
             this.setState({ acceptedFiles, rejectedFiles })
             console.log(acceptedFiles);
             callUploadFile(loadedFiles);
    }

    render(){
        console.log(this.state);
        console.log(this.props.admin)
        return(
           <section>
           <div className="dropzone">
             <Dropzone
               accept="image/jpeg, image/png"
               onDrop={(acceptedFiles, rejectedFiles) => { 
                
                  this.uploadFile({ acceptedFiles, rejectedFiles });   
                }
                
                }
             >
               <p>Try dropping some files here, or click to select files to upload.</p>
               <p>Only *.jpeg and *.png images will be accepted</p>
             </Dropzone>
           </div>
           <aside>
             <h2>Accepted files</h2>
             <ul>
               {
                 this.state.acceptedFiles.map(f => <li key={f.name}>{f.name} - {f.size} bytes</li>)
               }
             </ul>
             <h2>Rejected files</h2>
             <ul>
               {
                 this.state.rejectedFiles.map(f => <li key={f.name}>{f.name} - {f.size} bytes</li>)
               }
             </ul>
           </aside>
         </section>
        )
    }

}

const mapStateToProps = (state, ownProps) => {
    return {
        admin: state.activeAdmin 
    }
}



//Exports state and connects it to UserDetail component only
export default connect(mapStateToProps)(Mp3);