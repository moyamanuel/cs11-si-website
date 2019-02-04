import React from 'react'
import Resource from '../components/resource'

export default ({ data }) => (
    <div>
        <Resource
            week={data.contentfulResource.week}
            resources={data.contentfulResource.resources}
        />
    </div>
)

export const query = graphql`
    query resourcesQuery {
        contentfulResource {
        week
        resources
        }
    }
`