import "./Main.css"

function del(e){
    e.target.parentElement.remove()
}

export default function Main(){
    return(
        <div id="m1">
            <span className="a2">
                <h2 className="a3">Tidy room</h2>
                <button className="a4" onClick={del}>delete</button>
            </span>
            <span className="a2">
                <h2 className="a3">Go to gym</h2>
                <button className="a4" onClick={del}>delete</button>
            </span>
        </div>
    )
}