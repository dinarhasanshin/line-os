import React, {useState} from 'react';
import s from './App.module.css';
import {merge, fadeInRight, fadeInUp, zoomIn} from 'react-animations';
import styled, { keyframes } from 'styled-components';
import { bounce } from 'react-animations';
// @ts-ignore
import EmbeddedBrowser from 'react-embedded-browser';
import {useSwipeable} from "react-swipeable";
import { config } from 'process';

export const App = () => {
    const tadaFlip = merge(fadeInRight, fadeInUp);

    const Bounce = styled.div`animation: 1s ${keyframes`${fadeInUp}`}`;

    const [state, setState] = useState<boolean>(false);

    const OpenApp = () => {
        setState(!state);
    }
    const handlers = useSwipeable({
        onSwipedUp: (eventData) => setState(!state),
        ...config,
    });

    return (
        <div className={s.os_screen_size}>


            <header>
                <div>

                </div>
                {/*     Секция с верхним toolbar     */}
            </header>
            <main {...handlers}>
                <div onClick={OpenApp} style={{backgroundColor: 'violet', borderRadius: '15px'}}></div>
                <div style={{backgroundColor: 'violet', borderRadius: '15px'}}></div>
                <div style={{backgroundColor: 'violet', borderRadius: '15px'}}></div>
                <div style={{backgroundColor: 'violet', borderRadius: '15px'}}></div>

                <div style={{backgroundColor: 'violet', borderRadius: '15px'}}></div>
                <div style={{backgroundColor: 'violet', borderRadius: '15px'}}></div>
                <div style={{backgroundColor: 'violet', borderRadius: '15px'}}></div>

                {/*     Секция главного экрана      */}
                {
                    state && <Bounce className={state? s.app : s.appFalse}></Bounce>

                }

            </main>
            <footer>
                {/*    Секция нижнего меню навигации    */}
            </footer>
        </div>
    );
};