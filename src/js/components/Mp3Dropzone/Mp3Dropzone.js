import React, {Component} from 'react';
import Dropzone from './TDropzone';
import {connect} from 'react-redux';

function callUploadFile(loadedFiles) {
  return fetch('http://localhost:9000/admin/upload', {
    method: 'POST',
    mode: 'cors',
    headers: {
      
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(loadedFiles)
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
            uploadFile = (uploadedFile) =>{
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

    render(){
        console.log(this.state);
        console.log(this.props.admin)
        return(
           <section>
           <div className="dropzone">
             <Dropzone
                accept="image/jpeg, image/png"
                onDrop = {
                  (acceptedFiles, rejectedFiles) => {
                    acceptedFiles.forEach(file => {
                      const reader = new FileReader();
                      reader.onload = (event) => {
                        console.log('onLoad function file log');
                        console.log(file)
                       const fileurl = event.target.result
                        const uploadedFile =
                        { 
                        fileName: file.name,
                        file: URL.createObjectURL(file)
                        }
                        console.log('uploadedFile function')
                        console.log(uploadedFile.file)
                        //const fileAsBinaryString = reader.result;
                        this.uploadFile(uploadedFile);
                      }
                    
                      
                      reader.onabort = () => console.log('file reading was aborted');
                      reader.onerror = () => console.log('file reading has failed');
                    
                      reader.readAsDataURL(file);
                      console.log(file);
                      
                    })
                 
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