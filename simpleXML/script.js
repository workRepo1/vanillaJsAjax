const getBtn = document.getElementById('button');
getBtn.addEventListener('click', getTextFile);
function getTextFile() {
    console.log('button clicked');
    
    // Create XML Object
    const xml = new XMLHttpRequest();
    // Open → type, url/file, async
    // console.log(xml);
    xml.open('GET', 'simple.txt', true);

     console.log('READYSTATE:', xml.readyState) // READYSTATE: 1

    //  Optional - used for loaders
    xml.onprogress = function () {
        console.log('READYSTATE:', xml.readyState) // READYSTATE: 3
    }

    xml.onload = function () {
        console.log('READYSTATE:', xml.readyState) // READYSTATE: 4
        if(this.status ===200){
           // console.log((this.responseText));
           const output = document.createElement('div');
           const body = document.body;
           body.appendChild(output);
           output.innerText = this.responseText;
        } else if (this.status === 404){
           const output = document.createElement('div');
           const body = document.body;
           body.appendChild(output);
           output.innerText = 'File not found';
        }
    }

    xml.onerror = function () {
        console.log('Request Error ...')
    }

    // xml.onreadystatechange = function () {   // the same thing as onload
    //     console.log('READYSTATE:', xml.readyState) // READYSTATE:2/n READYSTATE: 3/n READYSTATE: 4
    //     if(this.readyState === 4 && this.status === 200){
    //         // console.log(this.responseText)
    //     }
    // }
    // Send request
    xml.send();
}

// readyState Values
// 0: request not initialized
// 1: server connection established
// 2: request received
// 3: processing request
// 3: request finished and response is ready

// HTTP Status
// 200: "OK"
// 403: "Forbidden"
// 404: "Not Found"