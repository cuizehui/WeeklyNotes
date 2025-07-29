/**
 * 获取当前周数
 * @returns 当前周数
 */
export const getCurrentWeek = (): number => {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 1);
  const diff = (now.getTime() - start.getTime()) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000);
  const oneWeek = 1000 * 60 * 60 * 24 * 7;
  return Math.ceil(diff / oneWeek);
};

/**
 * 获取当前年份
 * @returns 当前年份
 */
export const getCurrentYear = (): number => {
  return new Date().getFullYear();
};

/**
 * 获取当前日期中的日
 * @returns 当前日期中的日
 */
export const getCurrentDay = (): number => {
  return new Date().getDay();
};
