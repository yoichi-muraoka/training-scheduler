import { Box, Heading, Button, Text } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'

export default function PrintPage() {
  const { id } = useParams()

  return (
    <Box>
      <Heading size="lg" mb={4}>印刷プレビュー（講座 {id}）</Heading>
      <Text mb={3}>ここでA4プレビューと印刷ボタンを表示します（モック）</Text>
      <Button onClick={() => window.print()}>印刷</Button>
    </Box>
  )
}
