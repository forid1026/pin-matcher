
       document.getElementById("generateBtn").addEventListener('click',function(){
           let pinInput = document.getElementById("pinInput").innerText;
           let pinInputNumber = Math.floor(1000 + Math.random()*9000);
           console.log(pinInputNumber);
           document.getElementById("pinInput").value = pinInputNumber;
           document.getElementById('numberInput').value = "";
       })


       function inputNumbers(numbers){
           document.getElementById("numberInput").value += numbers;
       }

       function clearNumber(){
           document.getElementById("numberInput").value = "";
           document.getElementById("validInput").style.display= "none";
           document.getElementById("invalidInput").style.display= "none";

       }
       function backButton(){
           var exp = document.getElementById("numberInput").value;
           document.getElementById("numberInput").value = exp.slice(0, - 1);
            
       }
       
       document.getElementById("submit").addEventListener('click', function(){
           
           const pinInput = document.getElementById('pinInput').value;
           const numberInput = document.getElementById("numberInput").value;
           if( pinInput == numberInput){
               console.log('match pin');
               document.getElementById("validInput").style.display = "block";
           }
           else if(numberInput == ""){
               alert("please input a number");
           }
           
        //    else if(pinInput != numberInput){
        //        console.log('please try again');
        //        document.getElementById("invalidInput").style.display = "block";
        //    }
          
           else{
               document.getElementById("invalidInput").style.display = "block";
               document.getElementById("numberInput").value = "";
               document.getElementById("validInput").style.display= "none";

           }
           let count = 3;
           if(count > 0){
               count --;
               tryLeft.innerHTML=`${count} try left` ;
               if(count===0){
                pinInput.value="";
                count=3 ;
                }
           }
       })