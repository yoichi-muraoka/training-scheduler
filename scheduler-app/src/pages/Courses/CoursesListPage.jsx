import { Box, Button, Heading, VStack, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

export default function CoursesListPage() {
  const sampleCourses = [
    { id: 1, title: 'Javaプログラミング研修', year: 2026, period: '2026-06-01 ~ 2026-08-31' },
    { id: 2, title: 'フロントエンド基礎', year: 2026, period: '2026-07-01 ~ 2026-07-30' },
  ]

  return (
    <Box>
      <Heading size="lg" mb={4}>講座一覧</Heading>
      <VStack spacing={4} align="stretch">
        {sampleCourses.map((c) => (
          <Box key={c.id} p={4} borderWidth="1px" borderRadius="md">
            <Heading size="md">{c.title}</Heading>
            <Text fontSize="sm">年度: {c.year} / 期間: {c.period}</Text>
            <Box mt={3}>
              <Link to={`/courses/${c.id}/settings`}>
                <Button colorScheme="blue" size="sm">開く</Button>
              </Link>
            </Box>
          </Box>
        ))}
      </VStack>
    </Box>
  )
}
