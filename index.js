let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
//console.log(leadsFromLocalStorage)
//localStorage.clear()

const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("save-tab")

const tabs = [
    {url: "https://github.com/forbiddenvelocity"}
]

tabBtn.addEventListener("click", function(){
    console.log(tabs[0])
})

if(leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

deleteBtn.addEventListener("dblclick", function(){
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
})

function render(leads){
    let listItems = " "
    for(let i=0; i<leads.length; i++){
        // ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"
        // create element
        // set text content
        // append to ul
        //const li = document.createElement("li")
        //li.textContent = myLeads[i]
        //ulEl.append(li)
        listItems += 
        `<li>
            <a target='_blank' href='${leads[i]}'>
                ${leads[i]}
            </a>
        </li>
        `
    }
    
    ulEl.innerHTML = listItems
}





