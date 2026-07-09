import { useState, useMemo } from 'react';

export function useSearch(items, searchFields = ['name', 'title']) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = useMemo(() => {
    if (!searchQuery.trim()) return items;

    const query = searchQuery.toLowerCase();
    return items.filter(item =>
      searchFields.some(field => {
        const value = item[field];
        return value && value.toLowerCase().includes(query);
      })
    );
  }, [items, searchQuery, searchFields]);

  return { searchQuery, setSearchQuery, filteredItems };
}
