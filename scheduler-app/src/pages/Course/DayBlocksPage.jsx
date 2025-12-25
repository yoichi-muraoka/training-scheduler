import { Box, Heading, VStack, Button, Text } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'

export default function DayBlocksPage() {
  const { id } = useParams()

  return (
    <Box>
      <Heading size="lg" mb={4}>1日ブロック管理（講座 {id}）</Heading>
      <VStack spacing={3} align="stretch">
        <Box p={3} borderWidth="1px" borderRadius="md">
          <Text>サンプルブロック: Javaプログラミング実習（講義数: 3）</Text>
          <Button size="sm" mt={2}>編集</Button>
        </Box>
        <Button colorScheme="blue">＋ブロック作成</Button>
      </VStack>
    </Box>
  )
}
