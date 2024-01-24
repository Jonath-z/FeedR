class LocalStorage {
  static setItem<T>(key: string, value: string) {
    localStorage.setItem(key, value);
    return JSON.parse(value) as T;
  }

  static getItem<T>(key: string) {
    const data = localStorage.getItem(key);
    if (!data) return null;
    return JSON.parse(data) as T;
  }
}

export default LocalStorage;
