import React from "react"
import ReactDOM from "react-dom"
import mainContentImg from "../images/Mobile-Phone.svg"

export default function MainComponents(){
    return(
        <div>
            <section className="main-content">
                <div>
                    <h1>Jade Bañares</h1>
                    <p>I have a passion in Web Development</p>
                    <a href=""><i className="fa"></i>GitHub</a>
                    <a href=""><i className="fa"></i>LinkedIn</a>
                    <a href=""><i className="fa"></i>Resume</a>
                </div>
                <div>
                    <h2>Reasons why I love REACT!</h2>
                    <img src={mainContentImg} />
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