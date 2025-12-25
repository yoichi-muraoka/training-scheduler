import { Box, Heading, VStack, Input, Textarea, Button, HStack, Text } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import CourseNav from '../../components/layout/CourseNav'

export default function LecturesPage() {
  const { id } = useParams()
  const sample = [
    { id: 1, name: 'ifによる分岐', category: 'Java' },
    { id: 2, name: '拡張for文', category: 'Java' },
  ]

  return (
    <Box>
      <Heading size="lg" mb={4}>講義マスタ（講座 {id}）</Heading>
      <CourseNav />
      <VStack spacing={3} align="stretch">
        {sample.map((s) => (
          <Box key={s.id} p={3} borderWidth="1px" borderRadius="md">
            <Text fontWeight="bold">{s.name}</Text>
            <Text fontSize="sm">区分: {s.category}</Text>
          </Box>
        ))}

        <Box p={3} borderWidth="1px" borderRadius="md">
          <Input placeholder="講義名" mb={2} />
          <Input placeholder="区分" mb={2} />
          <Textarea placeholder="説明（detail）" mb={2} />
          <Button colorScheme="blue">＋講義追加</Button>
        </Box>
      </VStack>
    </Box>
  )
}
