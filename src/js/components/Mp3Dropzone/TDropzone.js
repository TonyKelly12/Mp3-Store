import React, {Component} from 'react';

class Dropzone extends Component{

render(){

    return(
         <div>
         <script src="../../../../dropzone/dist/dropzone"></script>
        <form action="/file-upload" className="dropzone">
  <div className="fallback">
    <input name="file" type="file" multiple />
  </div>
</form>
</div>
    )

}
}

export default Dropzone;