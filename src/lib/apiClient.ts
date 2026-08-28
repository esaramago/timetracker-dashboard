const API_URL = import.meta.env.SOLIDTIME_API_URL

export default async function apiClient(endpoint: string) {

  if (!API_URL || !endpoint) {
    throw new Error('SOLIDTIME_API_URL or endpoint not defined')
  }
    
  try {
    const response = await fetch(`${API_URL}/${endpoint}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${import.meta.env.SOLIDTIME_API_TOKEN}`,
      },
    })
    const data = await response.json()

    return data
  } catch (error) {
    console.error(error)
  }
}