import fetchApi from '../lib/apiClient'

const organizationId = import.meta.env.SOLIDTIME_ORGANIZATION_ID

export default async function getProject(projectId: string, startDate?: string, endDate?: string) {
  if (!projectId) {
    throw new Error('projectId not defined')
  }
  const response = await fetchApi(`organizations/${organizationId}/time-entries?project_ids\[\]=${projectId}&start=${startDate}&end=${endDate}`)

  if (!response.data) {
    throw new Error(response.message)
  }

  return response
}