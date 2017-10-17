// run this code after the document window has loaded
window.onload = function() {

// initialize variables
var current,
    screen,
    elem,
    output,
    limit,
    zero,
    period,
    operator;
    
    // set 'screen' to #result
    screen = document.getElementById("result");
    
    // 'elem' is all elements of class num
    elem = document.querySelectorAll(".num");
    
    // length of elem array
    var len = elem.length;
    
    // add click event listener to each number
    // when clicked, add the number to the screen
    for(var i = 0; i < len; i++ ) {
        
        elem[i].addEventListener("click",function() {
                  
            num = this.value;

            output = screen.innerHTML +=num;

            limit = output.length;

            if(limit > 16 ) {

                throw "Sorry no more input is allowed";
                alert("Sorry no more input is allowed");
            }
       
        },false);
        
      }

    // add click event listener to element of class 'zero'
    // when clicked, 
      //if screen is empty, set screen to 0
      //if screen has output, add zero to output
    document.querySelector(".zero").addEventListener("click",function() {
        
        zero = this.value;
        
        if(screen.innerHTML === "") {
            
           output = screen.innerHTML = zero;  
        }
        
        else if(screen.innerHTML === output) {
            
         output = screen.innerHTML +=zero;
            
        }
          
    },false);
    
    // add click event listener to 'period'
    // IF screen is empty, set screen to "0."
    // IF screen has output, add period to output
    document.querySelector(".period").addEventListener("click",function() {
        
        period = this.value;
        
        if(screen.innerHTML === "") {
            
         output = screen.innerHTML = screen.innerHTML.concat("0.");
            
         }
    
        else if(screen.innerHTML === output) {
        
          screen.innerHTML = screen.innerHTML.concat(".");
            
        }
        
    },false);
    
    // add click event listener to EQUALS button
    // IF screen has output, EVAL() the string AKA Calculate
    document.querySelector("#eqn-bg").addEventListener("click",function() {
        
      if(screen.innerHTML === output) {
          
        screen.innerHTML = eval(output);
      }
        
      else {
            screen.innerHTML = "";
      }
          
    },false);

// add click event listener to CLEAR button
// emptys screen
 document.querySelector("#clear").addEventListener("click",function() {
        
        screen.innerHTML = "";
        
    },false);
    
     // add click event to each operator button
     // OnClic, IF there is output, add operator to screen
     var elem1 = document.querySelectorAll(".operator");
    
     var len1 = elem1.length;
    
      for(var i = 0; i < len1; i++ ) {
        
        elem1[i].addEventListener("click",function() {
         
        operator = this.value;
         
         if(screen.innerHTML === "") {
            
            screen.innerHTML = screen.innerHTML.concat("");
            
        }
        
        else if(output) {
        
            screen.innerHTML = output.concat(operator);
            
        }
           
    },false);
          
      }   
}