import { useContext, useEffect, useState } from 'react';
import { Context } from '../context/context';

//Хук принимает колбэк, возвращает булеон загрузку и обработанную ошибку
//Внутри следит зв загрузкой, получает элементы и очищает форму

export const useFetching = (callback) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const { currentUser } = useContext(Context);

  useEffect(() => {
    fetch();
  }, [currentUser]);

  const fetch = async () => {
    try {
      setIsLoading(true);
      setError('');
      await callback();
    } catch (e) {
      setError(e.message);
    } finally {
      setIsLoading(false);
    }
  }

  return [isLoading, error];
}