

function dataPrint(fetchedData) {

    let tableEle = document.createElement("table")
    rootEle.appendChild(tableEle)

    let trEle = document.createElement("tr")
    trEle.id = "header-row"
    tableEle.appendChild(trEle)

    let SNoEle = document.createElement("th")
    SNoEle.textContent = "S.No"
    SNoEle.classList.add("each-row-data")
    trEle.appendChild(SNoEle)

    let NameEle = document.createElement("th")
    NameEle.textContent = "Name"
    trEle.appendChild(NameEle)

    let EmailEle = document.createElement("th")
    EmailEle.textContent = "Email"
    trEle.appendChild(EmailEle)

    let UsernameEle = document.createElement("th")
    UsernameEle.textContent = "Username"
    trEle.appendChild(UsernameEle)
    
    let PhoneEle = document.createElement("th")
    PhoneEle.textContent = "Phone"
    trEle.appendChild(PhoneEle)

    let WebsiteEle = document.createElement("th")
    WebsiteEle.textContent = "Website"
    trEle.appendChild(WebsiteEle)


    for(let i of fetchedData) {
        console.log(i);

        let trEle = document.createElement("tr")
        tableEle.appendChild(trEle)

        let SNoEle = document.createElement("td")
        SNoEle.textContent = i.id
        SNoEle.classList.add("each-row-data")
        trEle.appendChild(SNoEle)

        let NameEle = document.createElement("td")
        NameEle.textContent = i.name
        trEle.appendChild(NameEle)

        let EmailEle = document.createElement("td")
        EmailEle.textContent = i.email
        trEle.appendChild(EmailEle)

        let UsernameEle = document.createElement("td")
        UsernameEle.textContent = i.username
        trEle.appendChild(UsernameEle)
    
        let PhoneEle = document.createElement("td")
        PhoneEle.textContent = i.phone
        trEle.appendChild(PhoneEle)

        let WebsiteEle = document.createElement("td")
        WebsiteEle.textContent = i.website
        trEle.appendChild(WebsiteEle)

        
    }
}

let rootEle = document.getElementById("root")

function dataFetch() {
    rootEle.innerHTML = ""

    const url = "https://jsonplaceholder.typicode.com/users"

    const data = fetch(url)
    data
    .then(response => {
        return response.json()
    })
    .then(jsonData => {
        dataPrint(jsonData)
    })
}
