import React from "react"
import { Link } from "gatsby"
import menuStyles from "../styles/menu.module.css"

export default function Header(props) {
  return (
    <div className={menuStyles.menuBar}>
      <ul>
        <li><Link to="/" activeClassName={menuStyles.active}>Home</Link></li>
        <li><Link to="/call-for-proposals" activeClassName={menuStyles.active}>Call For Proposals</Link></li>
        <li><Link to="/call-for-papers" activeClassName={menuStyles.active}>Call For Papers and Presentations</Link></li>
        <li><Link to="/important-dates" activeClassName={menuStyles.active}>Important Dates</Link></li>
        <li><Link to="/committee" activeClassName={menuStyles.active}>Organising Committee</Link></li>
      </ul>
    </div>
  )
}