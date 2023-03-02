import client from '../client'

export const createUser = async (body) => {
  const { name, email } = body
  try {
    await client.create({ _type: 'user', name, email })
  } catch (error) {
    throw new Error(error)
  }
}

export const getUsers = async () => {
  try {
    const data = await client.fetch(`*[_type == "user"]{name, _id}`)
    return data
  } catch (error) {
    throw new Error(error)
  }
}
