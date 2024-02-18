const btn=document.querySelectorAll("button")

btn.forEach(function(button,index){
 button.addEventListener("click",function(event){
       var btnitem=event.target
       var product=btnitem.parentElement
       var productimg=product.querySelector("img").src
       var productname=product.querySelector("H5").innerText
       var productprice=product.querySelector("span").innerText
       alert("them vao gio hang thanh cong")
       addcart(productprice,productimg,productname)
 })
})

function addcart(productprice,productimg,productname){
    var addtr=document.createElement("tr")
   
    var trconten=' <tr><td><img src="'+productimg+'" alt="" style="width: 80px;"></td> <td><p>'+productname+'</p></td><td><span>'+productprice+'</span></td> <td><input type="number" name="" id="" value="1" style="width:30px;"></td><td><span class="cartdelete">xóa</span></td></tr>'
    addtr.innerHTML=trconten
    var addtable=document.querySelector("tbody")
    addtable.append(addtr)
    carttotal()
    deletecart()
}
/*--------------total price----------- */
function carttotal(){
    var cartItem=document.querySelectorAll("tbody tr ")
    var sum=0
    for(var i=0 ;i<cartItem.length;i++)
    {
        var inputvalue=cartItem[i].querySelector("input").value
        var producePrice=cartItem[i].querySelector("span").innerHTML
        result=inputvalue*producePrice*1000
        sum=sum + result
        result2=sum.toLocaleString('de-DE')
    }
    var totalresult=document.querySelector(".price-total span")
    totalresult.innerHTML=result2
    
}
/*----------------delete----------*/
function deletecart(){
    var cartItem=document.querySelectorAll("tbody tr ")
    for(var i=0;i<cartItem.length;i++)
    {
        var productdelete=document.querySelectorAll(".cartdelete")
        productdelete[i].addEventListener("click",function(event){
            var cartdelete1=event.target
            var cartitem1=cartdelete1.parentElement.parentElement
           cartitem1.remove()
        })
       
    }
}

const cartbtn=document.querySelector(".ti-close")
const cartshow=document.querySelector(".ti-shopping-cart")
cartshow.addEventListener("click",function(){
    document.querySelector(".cart").style.right="0"
})
cartbtn.addEventListener("click",function(){
    document.querySelector(".cart").style.right="-100%"
})
