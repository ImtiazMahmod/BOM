///asynchronous
///setTimeout()
///put to wating zone 

function abul(a){
    console.log(a);
}
abul('1');
abul('2');
setTimeout(function(){
    console.log('set time out');
},5000);
fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata`)
.then(res => res.json())
.then(data => console.log(data));
setTimeout(()=>{
    console.log('set time out arrow function');
},1000)
abul('3');