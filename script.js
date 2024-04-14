/* form handling scripts */

let submit_button = document.querySelector('#submit-btn');

document.getElementById("submit-btn").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent form submission for now
    
    // Get the form elements
    var promptInput = document.querySelector("input[type='text']");
    var lengthSelect = document.querySelector("select[name='length of the poem']");
    var toneSelect = document.querySelector("select[name='Tone of poem']");
    var styleSelect = document.querySelector("select[name='Poem style or form']");
    
    // Check if any field is empty
    if (promptInput.value.trim() === "" || lengthSelect.value === "" || toneSelect.value === "" || styleSelect.value === "") {
        alert("Please fill out all the form fields!");
        return; // Exit the function if any field is empty
    }
    
    // If all fields are filled, create the request body
    var data = {
        prompt: promptInput.value.trim(),
        length: lengthSelect.value,
        tone: toneSelect.value,
        style: styleSelect.value
    };
    getJSON(data);
    
});


            async function getJSON(data) {
                try {
                  const response = await fetch("https://test-ai.aadarshkannan111.workers.dev/", {
                    method: "POST",
                    body: JSON.stringify(data),
                  });
              
                  const result = await response.json();
                  console.log("Success:", result);
                } catch (error) {
                  console.error("Error:", error);
                }
              }
              
              
