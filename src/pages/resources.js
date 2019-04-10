import React from 'react'
import Layout from '../components/layout'
import Resource from '../components/resource'

export default ({ data }) => (
    <Layout>
        <div>
            <Resource
                week={data.contentfulResource.week}
                resources={data.contentfulResource.resources}
            />
        </div>
    </Layout>
)

export const query = graphql`
    query resourcesQuery {
        contentfulResource {
        week
        resources
        }
    }
`