import { MouseEventHandler } from 'react'

export type Column = {
  key: string
  title: string
  isSortable: boolean
}

export type Sort = {
  key: string
  direction: 'asc' | 'desc'
} | null

type TableHeaderProps = {
  columns: Column[]
  sort: Sort
  onSort: (sort: Sort) => void
}

export const TableHeader = ({ columns, sort, onSort }: TableHeaderProps) => {
  const handleSort: MouseEventHandler<HTMLTableHeaderCellElement> = event => {
    const isSortable = event.currentTarget.dataset.issortable
    const key = event.currentTarget.dataset.key

    if (!isSortable) return

    if (!key) throw new Error('key don`t exist')

    if (sort?.key !== key) {
      return onSort({ key, direction: 'asc' })
    }
    if (sort?.direction === 'asc') {
      return onSort({ key, direction: 'desc' })
    }

    return onSort(null)
  }

  return (
    <>
      {columns.map(column => {
        const isShown = sort && sort.key === column.key && column.isSortable

        return (
          <th
            data-key={column.key}
            data-isSortable={column.isSortable}
            key={column.key}
            onClick={handleSort}
          >
            {column.title}
            {isShown && <span>{sort.direction === 'asc' ? '▲' : '▼'}</span>}
          </th>
        )
      })}
    </>
  )
}
