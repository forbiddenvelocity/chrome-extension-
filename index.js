let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
//console.log(leadsFromLocalStorage)
//localStorage.clear()

const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("save-tab")



tabBtn.addEventListener("click", function(){
    chrome.tabs.query({active: true, currenWindow: true}, function() {
        var activeTab = tabs[0];
        var activeTabId = activeTab.id;
    
    });

    myLeads.push(tabs[0].url)
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
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





