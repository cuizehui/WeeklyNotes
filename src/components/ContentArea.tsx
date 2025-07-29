import { View } from '@tarojs/components'
import WeeklyList from './WeeklyList'
import TodoList from './TodoList'

interface ContentAreaProps {
  tab: number
  todoData: any
}

export default function ContentArea({ tab, todoData }: ContentAreaProps) {
  return (
    <View className='content'>
      {tab === 0 ? (
        <WeeklyList />
      ) : (
        <TodoList todoData={todoData} />
      )}
    </View>
  )
}