import { checkURL } from './checkURL.js'

const postdata = async (url = '/add', data = {}) => {

    const res = await fetch(url, {

        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    try {
        const newdata = await res.json();
        console.log(newdata)
        console.log('zainab')
        return newdata;


    }
    catch (error) {
        console.log("error", error)

    };
}

function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    const urlText = document.getElementById('urlText').value
    console.log('hello1',urlText)


    if (checkURL(urlText)) {
        console.log(urlText)
        console.log('here')

        postdata('http://127.0.0.1:8082/add', { urlText: urlText })

            .then(data => {
                document.getElementById("irony").innerHTML = data.irony
                document.getElementById("agreement").innerHTML = data.agreement
                document.getElementById("subjectivity").innerHTML = data.subjectivity;
                document.getElementById("confidence").innerHTML = data.confidence;

            })
    }
    else {
        alert('not vaild url')
    }

}
export { handleSubmit }
