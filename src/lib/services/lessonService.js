import client from '../client'

export const getLessons = async () => {
  try {
    const data = await client.fetch(`*[_type == "lesson"]`)
    return data
  } catch (error) {
    throw new Error(error)
  }
}
