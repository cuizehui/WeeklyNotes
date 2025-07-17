import { View, Input } from '@tarojs/components'
import { useState } from 'react'

interface SearchBarProps {
  onSearch: (value: string) => void
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [search, setSearch] = useState('')

  return (
    <View className='search-bar'>
      <Input
        placeholder='搜索'
        value={search}
        onInput={e => {
          setSearch(e.detail.value)
          onSearch(e.detail.value)
        }}
      />
    </View>
  )
}
