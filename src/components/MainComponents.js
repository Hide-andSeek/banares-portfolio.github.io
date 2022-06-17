import React from "react"
import ReactDOM from "react-dom"


export default function MainComponents(){
    return(
        <div>
            <section className="main-content">
                <div>
                    <h1>I am Jade Bañares</h1>
                    <p>I have a passion in Web Development</p>
                </div>
                <div>
                    
                    <h2>Reasons why I love REACT!</h2>
                    <ol>
                        <li>It is maintainable</li>
                        <li>It is composable</li>
                        <li>Easy to follow</li>
                        <li>Organize and Clean</li>
                    </ol>
                </div>
            </section>
        </div>
    )
}

ReactDOM.render(<MainComponents />, document.getElementById("root"))