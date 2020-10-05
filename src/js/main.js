---
# this is an empty front matter
# needed for jekyll to interpret liquid
---

const Dropzone = require ('dropzone');
const fabric = require('fabric').fabric;

Dropzone.autoDiscover = false;

document.addEventListener("DOMContentLoaded", function(){

  // define the canvas
  const canvas = this.__canvas = new fabric.Canvas('c', {
    width: 500,
    height: 500
  });

  // image to be added to the canvas
  var image = new fabric.Image();

  // resize the canvas once it's loaded
  resizeCanvas();

  // declare the dropzone
  var imgUpload = new Dropzone("#upload", {
    url: "UploadImages",
    autoProcessQueue: false,
    createImageThumbnails: false,
    maxFiles: 1,
    acceptedFiles: "image/*",
    addRemoveLinks: true,
    clickable: '#upload, #upload-text'
  });

  // handle the canvas controls and overlay
  (function() {
    fabric.Object.prototype.transparentCorners = false;

    var $ = function(id){return document.getElementById(id)};

    var angleControl = $('angle-control');
    angleControl.oninput = function() {
      image.set('angle', parseInt(this.value, 10)).setCoords();
      canvas.requestRenderAll();
    };

    var scaleControl = $('scale-control');
    scaleControl.oninput = function() {
      image.scale(parseFloat(this.value)/200).setCoords();
      canvas.requestRenderAll();
    };

    function updateControls() {
      scaleControl.value = image.scaleX;
      angleControl.value = image.angle;
    }
    canvas.on({
      'object:moving': updateControls,
      'object:scaling': updateControls,
      'object:resizing': updateControls,
      'object:rotating': updateControls,
    });

    canvas.setOverlayImage("{{ 'img/frames/frame-1.png' | relative_url }}" , function() {
        canvas.overlayImage.scaleToWidth(canvas.getWidth())
        canvas.renderAll()
      }, {
        originX: 'left',
        originY: 'top',
        crossOrigin: 'anonymous'
    });

  })();

  var reader = new FileReader();
  reader.onload = function(event) {

    var imgObj = new Image();
    imgObj.src = event.target.result;

    fabric.util.loadImage(imgObj.src, function() {
    image = new fabric.Image(imgObj);
    image.set({
        lockMovementX: false,
        lockMovementY: false,
        lockScalingX: false,
        lockScalingY: false,
        lockRotation: false,
        selectable: true,
        centeredRotation: true,
        centeredScaling: true,
        cornerColor: "#0d2240",
        cornerSize: 30,
        lockSkewingX: true,
        lockSkewingY: true,
        originX: "center", 
        originY: "center",
        hasControls: false,
      });

      image.scaleToHeight(canvas.getHeight());
      image.scaleToWidth(canvas.getWidth());
      canvas.centerObject(image);
      canvas.add(image);
      canvas.renderAll();
      canvas.setActiveObject(image);
    });
  };

  // when the image is uplaoded
  // call the reader to add it to the canvas
  // enable the download button and controls
  // remove the upload text
  imgUpload.on("addedfile", function(file) {
    reader.readAsDataURL(file);
    document.getElementById("download").disabled = false;
    document.getElementById("angle-control").disabled = false;
    document.getElementById("scale-control").disabled = false;
    document.getElementById("upload-text").innerHTML = "";
  });

  // when the image is removed
  // remove it from the canvas
  // disable the download button and controls
  // re-add the upload text
  imgUpload.on("removedfile", function() {
    canvas.remove(image);
    document.getElementById("download").disabled = true;
    document.getElementById("angle-control").disabled = true;
    document.getElementById("scale-control").disabled = true;
    document.getElementById("upload-text").innerHTML = "Drop files here or click to upload.";
  });

  // Change the canvas frames
  // one per frame
  // add your frames here

  {% for image in site.static_files %}
      {% if image.path contains 'frames/' %}
          document.getElementById("{{ image.basename }}").addEventListener("click", function (){
            changeFrame(canvas, '{{ image.path | relative_url }}');
          });
      {% endif %}
  {% endfor %}

  // handle download
  // create a link and simulate a click to download the file
  var download = document.getElementById("download");
  download.addEventListener('click', function() {
    var e = canvas.toDataURL({ format: "jpeg", quality: 1, multiplier: 4});
    if (window.URL && e) {
        if (window.navigator.msSaveOrOpenBlob) window.navigator.msSaveOrOpenBlob(t, "profile-pic.jpeg");
        else {
            var r = document.createElement("a");
            (r.href = e), (r.download = "profile-pic.jpeg"), document.body.appendChild(r), r.click(), document.body.removeChild(r);
        }
    }
  }, false);
});


function resizeCanvas() {
  // fabric.js wraps the canvas in a ".canvas-container" div
  // manually set the container div's height to it's width
  // this will not affect the canvas size for download

  const outerCanvasContainer = document.getElementsByClassName("canvas-container")[0];
  outerCanvasContainer.style.width = "auto";
  outerCanvasContainer.style.height = `${outerCanvasContainer.clientWidth}px`;
}

function changeFrame(canvas, image) {
  canvas.setOverlayImage(image, function() {
        canvas.overlayImage.scaleToWidth(canvas.getWidth())
        canvas.renderAll()
      }, {
        originX: 'left',
        originY: 'top',
        crossOrigin: 'anonymous'
    });
}

window.addEventListener('resize', function() {
  resizeCanvas();
});
