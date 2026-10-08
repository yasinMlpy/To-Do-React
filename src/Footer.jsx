import "./Footer.css"

function checkWork(){
    let inp1 = document.querySelector("#a5")

    document.querySelectorAll("h2").forEach(e=>{
        if(inp1.value === "" ||e.innerText.toLowerCase().includes(inp1.value)){
            e.parentElement.style.display = "flex"
        }else{
            e.parentElement.style.display = "none"
        }
    })
}

export default function Footer(){
    return(
        <div>
            <input type="text" id="a5" placeholder="search your work" onChange={checkWork}/>
        </div>
    )
}