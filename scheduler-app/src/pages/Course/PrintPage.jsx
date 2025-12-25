import { Box, Heading, Button, Text } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import CourseNav from '../../components/layout/CourseNav'

export default function PrintPage() {
  const { id } = useParams()

  return (
    <Box>
      <Heading size="lg" mb={4}>印刷プレビュー（講座 {id}）</Heading>
      <CourseNav />
      <Text mb={3}>ここでA4プレビューと印刷ボタンを表示します（モック）</Text>
      <Button onClick={() => window.print()}>印刷</Button>
    </Box>
  )
}
