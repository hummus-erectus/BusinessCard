import React from "react"
import ProfilePic from "../assets/profile.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLinkedin} from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

export default function Info() {
    return (
        <header className="info--container">
            <img className ="profile-pic" src={ProfilePic} alt="Profile photo of Robert Grayson"/>
            <h1>Robert Grayson</h1>
            <h4>Frontend Developer</h4>
            <a href="https://github.com/hummus-erectus">github.com/hummus-erectus</a>
            <div className="info--buttons">
                <a className="email-btn" href="mailto:robert.samuel.grayson@gmail.com"><FontAwesomeIcon icon={faEnvelope}/><span>Email</span></a>
                <a className="linkedin-btn" href="https://www.linkedin.com/in/rob-grayson/"><FontAwesomeIcon icon={faLinkedin}/><span>LinkedIn</span></a>
            </div>
        </header>
    )
}