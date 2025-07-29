import { View, Text } from '@tarojs/components'
import WeeklyCard from '@/components/WeeklyCard'
import { getWeeklyDataByWeek } from '@/utils/localData'

interface WeeklyListProps {}

export default function WeeklyList() {
  const weeklyDataByWeek = getWeeklyDataByWeek();
  const weeks = Object.keys(weeklyDataByWeek).sort((a, b) => parseInt(a) - parseInt(b));

  return (
    <View className='weekly-list'>
      <Text>周记列表</Text>
      {weeks.map(week => {
        const weekNumber = parseInt(week);
        const data = {
          week: weekNumber,
          items: weeklyDataByWeek[weekNumber]
        };
        return <WeeklyCard key={weekNumber} data={data} />;
      })}
    </View>
  )
}