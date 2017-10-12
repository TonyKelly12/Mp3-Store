import Dropzone from '../../../../dropzone/dist/dropzone'
export const dropzoneOptions = Dropzone.options.mp3Upload= {
    
  uploadMultiple: true,
  acceptedFiles: "image/jpeg",
  accept: function (file, done) {
    if (file.name == "justinbieber.jpg") {
      done("Naha, you don't.");
    } else {
      done();
    }
  },

  init: function (event) {
    this
      .on("addedfile", function (file) {
        console.log(file);
        acceptedFiles.unshift(file);

      });
  }
  };