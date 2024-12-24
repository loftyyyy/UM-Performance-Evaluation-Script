// ==UserScript==
// @name         UM Performance Evaluation Script [auto click]
// @namespace    http://tampermonkey.net/
// @version      2024-10-27
// @description  try to take over the world!
// @author       @Loftyyyy
// @match        https://mis.umin.edu.ph/oPEAS/ets/ug/*/*/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';


    // Your code here...





    const preferredValue = prompt("Please enter your preferred value [1,2,3,4,5]:");
    const amountOfQuestions = prompt("Enter all of the number of questions: ");

    // Check if the user entered a value
    if (preferredValue) {
         let preferredClicked = false;

        for (let i = 1; i <= amountOfQuestions; i++) {
            const radioButtons = document.querySelectorAll(`input[name="rating_${i}"]`);

            if(radioButtons.length > 0){
                radioButtons.forEach((radioButton) =>{
                    if(radioButton.value === preferredValue){
                        radioButton.click();
                        preferredClicked = true;
                    }
                });
            }else{
                alert(`No radio button found for question "${i}"`);
            }



        }

        if (!preferredClicked) {
            alert(`No radio button found with the value "${preferredValue}".`);
        }



    } else {
        alert("No value entered. Please try again.");
    }

})();
