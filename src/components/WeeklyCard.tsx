import { View, Text } from '@tarojs/components'
import './WeeklyCard.scss'

export default function WeeklyCard({ data }) {
  return (
    <View className='weekly-card'>
      <Text className='week'>{data.week}</Text>
      {data.items.map((item, index) => (
        <View key={index} className='todo-item'>
          <Text className={item.done ? 'done' : ''}>✅ {item.text}</Text>
        </View>
      ))}
    </View>
  )
}