var size_of_pizza = "";
var every_topping_array = [];
var display_toppings = [];

function view_order(){
    size_of_pizza = document.getElementById("input_size").value;
    for(var i = 1 ; i < 6 ; i++){
        var input_topping = document.getElementById("input_topping_"+i).value;
        every_topping_array.push(input_topping);
        console.log(every_topping_array);
    }

    display_toppings = every_topping_array.join(" and ");
    document.getElementById("ur_order").innerHTML = "You ordered a "+ size_of_pizza +" pizza with " + display_toppings + ".";

}


