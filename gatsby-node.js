const path = require('path')

module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const eventTemplate = path.resolve('./src/templates/eventTemp.js')
    const res = await graphql(`
        query {
            allContentfulCompetition {
                edges {
                    node {
                        slug
                    }
                }
            }
        }
    `)

    res.data.allContentfulCompetition.edges.forEach((edge) => {
        createPage({
            component: eventTemplate,
            path: `/events/${edge.node.slug}`,
            context: {
                slug: edge.node.slug
            }
        })
    })

    const rulesReg = path.resolve('./src/templates/rulesReg.js')
    res.data.allContentfulCompetition.edges.forEach((edge) => {
        createPage({
            component: rulesReg,
            path: `/events/${edge.node.slug}/rules`,
            context: {
                slug: edge.node.slug
            }
        })
    })
}