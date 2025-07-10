import React from 'react';
import './Line.css';

function Line() {
    const lineText = `#buy now           #вседлядому            #швидкотазручно            #buy now           #вседлядому            #швидкотазручно            #buy now           #вседлядому            #швидкотазручно            #buy now           #вседлядому            #швидкотазручно`
    return (
        <div className="poloska">
            <div className="moving-text">
                <span>{lineText}</span>
                <span>{lineText}</span>
            </div>
        </div>
    );
}

export default Line;
