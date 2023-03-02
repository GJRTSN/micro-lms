import sanityClient from '@sanity/client'

const options = {
  projectId: '91c7l9pz',
  dataset: 'production',
  token:
    'skCRZfOHaX1HX4L9vyGG0wAuMCR982hgvs4X4boBQy7SGmV0Rs5IKLptJl2gwgnCsW7fezhfwnD5lGWoE9VO50rul53pgUhFIKizf1DG1jjzEF4KNGPJYH1afCtMXCwDwIbFSY1Q2tpld8nCzblPjxG5XHIciHmlAqfLbanwuLhqJ3VLyc8C',
}

const client = sanityClient({
  ...options,
  useCdn: process.env.NODE_ENV === 'production',
})

export default client
