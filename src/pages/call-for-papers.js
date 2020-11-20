import React from "react"
import Header from "../components/header"
import Menu from "../components/menu"

export default function CallForPapers() {
  return (
    <div>
      <Header />
      <Menu />
      <div className="content">
        <h2>Full papers. Deadline on April 9th 2021</h2>
        <div className="section"><p><em>Full papers</em> have an 8 page limit (including references and appendices), and
          should
          constitute a technical or empirical contribution to scientific, technical, and human aspects of games.</p>
          <p>Full papers will be published by IEEE in the proceedings of the conference.</p>
        </div>
        <h2>Short, competition, vision and demo papers. Deadline on May 28th 2021</h2>
        <div className="section">
          <p><em>Short papers (2-4 pages)</em> describe work in progress, smaller projects that are not yet ready to be
            published as a full paper, or new progress on projects that have been reported elsewhere.</p>
          <p><em>Competition papers (8 pages)</em> describe research related to one of the competitions in the Games
            community,
            including the design of new competitions and in particular submissions to existing competitions.</p>
          <p><em>Vision papers (8 pages)</em> describe a vision for the future of the Games field or some part of it,
            are based
            on extensive research and include a comprehensive bibliography. Standards for competition papers are as high
            as for other CoG papers, and standards for vision papers are higher.</p>
          <p><em>Demo papers (2 pages)</em> describe work in progress and will be presented during a demo session.</p>
          <p>Short, competition, vision and demo papers, similarly to full papers, will be published by IEEE in the
            proceedings of the conference.</p>
        </div>

        <h2>Extended Abstracts. Deadline on May 28th 2021</h2>
        <div className="section"><p></p>
          This edition of IEEE CoG welcomes extended abstract submissions by researchers and practitioners to present
          their research findings. The extended abstract submission is intended to accommodate researchers who want to
          participate and share their findings at CoG but come from disciplines that traditionally do not publish their
          work in conference proceedings.

          Extended abstracts should be between 750 and 1500 words including references. Works submitted in this format
          will not be published in the conference proceedings.
        </div>

        <h2>Journal Paper Presentations. Deadline on May 28th 2021</h2>
        <div className="section"><p>From this year, the IEEE CoG conference will welcome proposals for presentation of
          articles previously published in the IEEE Transactions on Games journal. For anyone interested in presenting
          their published work, you will need to submit a copy of the published paper in the appropriate track.</p>
        </div>

        <h2>Industry talks. Deadline on May 28th 2021</h2>
        <div className="section">
          <p>We welcome talk proposals from the games industry that wish to present their work on the
            areas covered in this conference. We are interested in presentations about research prototypes, commercial
            products, indie/mobile/AAA games, AR/VR applications, etc., as well as participation on poster sessions and
            discussion panels.
            From these talk proposals do not require the submission of a written manuscript to be accepted at the
            conference.</p>
        </div>

        <p>All page/word limits include references and appendices. We plan to invite the principle
          authors to submit an extended version of their papers to the IEEE Transactions on Games (ToG). More details
          on this matter will be given later. All deadline times are anywhere on earth.</p>
      </div>
    </div>
  )
}