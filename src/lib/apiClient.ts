import { SOLIDTIME_API_URL } from '@/lib/config'

export default async function apiClient(endpoint: string) {

  if (!SOLIDTIME_API_URL || !endpoint) {
    throw new Error('SOLIDTIME_SOLIDTIME_API_URL or endpoint not defined')
  }
    
  try {
    const response = await fetch(`${SOLIDTIME_API_URL}/${endpoint}`, {
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