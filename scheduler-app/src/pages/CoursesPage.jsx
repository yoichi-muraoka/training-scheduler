import { useQuery } from '@tanstack/react-query'
import api from '../lib/api'
import { Box, Heading, List, ListItem, Spinner, Text } from '@chakra-ui/react'

async function fetchCourses() {
  const res = await api.get('/courses')
  return res.data
}

export default function CoursesPage() {
  const { data, isLoading, error } = useQuery({ queryKey: ['courses'], queryFn: fetchCourses })

  if (isLoading) return <Spinner />
  if (error) return <Text color="red.500">Error loading courses</Text>

  return (
    <Box>
      <Heading size="md" mb={4}>Courses</Heading>
      <List spacing={3}>
        {data && data.length ? (
          data.map((c) => (
            <ListItem key={c.id}>
              <Text fontWeight="bold">{c.title}</Text>
              <Text fontSize="sm">{c.description}</Text>
            </ListItem>
          ))
        ) : (
          <ListItem>No courses</ListItem>
        )}
      </List>
    </Box>
  )
}
