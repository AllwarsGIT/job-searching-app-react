import { useState } from 'react';

type UseReadMoreReturn = {
    displayText: string;
    isExpanded: boolean;
    toggleReadMore: () => void;
}

function useReadMore(text: string="", maxLenght: number = 100): UseReadMoreReturn {
    const [isExpanded, setIsExpanded] = useState<boolean>(false);

    const toggleReadMore = () => { //Function to toggle the read more state
        setIsExpanded((prev) => !prev);
    }

    const displayText = isExpanded ? text : text.slice(0, maxLenght) + '...';

    return {
        displayText,
        isExpanded,
        toggleReadMore
    }

}

export default useReadMore;