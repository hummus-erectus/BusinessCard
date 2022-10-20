import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSquareTwitter} from "@fortawesome/free-brands-svg-icons"
import {faSquareFacebook} from "@fortawesome/free-brands-svg-icons"
import {faSquareInstagram} from "@fortawesome/free-brands-svg-icons"
import {faSquareGithub} from "@fortawesome/free-brands-svg-icons"

export default function Interests() {
    return (
        <footer className="footer--container">
            <a href="https://twitter.com/Cheesecakebobby"><FontAwesomeIcon icon={faSquareTwitter}/></a><a href="https://www.facebook.com/punninglinguist"><FontAwesomeIcon icon={faSquareFacebook}/></a><a href="https://www.instagram.com/humus_erectus/"><FontAwesomeIcon icon={faSquareInstagram}/></a><a href="https://github.com/hummus-erectus"><FontAwesomeIcon icon={faSquareGithub}/></a>
        </footer>
    )
}