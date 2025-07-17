import Taro from '@tarojs/taro';

// 获取周报数据
export const fetchWeeklyData = async () => {
  try {
    const res = await Taro.request({
      url: 'https://your-api-url.com/weekly-data',
      method: 'GET'
    });
    return res.data;
  } catch (error) {
    console.error('获取周报数据失败:', error);
    return [];
  }
};

// 获取待办数据
export const fetchTodoData = async () => {
  try {
    const res = await Taro.request({
      url: 'https://your-api-url.com/todo-data',
      method: 'GET'
    });
    return res.data;
  } catch (error) {
    console.error('获取待办数据失败:', error);
    return [];
  }
};
