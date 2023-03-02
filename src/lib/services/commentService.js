import client from '../client'

export const createComment = async (body) => {
  const { name, text, lessonSlug } = body
  try {
    await client.create({ _type: 'comment', name, text, lessonSlug })
  } catch (error) {
    throw new Error(error)
  }
}

export const getComments = async () => {
  try {
    const data = await client.fetch(
      `*[_type == "comment"]{name, lessonSlug, text, _id}`
    )
    return data
  } catch (error) {
    throw new Error(error)
  }
}
