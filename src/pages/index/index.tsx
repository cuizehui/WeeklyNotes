import { View, Text, Input, Button, Image } from '@tarojs/components'
import { useState } from 'react'
import { AtTabBar, AtFab } from 'taro-ui'
import './index.scss'
import WeeklyCard from '@/components/WeeklyCard'

export default function Home() {
  const [search, setSearch] = useState('')
  const [tab, setTab] = useState(0)

  const weeklyData = [
    {
      week: 'W28',
      items: [
        { text: '去超市购买三明治', done: true },
        { text: '去花店的买郁金香', done: false }
      ]
    }
  ]

  // 假设的待办数据
  const todoData = [
    { text: '完成报告', done: false },
    { text: '参加会议', done: true }
  ]

  return (
    <View className='home'>
      {/* 顶部导航 */}
      <View className='header'>
        <Text className='title'>记事本</Text>
        <View className='icons'>
          <Image src='/assets/grid.png' className='icon' />
          <Image src='/assets/setting.png' className='icon' />
        </View>
      </View>

      {/* 搜索栏 */}
      <View className='search-bar'>
        <Input
          placeholder='搜索'
          value={search}
          onInput={e => setSearch(e.detail.value)}
        />
      </View>

      {/* 根据当前 Tab 显示不同内容 */}
      <View className='content'>
        {tab === 0 ? (
          // 笔记页
          <View className='weekly-list'>
            {weeklyData.map(week => (
              <WeeklyCard key={week.week} data={week} />
            ))}
          </View>
        ) : (
          // 待办页
          <View className='todo-list'>
            {todoData.map((todo, index) => (
              <View key={index}>
                <Text>{todo.text}</Text>
                <Text>{todo.done ? '已完成' : '未完成'}</Text>
              </View>
            ))}
          </View>
        )}
      </View>

      {/* 底部Tab */}
      <AtTabBar
        fixed
        tabList={[
          { title: '记事本', iconType: 'bullet-list' },
          { title: '待办', iconType: 'check-circle' }
        ]}
        onClick={setTab}
        current={tab}
      />

      {/* 浮动按钮 */}
      <AtFab className='fab'>
        <Text>+</Text>
      </AtFab>
    </View>
  )
}