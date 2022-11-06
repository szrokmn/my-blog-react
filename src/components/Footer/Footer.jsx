import React from 'react'
import { FaLinkedin } from "react-icons/fa"
import { SiGithub } from "react-icons/si"
import { AiFillMediumCircle } from "react-icons/ai"

const Footer = () => {
    return (
        <div>
            <h4>SEZER ÖKMEN</h4>
            <div>
                <a href="https://www.linkedin.com/in/sezer-%C3%B6kmen/">
                    <FaLinkedin />
                </a>
                <a href="https://github.com/szrokmn">
                    <SiGithub />
                </a>
                <a href="https://medium.com/@szrokmn34">
                    <AiFillMediumCircle />
                </a>
            </div>
        </div>
    )
}

export default Footer
