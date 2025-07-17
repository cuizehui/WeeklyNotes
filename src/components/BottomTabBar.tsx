import { View, Text, Image } from '@tarojs/components'
import './BottomTabBar.scss'

interface Props {
  current: number
  onClick: (index: number) => void
}

export default function BottomTabBar({ current, onClick }: Props) {
  const tabList = [
    { title: '周记', icon: require('@/assets/weekly.png') },
    { title: '待办', icon: require('@/assets/todo.png') }
  ]

  return (
    <View className='bottom-tab-bar'>
      {tabList.map((tab, index) => (
        <View
          key={index}
          className={`tab-item ${current === index ? 'active' : ''}`}
          onClick={() => onClick(index)}
        >
          <Image src={tab.icon} className='tab-icon' />
          <Text className='tab-title'>{tab.title}</Text>
        </View>
      ))}
    </View>
  )
}