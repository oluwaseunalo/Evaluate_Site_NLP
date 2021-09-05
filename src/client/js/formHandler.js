function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formInput = document.getElementById('name').value;
    const data = {formInput};
    console.log("::: Form Submitted :::")
    
    if (Client.checkForName(formInput)) {
        fetch('http://localhost:8084/input', {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(function (res) {
                document.getElementById('result__model').innerHTML = 'Model: ' + res.model;
                document.getElementById('result__score').innerHTML = 'Score: ' + res.score_tag;
                document.getElementById('result__agreement').innerHTML = 'Agreement: ' + res.agreement;
                document.getElementById('result__subjective').innerHTML = 'Subjectivity: ' + res.subjectivity;
                document.getElementById('result__confidence').innerHTML = 'Confidence: ' + res.confidence;
                document.getElementById('result__irony').innerHTML = 'Irony: ' + res.irony;
            })
    } else {
        alert ('Please type in a valid website')
    };
}

export { handleSubmit }
    


