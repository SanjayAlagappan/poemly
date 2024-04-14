/* form handling scripts */

let submit_button = document.querySelector('#submit-btn');
console.log(submit_button);

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
    var requestBody = {
        prompt: promptInput.value.trim(),
        length: lengthSelect.value,
        tone: toneSelect.value,
        style: styleSelect.value
    };
    
    // Fetch request to the endpoint
    fetch('https://test-ai.aadarshkannan111.workers.dev/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log('Response from server:', data);
        // Handle the response data as needed
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
});


            async function getJSON(data) {
                try {
                  const response = await fetch("https://test-ai.aadarshkannan111.workers.dev/", {
                    method: "POST",
                    mode: "cors",
                    credentials: "same-origin",
                    headers: {
                      "Content-Type": "application/json",
                      "Access-Control-Allow-Origin":"*",
                    },
                    body: JSON.stringify(data),
                  });
              
                  const result = await response.json();
                  console.log("Success:", result);
                } catch (error) {
                  console.error("Error:", error);
                }
              }
              
              const data = { prompt: "college love" };
              getJSON(data);






/* explore page scripts */
// document.addEventListener('DOMContentLoaded', function () {
//     const mainElement = document.querySelector('#poem-gallery-wrapper');
//     const loader = document.createElement('div');
//     loader.classList.add('loader');
//     mainElement.appendChild(loader);
//     setTimeout(()=>{

//         // Fetch the data from the API
//         fetch('https://mocki.io/v1/57255e43-3de4-40ce-a8ff-75c02e8c0a5c')
//             .then(response => response.json())
//             .then(data => {
//                 // Remove loader once data is fetched
//                 mainElement.removeChild(loader);
    
//                 // Loop through each poem in the API response
//                 data.poems.forEach(poem => {
//                     // Create a card element for each poem
//                     const card = document.createElement('div');
//                     card.classList.add('card');
    
//                     // Create title element
//                     const titleElement = document.createElement('h2');
//                     titleElement.textContent = poem.title;
//                     card.appendChild(titleElement);
    
//                     // Create text element
//                     const textElement = document.createElement('p');
//                     textElement.textContent = poem.text;
//                     card.appendChild(textElement);
    
//                     // Append the card to the main element
//                     mainElement.appendChild(card);
//                 });
//             })
//             .catch(error => {
//                 // Remove loader if there's an error
//                 mainElement.removeChild(loader);
//                 console.error('Error fetching data:', error);
//             });

//     },1000)
   
// });
