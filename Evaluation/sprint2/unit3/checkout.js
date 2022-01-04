document.getElementById("form").addEventListener("submit",function(event){
   event.preventDefault()
    setTimeout(time1,3000 );
    setTimeout(time2,8000 )
    setTimeout(time3,12000)
    setTimeout(time4,13000)
    })

    function time1()
    {
        alert("Your order is accepted")
    }
    function time2()
    {
        alert(" Your order is being cooked")
    }
    function time3()
    {
        alert("Order out for delivery")
    }
    function time4()
    {
        alert("Deliverd")
    }