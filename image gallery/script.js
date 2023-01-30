let fileInput = document.getElementById("file-input");
let imageContainer = document.getElementById("images");
let numOfFiles = document.getElementById("num-of-files");

function preview() {
  imageContainer.innerHTML = "";
  numOfFiles.textContent = `${fileInput.files.length} Files Selected`;

  for (i of fileInput.files) {
    let reader = new FileReader();

    reader.readAsDataURL(i);

    reader.addEventListener("load", () => {
      const imagesArray = localStorage.getItem("images");

      let images = [];

      if (imagesArray) {
        images = [...JSON.parse(imagesArray)];
        images.push(reader.result);
      } else {
        images.push(reader.result);
      }
      localStorage.setItem("images", JSON.stringify(images));
    });
  }

  location.replace("/gallery.html");
}

function loadImages() {
  const images = JSON.parse(localStorage.getItem("images"));

  images.forEach((image) => {
    let figure = document.createElement("figure");
    let figCap = document.createElement("figcaption");
    figCap.innerText = "Image";
    figure.appendChild(figCap);

    let img = document.createElement("img");
    img.setAttribute("src", image);
    figure.insertBefore(img, figCap);

    imageContainer.appendChild(figure);
  });
}

// new script




function indexpage(){
  location.replace('./index.html');
}


function favpage(){
  location.replace('./favorite.html');
 
}


function gallerypage(){
  location.replace('./gallery.html');

}

// function gal(){
// location.replace('./gallery_sec_page.html');

// document.querySelector("#files").addEventListener("change", (e)=>{
//   if(window.File && window.FileReader && window.FileList && window.Blob){
//       const files= e.target.files;
//       const output=document.querySelector("#result");
//       for(let i=0;i<files.length;i++){
//           if(!files[i].type.match("image")) continue;
//           const picReader=new FileReader();
//       picReader.addEventListener("load", function(event){
//           const picFile=event.target;
//           const div=document.createElement("div");
//           div.innerHTML=`<img class="thumbnail" src="${picFile.result}" title="${picFile.name}"/>`;
//             output.appendChild(div);
//       })
//           picReader.readAsDataURL(files[i]);

//       }
//   } else{
//       alert("your browser does not support the file API")
//   }
// })
// // location.replace('./gallery_sec_page.html');
// }




// function favpage(){
//   location.replace('./gallery_fav_page.html');

// }

// function gallery(){
//   location.replace('./gallery_sec_page.html');

// }

let popup=document.getElementById("popup");

function openPopup(){
popup.classList.add("open-popup");


}

function closePopup(){
popup.classList.remove("open-popup");


}