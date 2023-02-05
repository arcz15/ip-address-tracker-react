import React, {useRef, useState} from 'react';
import PatternBackground from './assets/pattern-bg.png';
import './App.styles.scss';
import { InfoPanel, Map } from './components';
import {useQuery} from "react-query";
import {getIpLocation} from "./services/api";

const App = () => {

    const [ip, setIp] = useState('8.8.8.8');

    const ipInputRef = useRef<HTMLInputElement>(null);

    const { data, isLoading } = useQuery(['ip_location', ip], () => getIpLocation(ip));

    const location = data?.location?.region + ", " + data?.location?.city + " "
        + data?.location?.postalCode;

    function handleSearch() {
        const inputVal = ipInputRef?.current?.value;
        if(!inputVal) return;

        const ipRegex = /^((25[0-5]|(2[0-4]|1\d|[1-9]|)\d)\.?\b){4}$/;
        if(ipRegex.test(inputVal)) {
            setIp(inputVal);
        }
    }

    return (
        <div className='app'>
            <div className='app__background'>
                <img src={PatternBackground} alt='Pattern background' className='app__background-image'/>
                <div className='app__background-map'>
                    {!isLoading && (
                        <Map lat={data?.location?.lat || 37.3861} long={data?.location?.lng || 122.0839} />
                    )}
                </div>
            </div>
            <div className='app__foreground'>
                <h1 className='app__foreground-title'>IP Address Tracker</h1>
                <div className='app__foreground__searchbar'>
                    <input type='text' ref={ipInputRef} placeholder='Search for any IP address or domain' />
                    <div onClick={handleSearch} className='search-button'></div>
                </div>
                <div className='app__foreground__info-panel'>
                    {!isLoading && (
                        <InfoPanel
                            ip={data.ip}
                            location={location}
                            timezone={`UTC ${data?.location?.timezone}`}
                            isp={data.isp}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default App;
