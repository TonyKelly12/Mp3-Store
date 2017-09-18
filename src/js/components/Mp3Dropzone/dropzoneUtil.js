require('../../../../dropzone/dist/dropzone')
export const dropzoneOptions = Dropzone.options.tdropzone= {
    
    paramName: "file", // The name that will be used to transfer the file
    maxFilesize: 2, // MB
    accept: function(file, done) {
      if (file.name == "me.jpg") {
        done("Naha, you don't.");
      }
      else { done(); }
    }
  };