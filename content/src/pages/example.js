import React from 'react'
import ExampleHeader from '../components/ExampleHeader'
import ExampleHeaderStatic from '../components/ExampleHeaderStatic'
import { graphql } from 'gatsby'

const example = ({data}) => {
  const {site: {info:{description, title}}} = data;
  return (
    <div>
      <h1>This is page for Examples</h1>
      <ExampleHeader />
      <ExampleHeaderStatic />
      <h2>Page title: {title}</h2>
      <h2>Page description: {description}</h2>
    </div>
  )
}

export const data = graphql`
{
  site {
    info: siteMetadata {
      author
      description
      title
    }
  }
}
`

export default example
