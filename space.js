let url = "https://api.spacexdata.com/v3/history"

async function getSpaceXData() {

    const result = document.querySelector(".result")
    result.innerHTML = `
    <div class="loading">

    </div>`

    try {

        let response = await fetch(url)
        let data = await response.json()

        result.innerHTML = ``
        for (let i = 0; i < data.length; i++) {

            let currentData = data[i]
            result.innerHTML += `
            <div class="news">
                <h4>${currentData.title}</h4>
                <h5>${currentData.event_date_utc}</h5>
                <p>${currentData.details}</p>
                <a href="${currentData.links.article}" target="_blank">Read more</a>
            </div>`

        }

        console.log(data)

    }   catch (error) {
        console.log("some error occured")
    }

}

getSpaceXData()