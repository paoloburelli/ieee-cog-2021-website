import React from "react"
import headerStyles from "../styles/header.module.css"

export default function Header() {
  return (
    <div className={headerStyles.title}>
      <div className={headerStyles.underConstruction}>Site Under Construction</div>
      <h1>2021 IEEE Conference on Games</h1>
      <p>IT University Of Copenhagen - August 17-20th</p>
    </div>
  )
}