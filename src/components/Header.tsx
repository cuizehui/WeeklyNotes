import { View, Text, Image } from '@tarojs/components'

interface HeaderProps {
  current: number
}

export default function Header({current}: HeaderProps) {

    const tabList = [
    { title: '周记'},
    { title: '待办'}
  ]

  return (
    <View className='header'>
      <Text className='title'>{tabList[current].title}</Text>
      <View className='icons'>
        <Image src={require('@/assets/grid.png')} className='icon' />
        <Image src={require('@/assets/setting.png')} className='icon' />
      </View>
    </View>
  )
}
