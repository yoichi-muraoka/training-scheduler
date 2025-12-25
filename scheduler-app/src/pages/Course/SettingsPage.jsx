import { Box, Heading, Input, Textarea, Button, Text } from '@chakra-ui/react'
import CourseNav from '../../components/layout/CourseNav'
import { useParams } from 'react-router-dom'

export default function SettingsPage() {
  const { id } = useParams()

  return (
    <Box>
      <Heading size="lg" mb={4}>講座設定（ID: {id}）</Heading>
      <CourseNav />
      <Box mb={3}>
        <Text mb={1}>講座名</Text>
        <Input placeholder="講座名を入力" />
      </Box>
      <Box mb={3}>
        <Text mb={1}>年度</Text>
        <Input placeholder="2026" />
      </Box>
      <Box mb={3}>
        <Text mb={1}>開始日 / 終了日</Text>
        <Input placeholder="YYYY-MM-DD ~ YYYY-MM-DD" />
      </Box>
      <Box mb={3}>
        <Text mb={1}>備考</Text>
        <Textarea />
      </Box>
      <Button colorScheme="blue">保存</Button>
    </Box>
  )
}
