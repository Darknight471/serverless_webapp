// api url 
const api_url = "https://3mmebpvpc0.execute-api.us-east-1.amazonaws.com/dev"; 

// Defining async function 
async function getapi(url) {
    console.log(url);

	// Storing response 
	let response = await fetch(url,); 
	
	// Storing data in form of JSON 
    // console.log(response.body.json());

    var data = await response.json();
    
    console.log(data); 
	if (response) { 
		hideloader(); 
	} 
	show(data); 
} 
// Calling that async function 
getapi(api_url); 

// Function to hide the loader 
function hideloader() { 
	document.getElementById('loading').style.display = 'none'; 
} 
// Function to define innerHTML for HTML table 
function show(data) { 
    console.log(data)
	let tab = 
		`<tr> 
		<th>Name</th> 
		<th>Time</th> 
		</tr>`; 
	
	// Loop to access all rows 
	for (let r of data.body) { 
		tab += `<tr> 
	<td>${r.ID} </td> 
	<td>${r.LatestGreetingTime}</td>		 
</tr>`; 
	} 
	// Setting innerHTML as tab variable 
	document.getElementById("employees").innerHTML = tab; 
} 
