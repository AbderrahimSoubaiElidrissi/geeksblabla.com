import React from "react"
import { StaticQuery, graphql } from "gatsby"
import AddToCalendar from "../AddToCalendar"
import "./index.scss"

export default () => (
  <StaticQuery
    query={graphql`
      {
        allMdx(
          filter: {
            frontmatter: { published: { eq: true }, isNext: { eq: true } }
          }
          sort: { fields: [frontmatter___date], order: DESC }
        ) {
          edges {
            node {
              id
              fields {
                title
                slug
                date(formatString: "MMMM DD, YYYY")
                duration
                url
                video
              }
            }
          }
        }
      }
    `}
    render={({ allMdx }) => {
      const { title, date, url } = allMdx.edges[0].node.fields
      return (
        <div className="next-ep">
          <div className="item">
            <h4 className="next"> Next episode </h4>
            <h1 className="title"> {title} </h1>
          </div>
          <div className="item">
            <h2 className="time"> {date} </h2>
            <p className="place">
              The streaming will be on{" "}
              <a
                target="_blank"
                href="https://www.facebook.com/groups/DevC.Casablanca/"
              >
                DevC Casablanca Facebook Group{" "}
              </a>
            </p>
          </div>
          <div className="item">
            <AddToCalendar />
          </div>
        </div>
      )
    }}
  />
)
