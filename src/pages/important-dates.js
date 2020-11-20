import React from "react"
import Header from "../components/header"
import Menu from "../components/menu"

export default function Home() {
  return (
    <div>
      <Header />
      <Menu />
      <div className="content">
        <table>
          <tr><td>15/01/2021</td><td>Tutorial/special session/competition proposal deadline</td></tr>
          <tr><td>09/04/2021</td><td>Full paper submission deadline</td></tr>
          <tr><td>17/05/2021</td><td>Notification of acceptance</td></tr>
          <tr><td>28/05/2021</td><td>Abstracts and auxiliary tracks paper submission deadline</td></tr>
          <tr><td>18/06/2021</td><td>Camera ready copy deadline</td></tr>
          <tr><td>18/06/2021</td><td>Early bird and author registration deadline</td></tr>
          <tr><td>17/08/2021</td><td>Conference starts!</td></tr>
        </table>
      </div>
    </div>
  )
}