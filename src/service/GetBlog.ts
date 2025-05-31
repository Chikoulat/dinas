import { useQuery } from '@tanstack/react-query';
import api from './api';

export function useGetBlogs() {
    return useQuery({
        queryKey: ['blogs'],
        queryFn: async () => {
            const { data } = await api.get('/blog/');
            return data;
        },
    });
}