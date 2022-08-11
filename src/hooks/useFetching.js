import { useContext, useEffect, useState } from 'react';
import { Context } from '../context/context';

export const useFetching = (callback) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const { currentUser, setCurrentUser } = useContext(Context);

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