import { useState } from 'react';

import './style.css';

export const TextExpandable = ({ text, maxlength = 100 }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const expandabledText = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <>
            <div className="Conteiner-expladeble">
                {text.length > maxlength && !isExpanded ? (
                    <p onClick={expandabledText}>
                        {text.slice(0, maxlength) } <strong className="clickExpand">Ler mais...</strong>
                    </p>
                ) : (
                    <p onClick={expandabledText}>{text} <br/><br/>  <strong className="clickExpand">Esconder...</strong></p>
                )}
            </div>
        </>
    );
};