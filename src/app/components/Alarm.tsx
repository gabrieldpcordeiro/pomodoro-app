import React from "react";


// @ts-ignore
// eslint-disable-next-line react/display-name
const Alarm = React.forwardRef<HTMLAudioElement, {}>((_, ref) => {


    return (
        <audio ref={ref}>
            <source src="/audio/bell-notification.mp3" type="audio/mp3"/>
        </audio>
    )
})

export default Alarm;