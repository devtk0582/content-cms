import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

const ComponentName = () => {
  return (
    <StaticQuery query={graphql`
    {
      site {
        info: siteMetadata {
          author
          description
          title
        }
      }
    }
  `} render={data => <pre>{JSON.stringify(data, null, 4)}</pre>}>
    </StaticQuery>
  )
}

export default ComponentName
