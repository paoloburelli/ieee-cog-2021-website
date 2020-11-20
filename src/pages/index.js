import React from "react"
import Header from "../components/header"
import Menu from "../components/menu"

export default function Home() {
  return (
    <div>
      <Header />
      <Menu />
      <div className="content">
        <p>The Conference on Games (CoG) evolves from the traditional Computational Intelligence and Games (CIG) to
          bring
          together leading researchers and practitioners from academia and industry in the field of Games, to discuss
          recent advances and explore future directions. </p>
        <p>Games offer a fantastic domain for computational creativity, design, technology, education, social
          sciences and, undoubtedly, artificial and computational intelligence. The annual IEEE Conference on Games
          (IEEE CoG) seeks to share insights and cutting-edge research related to game technologies and design, covering
          scientific, technical, and human aspects of games.</p>

        <p>IEEE CoG 2021 will include presentations of peer-reviewed papers, invited talks by high-profile industry and
          academic leaders, panels, posters and demos. Furthermore, this year's edition will include two new forms of presentations: </p>
        <ul>
          <li>Presentations of abstract submissions, this submission will not be included in the proceedings of the conference.</li>
          <li>Presentations of articles previously published in the IEEE Transactions on Games journal.</li>
        </ul>

        <p>We welcome papers and presentations related to all aspects of Games, including, but
          not limited to, the following broad subject areas:</p>

        <ul>
          <li>AI for Playing Games</li>
          <li>Analytics and Player Modelling</li>
          <li>Benchmarks and Competitions</li>
          <li>Education and Games</li>
          <li>Game Design</li>
          <li>Game Interfaces and User Interaction</li>
          <li>Game Theory and Multi-agent Systems</li>
          <li>Multimedia and Games: Deep Learning Algorithms and Multimedia Technologies for Serious Games Applications
          </li>
          <li>Narrative and Interactive Entertainment</li>
          <li>PCG and AI for Game Design</li>
          <li>Serious Games Technology</li>
          <li>Virtual and Augmented Reality</li>
        </ul>
      </div>
    </div>
  )
}