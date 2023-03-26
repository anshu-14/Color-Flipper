let body=document.body;
let btn=document.querySelector(".btn");
let hex="";
let alphabet="0123456789abcdef";
btn.addEventListener("click",e=>{
	for(let i=0;i<6;i++){
	hex+=alphabet[Math.floor(Math.random()*alphabet.length)];
	}
	body.style.background="#"+hex;
	console.log(hex);
	btn.innerText="#"+hex;
	hex="";
})


// let array=[];
// let alpha=["a","b","c","d","e","f"];
// for(let i=0;i<6;i++){
// 	no=Math.floor(Math.random()*9);
// 	array[i]=no;	
// }
// let narray=array.join("")
// console.log(array);
// console.log(narray);
// no=Math.floor(Math.random()*999999);