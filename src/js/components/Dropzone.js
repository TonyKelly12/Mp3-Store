import React, {Component} from 'react';
import Dropzone from 'react-dropzone';
// Imports the Google Cloud client library



class Mp3 extends Component{

    uploadFile(files){
        acceptedFiles.forEach(file => {
            const reader = new FileReader();
            reader.onload = () => {
                const song = reader.result;
                // do whatever you want with the file content
                storage.bucket(bucketName)
                .upload(song)
                .then(() => {
                  console.log(`${filename} uploaded to ${bucketName}.`);
                })
                .catch((err) => {
                  console.error('ERROR:', err);
                });
            };
            reader.onabort = () => console.log('file reading was aborted');
            reader.onerror = () => console.log('file reading has failed');
    
            reader.readAsBinaryString(file);
        });
    }

    render(){
        return(
            <div>
            <h1>Upload Mp3</h1>
            <Dropzone onDrop={this.uploadFile.bind(this)} />
            </div>
        )
    }

}

export default Mp3;