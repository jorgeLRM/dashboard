let btnTree = document.querySelectorAll('.tree .btn-tree');
let temp = 0;


for(let i = 0; i < btnTree.length; i++){
  btnTree[i].addEventListener('click', function(e) {
    let btn = e.target;
    
    if(btn.classList.contains("active")){
        btn.classList.remove('active');
    }else{
      btnTree[temp].classList.remove('active');
      btn.classList.add('active');
      temp = i;
    }
  })
}

const sideToggle = document.querySelector('.side-toggle');
const sidebar = document.querySelector('.sidebar');

sideToggle.addEventListener('click', function(e){
    if(sidebar.classList.contains('sidebar-hide')){
        sidebar.classList.remove('sidebar-hide');    
   }else{
        sidebar.classList.add('sidebar-hide');  
   }
});