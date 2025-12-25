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

  const isActive = (to) => {
    const path = location.pathname
    if (path === to) return true
    // consider sub-routes active (e.g. /courses/1/settings/edit)
    return path.startsWith(to + '/')
  }

  return (
    <HStack spacing={2} mb={4}>
      {items.map((it) => {
        const active = isActive(it.to)
        return (
          <Button
            as={Link}
            key={it.to}
            to={it.to}
            size="sm"
            variant={active ? 'solid' : 'ghost'}
            colorScheme={active ? 'blue' : 'gray'}
            aria-current={active ? 'page' : undefined}
          >
            {it.label}
          </Button>
        )
      })}
    </HStack>
  )
}
