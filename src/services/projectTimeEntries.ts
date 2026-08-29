import fetchApi from '../lib/apiClient'

const organizationId = import.meta.env.SOLIDTIME_ORGANIZATION_ID

export default async function getProjectTimeEntries(projectId: string, startDate?: string, endDate?: string) {
  if (!projectId) {
    throw new Error('projectId not defined')
  }

  const params = new URLSearchParams()
  params.append('project_ids[]', projectId)
  if (startDate) {
    params.append('start', startDate)
  }
  if (endDate) {
    params.append('end', endDate)
  }

  const response = await fetchApi(`organizations/${organizationId}/time-entries?${params.toString()}`)

  if (!response?.data) {
    throw new Error(response?.message || 'Failed to fetch time entries')
  }

  return response.data
}