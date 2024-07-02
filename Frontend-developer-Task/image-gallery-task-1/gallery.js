function openModal(imagePath){
    var modal = document.getElementById('myModal');
    var img = document.getElementById('modalImage');
    modal.style.display = "block";
    img.src = imagePath;
}
function closeModal(){
    var modal = document.getElementById('myModal');
    modal.style.display = "none";
}