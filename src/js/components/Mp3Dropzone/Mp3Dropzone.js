import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import Dropzone from 'react-dropzone'


function callUploadFile(file) {
    return  axios({
      url: `http://localhost:9000/admin/upload`, //*** Note these are not single quotes ' they are ` */
      method: 'post',
      data: {
        file
            
      },
    })
     .then(response => res.status(200).json(response.data.data))
     .catch((error) => res.status(500).json(error.response.data));
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
              uploadFile = (file) =>{
                console.log(file)
                
                 
                  file.bucketName = this.state.bucketName
                 console.log(file.bucketName)
               
               //console.log(loadedFiles.files[0].preview)
               //this.setState(uploadedFile)
               //localStorage.setItem('uploadedFile', uploadedFile)
               callUploadFile(file);
               
               
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
                       
                        this.uploadFile(file);
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