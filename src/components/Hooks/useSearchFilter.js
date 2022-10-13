import { useSearchParams } from 'react-router-dom'

export default function useSearchFilter() {
    const [searchParams] = useSearchParams();
    return searchParams.get('q');
}