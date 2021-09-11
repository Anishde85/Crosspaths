console.log("Hello")
function tran()
{
    axios.post('https://translate-meta.herokuapp.com/translate', {
        text: document.getElementById('text').value,
        lan: document.getElementById('lang').value,
    })
    .then(function (response) {
        document.getElementById('output').value = response['data']['output'];
        
    })
    .catch(err => {
        window.alert("OOPS ! Some Error Occured , Please Check Spelling Of The Language !")
    })
}