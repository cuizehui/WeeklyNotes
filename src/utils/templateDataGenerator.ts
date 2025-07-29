import { v4 as uuidv4 } from 'uuid';
import { TodoItem, WeeklyDataStore } from './localData';
import { getCurrentYear, getCurrentWeek, getCurrentDay } from './dateUtils';

/**
 * 生成默认待办事项
 * @param year 年份
 * @param week 周数
 * @param day 日期中的日
 * @returns 默认待办事项数组
 */
const generateDefaultTodos = (year: number, week: number, day: number): TodoItem[] => {
  return [
    {
      id: uuidv4(),
      text: '记录今日工作进展',
      done: false,
      year,
      week,
      day
    },
    {
      id: uuidv4(),
      text: '整理本周项目文档',
      done: false,
      year,
      week,
      day
    },
    {
      id: uuidv4(),
      text: '与团队成员沟通下周计划',
      done: false,
      year,
      week,
      day
    }
  ];
};

/**
 * 生成关键任务
 * @param year 年份
 * @param week 周数
 * @param day 日期中的日
 * @returns 关键任务数组
 */
const generateKeyTasks = (year: number, week: number, day: number): TodoItem[] => {
  return [
    {
      id: uuidv4(),
      text: '完成项目核心功能开发',
      done: false,
      year,
      week,
      day
    },
    {
      id: uuidv4(),
      text: '进行系统性能优化',
      done: false,
      year,
      week,
      day
    }
  ];
};

/**
 * 生成心得体会
 * @param year 年份
 * @param week 周数
 * @param day 日期中的日
 * @returns 心得体会数组
 */
const generateInsights = (year: number, week: number, day: number): TodoItem[] => {
  return [
    {
      id: uuidv4(),
      text: '总结本周工作经验和教训',
      done: false,
      year,
      week,
      day
    }
  ];
};

/**
 * 生成模版数据
 * @returns 包含模版数据的 WeeklyDataStore 对象
 */
export const generateTemplateData = (): WeeklyDataStore => {
  const year = getCurrentYear();
  const week = getCurrentWeek();
  const day = getCurrentDay();
  const todos = [
    ...generateDefaultTodos(year, week, day),
    ...generateKeyTasks(year, week, day),
    ...generateInsights(year, week, day)
  ];
  return { todos };
};
