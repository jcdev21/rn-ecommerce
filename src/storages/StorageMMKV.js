import {MMKV} from 'react-native-mmkv';

export const storage = new MMKV();

export const store = (key, value) => {
  storage.set(key, value);
};

export const removeAll = () => {
  storage.clearAll();
};
