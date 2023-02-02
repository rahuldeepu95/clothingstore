fetch("https://fakestoreapi.com/products").then((data)=>{
    return data.json();
}).then((completeData)=>{
    let data1="";
    completeData.map((values)=>{
        data1+=`
         <div class="card mt-3" style="width: 25rem;">
            <img src=${values.image} class="card-img-top ms-5 w-75 p-3" alt="...">
            <div class="card-body">
                <h4>${values.title}</h4>
              <p class="card-text">${values.description}</p>
              <p>${values.category}</p>
              <p>USD ${values.price}</p>
            </div>
          </div> `
    })
    document.getElementById("result").innerHTML=data1;
})









// function search(){
//     num=tag1
//     fetch("https://fakestoreapi.com/products/").then(data=>data.json()).then(data=>displayData(data))
// }

// function displayData(productDetails){
// head=productDetails.title
// price=productDetails.price
// descr=productDetails.description
// cat=productDetails.category
// imag=productDetails.image
// rating=productDetails.rating.rate
// result.innerHTML=`<div class="card mt-3" style="width: 25rem;">
// <img src="${imag}" class="card-img-top p-2" alt="...">
//             <div class="card-body">
//                 <h4>${head}</h4>
//               <p class="card-text">${descr}</p>
//               <p>${cat}</p>
//               <p>${price}</p>
//             </div>
//           </div>`
// }