let url = "https://v2.jokeapi.dev/joke/Any"

async function getJoke () {

    const result = document.querySelector(".result")
    result.innerHTML = `
    <div class="loading">

    </div>`

    try {
        let response = await fetch(url)
        let data = await response.json()

        console.log(data)

        result.innerHTML = `
        <div class="joke">

            <h4>${data.setup}</h4>
            <h4>&downdownarrows;</h4>
            <h4>${data.delivery}</h4>

        </div>`

    }   catch (error) {
        console.log("some error occured")
    }

}

getJoke()

const randomJoke = document.querySelector("#randomJoke")
randomJoke.addEventListener("click", async () => {
    getJoke()
})