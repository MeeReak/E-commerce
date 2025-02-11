export function setLocalStorage(name: string, data: unknown) {
  if (typeof window !== 'undefined') {
    localStorage.setItem(name, JSON.stringify(data));
  }
}

export function getLocalStorage(name: string) {
  if (typeof window !== 'undefined') {
    const item = localStorage.getItem(name);
    return item ? JSON.parse(item) : null;
  }
  return null;
}

export function removeLocalStorage(name: string) {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(name);
  }
}