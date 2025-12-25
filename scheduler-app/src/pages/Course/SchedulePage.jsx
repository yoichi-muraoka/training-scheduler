import { Box, Heading, VStack, Button, Text } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import CourseNav from '../../components/layout/CourseNav'

export default function SchedulePage() {
  const { id } = useParams()

  return (
    <Box>
      <Heading size="lg" mb={4}>スケジュール管理（講座 {id}）</Heading>
      <CourseNav />
      <VStack spacing={3} align="stretch">
        <Box p={3} borderWidth="1px" borderRadius="md">
          <Text>ここでブロックを並べ替え、日付を自動割当します（モック）</Text>
        </Box>
        <Button colorScheme="blue">＋見出し追加</Button>
      </VStack>
    </Box>
  )
}
