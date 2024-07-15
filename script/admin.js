function close() {
    document.getElementById('slider').classList.add('d-none');
}
document.getElementById('xbtn').addEventListener('click',()=>close())
document.getElementById('+btn').addEventListener('click',function(){
    document.getElementById('slider').classList.remove('d-none');
    document.getElementById('slider').style.right = 0
})
