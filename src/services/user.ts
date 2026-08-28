import fetchApi from '../lib/apiClient'

export default async function getUsers() {
  const response = await fetchApi('users/me')

  if (!response.data) {
    throw new Error(response.message)
  }

  return response.data
}