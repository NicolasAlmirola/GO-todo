import React from 'react';
import Clock from 'react-live-clock';

function ClockWidget() {
    return (
        <div>
        <h2>Reloj</h2>
        <Clock format={'HH:mm:ss'} ticking={true} timezone={'America/New_York'} />
        </div>
    );
}

export { ClockWidget };
