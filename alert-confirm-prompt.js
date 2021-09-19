//alert confirm prompt

const alertme=()=>{
    alert('i declare alert!!!')
}

const confirmMe=()=>{
    // confim return value 
    const OK = confirm('are you OK? please confirm me');
    if(OK){
        console.log('i am ok');
    }
    else{
        console.log('i am not OK');
    }
}

const getName=()=>{
     // prompt return value 
    const name = prompt('what is your name?')
    if(name){
        console.log('name is',name,);
    }
    else{
        console.log('name is not found');
    }
}