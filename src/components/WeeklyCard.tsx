import { View, Text } from '@tarojs/components';
import './WeeklyCard.scss';
import Taro from '@tarojs/taro';

interface WeeklyCardData {
  week: number;
  items: {
    id: string;
    text: string;
    done: boolean;
  }[];
}

interface WeeklyCardProps {
  data: WeeklyCardData;
}

export default function WeeklyCard({ data }: WeeklyCardProps) {
  const handleCardClick = () => {
    Taro.navigateTo({
      url: `/pages/editTodo/index?week=${data.week}`
    });
  };

  return (
    <View className='weekly-card' onClick={handleCardClick}>
      <Text className='week'>第 {data.week} 周</Text>
      {data.items.map((item) => (
        <View key={item.id} className='todo-item'>
          <Text className={item.done ? 'done' : ''}>✅ {item.text}</Text>
        </View>
      ))}
    </View>
  );
}