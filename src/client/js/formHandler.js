function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formInput = document.getElementById('name').value
    console.log("::: Form Submitted :::")
    
    if (Client.checkForName(formInput)) {
        fetch('/input', {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(function (res) {
                document.getElementById('model').innerHTML = 'Model: ' + res.model;
                document.getElementById('score_tag').innerHTML = 'Score: ' + res.score_tag;
                document.getElementById('agreement').innerHTML = 'Agreement: ' + res.agreement;
                document.getElementById('subjectivity').innerHTML = 'Subjectivity: ' + res.subjectivity;
                document.getElementById('confidence').innerHTML = 'Confidence: ' + res.confidence;
                document.getElementById('irony').innerHTML = 'Irony: ' + res.irony;
            })
    } else {
        alert ('Please type in a valid website')
    };
}

export { handleSubmit }
    


