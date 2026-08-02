import { useEffect, useState } from 'react';

const MOBILE_BREAKPOINT = 768;

const getIsMobile = () => (
    typeof window !== 'undefined' && window.innerWidth <= MOBILE_BREAKPOINT
);

const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(getIsMobile);

    useEffect(() => {
        const handleResize = () => setIsMobile(getIsMobile());

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return isMobile;
};

export default useIsMobile;
