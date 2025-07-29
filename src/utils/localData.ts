import Taro from '@tarojs/taro';
import { v4 as uuidv4 } from 'uuid';

// 定义待办事项的类型
interface TodoItem {
  id: string;
  text: string;
  done: boolean;
  year: number;
  week: number;
  day: number;
}

// 存储的数据结构
interface WeeklyDataStore {
  todos: TodoItem[];
}

// 存储本地周报数据
export const setLocalWeeklyData = (data: WeeklyDataStore) => {
  try {
    Taro.setStorageSync('weeklyData', JSON.stringify(data));
  } catch (error) {
    console.error('存储周报数据失败:', error);
  }
};

// 获取本地周报数据
export const getLocalWeeklyData = (): WeeklyDataStore => {
  const data = Taro.getStorageSync('weeklyData');
  if (data) {
    try {
      return JSON.parse(data);
    } catch (error) {
      console.error('解析周报数据失败:', error);
    }
  }
  return { todos: [] };
};

// 获取本地待办数据
export const getLocalTodoData = (): TodoItem[] => {
  const weeklyData = getLocalWeeklyData();
  return weeklyData.todos;
};

// 添加新的待办事项
export const addTodo = (
  store: WeeklyDataStore,
  text: string,
  year: number,
  week: number,
  day: number
): WeeklyDataStore => {
  const newTodo: TodoItem = {
    id: uuidv4(),
    text,
    done: false,
    year,
    week,
    day
  };
  return {
    ...store,
    todos: [...store.todos, newTodo]
  };
};

// 修改待办事项
export const updateTodo = (
  store: WeeklyDataStore,
  id: string,
  updates: Partial<TodoItem>
): WeeklyDataStore => {
  return {
    ...store,
    todos: store.todos.map(todo =>
      todo.id === id ? { ...todo, ...updates } : todo
    )
  };
};

// 移动待办事项到下一周
export const moveTodoToNextWeek = (
  store: WeeklyDataStore,
  id: string
): WeeklyDataStore => {
  return {
    ...store,
    todos: store.todos.map(todo =>
      todo.id === id ? { ...todo, week: todo.week + 1 } : todo
    )
  };
};

// 获取所有待办事项
export const getAllTodos = (store: WeeklyDataStore): TodoItem[] => {
  return store.todos;
};

// 按周分组获取数据
export const getWeeklyDataByWeek = (): { [week: number]: TodoItem[] } => {
  const weeklyData = getLocalWeeklyData();
  return weeklyData.todos.reduce((acc, todo) => {
    if (!acc[todo.week]) {
      acc[todo.week] = [];
    }
    acc[todo.week].push(todo);
    return acc;
  }, {} as { [week: number]: TodoItem[] });
};
