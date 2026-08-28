export type Project = {
  id: string
  name: string
  color: string
  client_id: string
  is_archived: boolean
  billable_rate: number
  is_billable: boolean
  estimated_time: number | null
  spent_time: number
  is_public: boolean
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