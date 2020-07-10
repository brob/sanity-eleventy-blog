const groq = require('groq')
const BlocksToMarkdown = require('@sanity/block-content-to-markdown')
const client = require('../utils/sanityClient.js')
const serializers = require('../utils/serializers')
const overlayDrafts = require('../utils/overlayDrafts')

const hasToken = !!client.config().token

function generateCategory (category) {
  return category
}

async function getCategories () {
  const filter = groq`*[_type == "category"]`
  const projection = groq`{
      _id,
      title,
      description,
      "posts": *[_type == "post" && references(^._id)]{
          title,
          "slug": slug.current,
          "excerpt": excerpt[0].children[0].text,
      }
  }`
  const query = [filter, projection].join(' ')
  const docs = await client.fetch(query).catch(err => console.error(err))
  const categories = docs.map(generateCategory)
  const reducedCategories = overlayDrafts(hasToken, categories)
  return reducedCategories
}

module.exports = getCategories
