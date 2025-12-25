import { Box, Heading, VStack, Input, Button, HStack, Text } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import CourseNav from '../../components/layout/CourseNav'

export default function CategoriesPage() {
  const { id } = useParams()
  const sample = [
    { id: 1, name: 'Javaプログラミング実習' },
    { id: 2, name: 'HTML/CSS実習' },
  ]

  return (
    <Box>
      <Heading size="xl" mb={4}>Javaプログラミング研修（講座ID: {id}）</Heading>
      <CourseNav />
      <VStack spacing={3} align="stretch">
        {sample.map((c) => (
          <HStack key={c.id} justifyContent="space-between">
            <Text>{c.name}</Text>
            <HStack>
              <Button size="sm">編集</Button>
              <Button size="sm" colorScheme="red">削除</Button>
            </HStack>
          </HStack>
        ))}
        <HStack>
          <Input placeholder="新しい区分名" />
          <Button colorScheme="blue">＋区分追加</Button>
        </HStack>
      </VStack>
    </Box>
  )
}
