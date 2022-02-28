const advice = document.querySelector('#advice')
const adviceId = document.querySelector('#header')
const button = document.querySelector('#button')

const generate = async () => {
    try{
        const res = await axios.get('https://advice-generator1.herokuapp.com/api')
        adviceId.innerHTML = `ADVICE #${res.data.id}`
        advice.innerHTML = `"${res.data.content}"`
    }catch(e){
        console.log('error',e)
    }
}

button.addEventListener('click', () => {
    generate();
})
