import React, {Component} from 'react';
import Dropzone from 'react-dropzone';

class Mp3 extends Component{

    uploadFile(files){
        console.log('uploadFile: ')
    }

    render(){
        return(
            <div>
            Upload Mp3
            <Dropzone onDrop={this.uploadFile.bind(this)} />
            </div>
        )
    }

}

export default Mp3;