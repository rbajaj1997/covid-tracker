import React, { useState, useEffect }  from 'react';

export default function Snackbar(props) {
    const [hidden, setHidden] = useState(false);
    const { message, time } = props;
    console.log(hidden);
    useEffect(() => {
        setTimeout(() => {
            setHidden(true);
            console.log('Timeout Done');
        }, time)
    }, [time])


    return <div className={`snackbar leftToRight-animation ${hidden ? 'hidden' : ''}`}>
        {message}
    </div>
}