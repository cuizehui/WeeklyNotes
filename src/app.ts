import { PropsWithChildren } from 'react';
import { useLaunch } from '@tarojs/taro';
import { getLocalWeeklyData, setLocalWeeklyData } from './utils/localData';
import { generateTemplateData } from './utils/templateDataGenerator';
import { getCurrentWeek } from './utils/dateUtils';
import './app.scss';

function App({ children }: PropsWithChildren<any>) {
  useLaunch(() => {
    console.log('App launched.');
    const weeklyData = getLocalWeeklyData();
    const currentWeek = getCurrentWeek();
    const hasCurrentWeekData = weeklyData.todos.some(todo => todo.week === currentWeek);

    if (!hasCurrentWeekData) {
      const templateData = generateTemplateData();
      setLocalWeeklyData(templateData);
    }
  });

  // children 是将要会渲染的页面
  return children;
}

export default App;