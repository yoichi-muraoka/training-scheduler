import { useQuery } from '@tanstack/react-query'
import api from '../lib/api'

async function fetchCourses() {
  const res = await api.get('/courses')
  return res.data
}

export default function CoursesPage() {
  const { data, isLoading, error } = useQuery({ queryKey: ['courses'], queryFn: fetchCourses })

  if (isLoading) return <div>Loading...</div>
  if (error) return <div style={{ color: 'red' }}>Error loading courses</div>

  return (
    <div>
      <h2>Courses</h2>
      <ul>
        {data && data.length ? (
          data.map((c) => (
            <li key={c.id} style={{ marginBottom: 12 }}>
              <div style={{ fontWeight: 'bold' }}>{c.title}</div>
              <div style={{ fontSize: 14 }}>{c.description}</div>
            </li>
          ))
        ) : (
          <li>No courses</li>
        )}
      </ul>
    </div>
  )
}
