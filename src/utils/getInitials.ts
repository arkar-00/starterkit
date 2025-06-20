export const getInitials = (name: string): string => {
  if (typeof name !== 'string' || name.trim() === '') {
    return '';
  }

  const words = name.trim().split(' ');

  const initials = words
    .map(word => {
      if (word.length > 0) {
        return word[0].toUpperCase();
      }
      return '';
    })
    .join('');

  return initials;
};
