var carry=JSON.parse(localStorage.getItem("thecart"))||[]
// var money=localStorage.getItem("money")
console.log(carry)
function display(carry){
    // var cartarray=[]
    // var count=0
   
    carry.forEach(function(elem,i){
       
        let thediv= document.createElement("div")
      let div1= document.createElement("div")
      let div2=document.createElement("div")
      let img=document.createElement("img")
      img.src=elem.strCategoryThumb
      let id=document.createElement("p")
      id.innerHTML=elem.idCategory
      let price=document.createElement("p")
      var money=Math.round(Math.random()*1000)
       price.innerHTML=`Price:${money}`
       
      var button=document.createElement("button")
      button.innerHTML="removeFromcart"
      let div3= document.createElement("div")

      let cat=document.createElement("p")
      cat.innerHTML=elem.strCategory
      let description=document.createElement("p")
      description.innerHTML=elem.strCategoryDescription
      
      div1.setAttribute("id","div1")
      div2.setAttribute("id","div2")
      thediv.setAttribute("id","thediv")
  div3.append(price,button)

      div1.append(img)
      div2.append(id,div3,description)
      thediv.append(div1,div2)
      document.getElementById("cartitem").append(thediv)

    //   adding cart function to button
    button.addEventListener("click",function(){
        removeit(i)
        
        document.getElementById("cartcount").innerHTML=`Numbers of Item in your cart is ${count}`
      localStorage.setItem("thecart",JSON.stringify(cartarray))
    })


    })
 
function removeit(){
    carry.splice(index,1)
    display(carry)
}
} 




// console.log(money)
// for(let j=0;j<pricearray.length;j++)
// {
//    total=pricearray.values[j]
// console.log(total)
// }

// document.getElementById("money").innerHTML=`Total amount is ${total}`
display(carry)
var total=0
var paisa=localStorage.getItem("sum")
paisaarray=paisa.split(",").map(Number)
console.log(paisaarray)
for(let j=0;j<paisaarray.length;j++)
{
   total=total+paisaarray[j]
}
document.getElementById("money").innerHTML=`Total amount is RS ${total}`
document.getElementById("checkout").addEventListener("click",function(){
    window.location.href="checkout.html"
})