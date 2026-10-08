import "./Header.css"

function del(e){
    e.target.parentElement.remove()
}

function add(){
    let val = document.getElementById("a1")

    if(val.value.trim() === ""){
        return ;
    }

    let h2s = document.createElement("h2")
    h2s.innerText = val.value
    h2s.className = "a3"

    let check = Array.from(document.querySelectorAll("h2")).some(element => element.innerText === val.value.trim())
    if(check){
        return ;
    }

    let buttons = document.createElement("button")
    buttons.innerText = "delete"
    buttons.className = "a4"
    buttons.addEventListener("click", del)

    let spans = document.createElement("span")
    spans.className = "a2"

    spans.appendChild(h2s)
    spans.appendChild(buttons)

    document.querySelector("#m1").appendChild(spans)

    val.value = ""
}

export default function Header(){
    return(
        <div>
            <h1 id="text">
                To Do List
            </h1>
            <div id="ko">
                <input type="text" placeholder="Type your work..." id="a1" onKeyDown={(e)=>{
                    if(e.key === "enter"){
                        add()
                    }
                }}/>
                <button id="j1" onClick={add}>+</button>
            </div>
        </div>
    )
}

