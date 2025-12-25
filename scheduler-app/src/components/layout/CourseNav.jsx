import { HStack, Button } from '@chakra-ui/react'
import { Link, useLocation, useParams } from 'react-router-dom'

export default function CourseNav() {
  const { id } = useParams()
  const location = useLocation()

  const items = [
    { to: `/courses/${id}/settings`, label: '設定' },
    { to: `/courses/${id}/categories`, label: '区分' },
    { to: `/courses/${id}/lectures`, label: '講義' },
    { to: `/courses/${id}/day-blocks`, label: '1日ブロック' },
    { to: `/courses/${id}/schedule`, label: 'スケジュール' },
    { to: `/courses/${id}/print`, label: '印刷' },
  ]

  return (
    <HStack spacing={2} mb={4}>
      {items.map((it) => (
        <Button
          as={Link}
          key={it.to}
          to={it.to}
          size="sm"
          colorScheme={location.pathname === it.to ? 'blue' : 'gray'}
        >
          {it.label}
        </Button>
      ))}
    </HStack>
  )
}
