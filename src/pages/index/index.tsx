import { View } from '@tarojs/components'
import { useState, useEffect } from 'react'
import './index.scss'
import Header from '@/components/Header'
import SearchBar from '@/components/SearchBar'
import BottomTabBar from '@/components/BottomTabBar'
import FloatingActionButton from '@/components/FloatingActionButton'
import ContentArea from '@/components/ContentArea'
// 导入 getLocalTodoData 函数
import { getLocalWeeklyData, setLocalWeeklyData, getLocalTodoData } from '@/utils/localData';

export default function Home() {
  const [search, setSearch] = useState('')
  const [tab, setTab] = useState(0)
  const [weeklyData, setWeeklyData] = useState(getLocalWeeklyData());
  const [todoData, setTodoData] = useState(getLocalTodoData());

  useEffect(() => {
    const loadData = () => {
      const localWeeklyData = getLocalWeeklyData();
      const localTodoData = getLocalTodoData();
      setWeeklyData(localWeeklyData);
      setTodoData(localTodoData);
    };

    loadData();
  }, []);

  // 假设这里有一个添加周报数据的函数
  const addWeeklyData = (newData: typeof weeklyData) => {
    const updatedData = { ...weeklyData, ...newData };
    setWeeklyData(updatedData);
    // 存储更新后的数据到本地
    setLocalWeeklyData(updatedData);
  };

  return (
    <View className='home'>
      <Header current={tab}  />
      <SearchBar onSearch={setSearch} />
      <ContentArea tab={tab} weeklyData={weeklyData} todoData={todoData} />
      <BottomTabBar current={tab} onClick={setTab} />
      <FloatingActionButton />
    </View>
  )
}