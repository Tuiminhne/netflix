// import React from 'react'
import "./index.scss"
import { Link } from 'react-router-dom'
import {SearchOutlined} from "@ant-design/icons"
function Header() {
    return (
        <div className="header">
        <div className="header_logo">
            <img
            src="https://seekvectors.com/files/download/Netflix-Logo-19.png"
            alt=""
            width={100}
            />
        </div>
        <nav className="header_nav">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to = "/movies">Movies</Link>
                </li>
                <li>
                <SearchOutlined />
                </li>
            </ul>
            </nav>        
         </div>
      )
}

export default Header