//alert("hello from data-processing");
 
const queryString = window.location.search;
console.log(queryString);
 
function toTitleCase(str) {
  let titleCased = str.toLowerCase().split(' ');
  titleCased = titleCased.map(function (word) {
    return (word.charAt(0).toUpperCase() + word.slice(1));
  }).join(' ');
  
  return titleCased;
}
 
if(queryString.length > 0){
   const urlParams = new URLSearchParams(queryString);
 
   let myData = "";
   let myCart = "";
   let myTotal = 0;//will store total cost
   myCart += "<h3> Cart Contents</h3>";
 
    /*
      Cart Contents
      Widget: $3.99
      Sprocket: $5.99
      Thingy: $1.99
      Total: $11.97
    */
 
    
 
   urlParams.forEach(function(value, key) {
 
    if(key == "Cart"){//cart
      //alert("Cart Item: " + value);
 
        switch(value){
          case "Widget":
            myCart += "<p>Widget: $3.99</p><br>";
            myTotal += 3.99;
          break;
 
          case "Sprocket":
            myCart += "<p>Sprocket: $5.99</p><br>";
            myTotal += 5.99;
          break;
 
          case "Thingy":
            myCart += "<p>Thingy: $1.99</p><br>";
            myTotal += 1.99;
          break;
        }
 
 
 
    }else{//shipping label
      //swaps underscores for space
      key = key.split("_").join(" ");
      if((key == "FirstName") || (key == "LastName") || (key == "City") || (key == "Address")) {
        myData += `<p>${key}: ${toTitleCase(value)}</p>`;
      } else {
        myData += `<p>${key}: ${value}</p>`;
      }
    }
 
 
 
    //console.log(key, value);
  });
 
  myCart += "Total: " + myTotal + '<br>';
 
 
  //we want the cart data first, then the shipping
  myData = myCart + myData;
 
  myData += '<p><a href="index.html">CLEAR</a></p>'
   document.getElementById("output").innerHTML = myData; 
}