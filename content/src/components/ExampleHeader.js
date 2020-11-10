import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

const ComponentName = () => {
  const data = useStaticQuery(graphql`
  {
    site {
      info: siteMetadata {
        author
        description
        title
      }
    }
  }
  `);

  const {site: {info:{description, title}}} = data;

  return (
    <div>
      <h1>Title: {title}</h1>
      <h2>Description: {description}</h2>
    </div>
  );
}

export default ComponentName
