import fetchApi from '../lib/apiClient'

const organizationId = import.meta.env.SOLIDTIME_ORGANIZATION_ID

export default async function getProject(projectId: string) {
  if (!projectId) {
    throw new Error('projectId not defined')
  }
  const response = await fetchApi(`organizations/${organizationId}/projects/${projectId}`)

  if (!response.data) {
    throw new Error(response.message)
  }

  return response.data
}