import React from 'react';
import './InfoPanel.styles.scss';

type InfoPanelProps = {
    ip: string,
    location: string,
    timezone: string,
    isp: string
}

const InfoPanel = (props: InfoPanelProps) => {
    return (
        <div className='info-panel'>
            <div className='info-panel__element'>
                <p className='info-panel__element-title'>IP ADDRESS</p>
                <p className='info-panel__element-text'>{props.ip}</p>
            </div>
            <div className='info-panel__divider'></div>
            <div className='info-panel__element'>
                <p className='info-panel__element-title'>LOCATION</p>
                <p className='info-panel__element-text'>{props.location}</p>
            </div>
            <div className='info-panel__divider'></div>
            <div className='info-panel__element'>
                <p className='info-panel__element-title'>TIMEZONE</p>
                <p className='info-panel__element-text'>{props.timezone}</p>
            </div>
            <div className='info-panel__divider'></div>
            <div className='info-panel__element'>
                <p className='info-panel__element-title'>ISP</p>
                <p className='info-panel__element-text'>{props.isp}</p>
            </div>
        </div>
    );
};

export default InfoPanel;