export type Project = {
  id: string
  name: string
  description: string
  organization_id: string
}

export type ProjectTimeEntry = {
  id: string
  start: string
  end: string
  duration: number
  description: string
  task_id: string | null
  project_id: string
  organization_id: string
  user_id: string
  tags: string[]
  billable: boolean
  type: string
}