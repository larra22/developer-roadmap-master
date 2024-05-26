let availableKeywords = ['Hola', 'nose', 'quetal0']

const resultsBox = document.querySelector('.results-box')
const inputBox = document.getElementById('input-box')

inputBox.onkeyup = function() {
    let result = []
    let input = inputBox.value
    if (input.length > 0) {
        result = availableKeywords.filter(keyword => {

            return keyword.toLowerCase().includes(input.toLowerCase())
        })

    }
    display(result)
}


function display(result){
    const content = result.map((item) => {
        return "<li>" + item + "</li>";
})
console.log(content)
resultsBox.innerHTML= "<ul>"+ content+"</ul>"
}