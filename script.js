/* form handling scripts */

let submit_button = document.querySelector('#submit-btn');

document.getElementById("submit-btn").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent form submission for now
        // Show loading spinner
      document.getElementById('loading-spinner').style.display = 'block';
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
                   const poemText = result.response.response;
                   // Extracting title using regular expression
                    var titleMatch = poemText.match(/Title: "(.*?)"/);
                    var title = titleMatch ? titleMatch[1] : null;
                     document.querySelector('h1').textContent=title;
                    // Extracting poem content
                    var poemContent = poemText.replace(titleMatch[0], '').trim();
                    document.querySelector('#poem-text').textContent = poemContent;

                    getImage(data.prompt);
                } catch (error) {
                  console.error("Error:", error);
                }
              }

           // Make a GET request to the API endpoint
    // Make a GET request to the API endpoint
    function getImage(img_query){
    var img_gen_query = {
      prompt:`"${img_query}"`,
    };
    fetch('https://poem-image-gen.aadarshkannan111.workers.dev/',{
        method: "POST",
        body: JSON.stringify(img_gen_query),
    })
      .then(response => {
        // Check if the response is successful
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        // Parse the response as binary data (blob)
        return response.blob();
      })
      .then(blob => {
        // Create a URL for the blob
        const imageUrl = URL.createObjectURL(blob);

        // Set the src attribute of the image element to display the image
        const img = document.getElementById('poem-img');
        img.src = imageUrl;
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
    }
