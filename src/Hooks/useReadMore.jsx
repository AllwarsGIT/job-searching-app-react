import { useState } from 'react';

function useReadMore(text="", maxLenght = 100) {
    const [isExpanded, setIsExpanded] = useState(false);

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