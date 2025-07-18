document.addEventListener('DOMContentLoaded',()=>{
    let input = document.getElementById('input'); 
    let error = document.getElementById('error'); 
    let counter = 0;
    function addNotes(){
        counter++;
        let notes = document.getElementById('notes');
        let value = input.value;
        let li = document.createElement('li');
        li.innerHTML = `<li>${counter}.${value}<i id="trash" class = "fa-solid fa-trash"></i></li>`;
        notes.appendChild(li);
        let trash = document.querySelectorAll('#trash');
        trash.forEach(e=>{
            e.addEventListener('click',()=>{
                e.parentElement.parentElement.classList.add('active');
            });
        });
    }    
    function render(){
        if(!input.value){
            input.classList.add('active');
            error.innerHTML = `<span style="color:red;">Please enter a note.</span>`
        }else{
            error.innerHTML = ``;
            addNotes();
        }
    } 
    input.addEventListener('focus',()=>{
        input.classList.remove('active');
    });
    input.addEventListener('keydown',(event)=>{
        if(event.key == 'Enter'){
          if(!input.value){
            input.classList.add('active');
            error.innerHTML = `<span style="color:red;">Please enter a note.</span>`
          }else{
            error.innerHTML = ``;
            addNotes();
        }
        }
    });
    let btn = document.getElementById('btn');
    btn.addEventListener('click',render);
})