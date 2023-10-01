function showAlert(){
    alert(" button clicked")
}

// const a = 20;

function changeName()
{
    document.getElementById("button").innerHTML = "hello";
}

// onchange
// onclick
// onmouseover
// onmouseout
// onkeydown


// function changeHtmlText()
// {
//     alert("function called");
// }

// const runloop = (num)=>{
//     for(let i=0; i<num; i++)
//     {
//         console.log(i);
//     }
// }

// runloop(13)
// function multiply(num){
// let s = "";
// for(let i =1; i<=10; i++)
// {
// //    s=s+"10*"+i+"="+10*i+"<br>";
//    s = s + `${num}* ${num} = ${num*i} <br>`
// }
// document.getElementById("multiplication").innerHTML = s;
// }



// let data = [1,2,3,4,5,6,7,8,9,10];

// let newData = data.map((radius)=>{return 2*radius});


// let newData = data.filter((radius)=>{return !(radius%2)});

// let sum = data.reduce((currentsum,currentval)=>{
//     return currentsum+currentval;
// })
// console.log(sum);


async function getdata(url)
{
    try{
        let data = await fetch(url);
        data = await data.json();
         
        let s="";
        for(let i=0; i<data.products.length; i++)
        {
           s+= ` <tr> <td> ${data.products[i].title} </td>  <td>${data.products[i].description} </td> <td> ${data.products[i].price}</td> </tr>`

          
        document.getElementById("items").innerHTML = s;   
        console.log(s);
        }
        
        }
    catch(error)
    {
        console.log(error);
    }
}

getdata("https://dummyjson.com/products");
