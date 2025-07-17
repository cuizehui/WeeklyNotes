import { View, Text } from '@tarojs/components'
import WeeklyCard from '@/components/WeeklyCard'

interface ContentAreaProps {
  tab: number
}

export default function ContentArea({ tab, weeklyData, todoData }: ContentAreaProps) {
  return (
    <View className='content'>
      {tab === 0 ? (
        // 笔记页
        <View className='weekly-list'>
        <Text>周记页</Text>
        </View>
      ) : (
        // 待办页
        <View className='todo-list'>
          <Text>代办页</Text>
        </View>
      )}
    </View>
  )
}
