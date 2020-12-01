import React from "react"
import Header from "../components/header"
import Menu from "../components/menu"
import { Link } from "gatsby"

export default function Committee() {
  return (
    <div>
      <Header />
      <Menu />
      <div className="content">
        <table>
          <tr><td>General chairs:</td><td>Paolo Burelli</td><td>IT University Of Copenhagen</td></tr>
          <tr><td></td><td>Miguel Sicart</td><td>IT University Of Copenhagen</td></tr>
          <tr><td>Program chairs:</td><td>Rilla Khaled</td><td>Concordia University</td></tr>
          <tr><td></td><td>Fotis Liarokapis</td><td>Masaryk University</td></tr>
          <tr><td></td><td>Julian Togelius</td><td>New York University</td></tr>
          <tr></tr>
          <tr><td>Local chairs:</td><td>Djodrje Grbic</td><td>IT University Of Copenhagen</td></tr>
          <tr><td></td><td>Hanna Wirman</td><td>IT University Of Copenhagen</td></tr>
          <tr></tr>
          <tr><td>Competition chairs:</td><td>Ruck Thawonmas</td><td>Ritsumeikan University</td></tr>
          <tr><td></td><td>Antonios Liapis</td><td>University Of Malta</td></tr>
          <tr></tr>
          <tr><td>Keynote chairs:</td><td>Mike Cook</td><td>Queen Mary University Of London</td></tr>
          <tr><td></td><td>Georgios Yannakakis</td><td>University of Malta</td></tr>
          <tr></tr>
          <tr><td>Tutorial chairs:</td><td>Jesper Juul</td><td>The Royal Danish Academy of Fine Arts</td></tr>
          <tr><td></td><td>Sebastian Risi</td><td>IT University Of Copenhagen</td></tr>
          <tr></tr>
          <tr><td>Special session chairs:</td><td>Simon Lucas</td><td>Queen Mary University Of London</td></tr>
          <tr><td></td><td>Yun-Gyung Cheong</td><td>Sungkyunkwan University</td></tr>
          <tr></tr>
          <tr><td>Financial chair:</td><td>Daniel Ashlock</td><td>University of Guelph</td></tr>
          <tr></tr>
          <tr><td>Proceedings chair:</td><td>Mike Preuss</td><td>Leiden University</td></tr>
          <tr></tr>
          <tr><td>Industry chairs:</td><td>Martin Pichlmair</td><td>IT University Of Copenhagen</td></tr>
          <tr><td></td><td>Na'Tosha Bard</td><td>KMD</td></tr>
          <tr></tr>
          <tr><td>Publicity chairs:</td><td>Mads Johansen Lassen</td><td>IT University Of Copenhagen</td></tr>
          <tr><td></td><td>Miruna Vozaru</td><td>IT University Of Copenhagen</td></tr>
        </table>
        <p>For more information, you can check us on Twitter <Link to="https://twitter.com/ieee_cog">@ieee_cog</Link> or contact <Link to="mailto:pabu@itu.dk">Paolo Burelli</Link> and <Link to="mailto:miguel@itu.dk">Miguel Sicart</Link></p>
      </div>
    </div>
  )
}