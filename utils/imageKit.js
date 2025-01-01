var ImageKit = require("imagekit");

exports.initImageKit = function () {
  var imagekit = new ImageKit({
    publicKey: "public_4fFZovtqtDefupHPMdmsvFkDmv4=",
    privateKey: "private_uMYpxncchM******************",
    urlEndpoint: "https://ik.imagekit.io/mf5a3cd0b",
  });

  return imagekit;
};
