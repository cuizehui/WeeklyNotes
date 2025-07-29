import { View, Text } from '@tarojs/components'

interface TodoListProps {
  todoData: any
}

export default function TodoList({ todoData }: TodoListProps) {
  return (
    <View className='todo-list'>
      <Text>代办列表</Text>
      {/* 可根据 todoData 渲染待办事项 */}
    </View>
  )
}
