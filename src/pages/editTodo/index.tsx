import { View, Input, Button, Text, ScrollView } from '@tarojs/components';
import { useState, useEffect } from 'react';
import { useRouter } from '@tarojs/taro';
import { WeeklyDataStore, TodoItem, addTodo, getLocalWeeklyData, setLocalWeeklyData, updateTodo } from '@/utils/localData';
import './index.scss';
import Taro from '@tarojs/taro';

interface RouteParams {
  week: string;
}

export default function EditTodo() {
  const router = useRouter<RouteParams>();
  const [week, setWeek] = useState<number>(0);
  const [weeklyData, setWeeklyData] = useState<WeeklyDataStore>({ todos: [] });
  const [newTodoText, setNewTodoText] = useState('');
  const [editingTodoId, setEditingTodoId] = useState<string | null>(null);

  useEffect(() => {
    const parsedWeek = parseInt(router.params.week);
    setWeek(parsedWeek);
    const data = getLocalWeeklyData();
    setWeeklyData(data);
  }, [router.params.week]);

  const handleAddTodo = () => {
    if (newTodoText.trim()) {
      const year = new Date().getFullYear();
      const day = new Date().getDay();
      const updatedData = addTodo(weeklyData, newTodoText, year, week, day);
      setWeeklyData(updatedData);
      setLocalWeeklyData(updatedData);
      setNewTodoText('');
    }
  };

  const handleEditTodo = (id: string, text: string) => {
    setEditingTodoId(id);
    setNewTodoText(text);
  };

  const handleSaveEdit = () => {
    if (editingTodoId && newTodoText.trim()) {
      const updatedData = updateTodo(weeklyData, editingTodoId, { text: newTodoText });
      setWeeklyData(updatedData);
      setLocalWeeklyData(updatedData);
      setEditingTodoId(null);
      setNewTodoText('');
    }
  };

  const handleToggleDone = (id: string) => {
    const todo = weeklyData.todos.find(item => item.id === id);
    if (todo) {
      const updatedData = updateTodo(weeklyData, id, { done: !todo.done });
      setWeeklyData(updatedData);
      setLocalWeeklyData(updatedData);
    }
  };

  const weekTodos = weeklyData.todos.filter(todo => todo.week === week);

  return (
    <View className='edit-todo'>
      <Text className='week-title'>第 {week} 周待办</Text>
      <ScrollView className='todo-list' scrollY>
        {weekTodos.map(todo => (
          <View key={todo.id} className='todo-item'>
            {editingTodoId === todo.id ? (
              <Input
                value={newTodoText}
                onInput={(e) => setNewTodoText(e.detail.value)}
                placeholder='编辑待办内容'
              />
            ) : (
              <>
                <Text className={todo.done ? 'done' : ''} onClick={() => handleToggleDone(todo.id)}>
                  {todo.done ? '✅' : '⬜'} {todo.text}
                </Text>
                <Button size='mini' onClick={() => handleEditTodo(todo.id, todo.text)}>编辑</Button>
              </>
            )}
          </View>
        ))}
      </ScrollView>
      <View className='new-todo'>
        <Input
          value={newTodoText}
          onInput={(e) => setNewTodoText(e.detail.value)}
          placeholder='输入新待办内容'
        />
        <Button onClick={editingTodoId ? handleSaveEdit : handleAddTodo}>
          {editingTodoId ? '保存修改' : '添加待办'}
        </Button>
      </View>
      <Button onClick={() => Taro.navigateBack()}>返回</Button>
    </View>
  );
}
