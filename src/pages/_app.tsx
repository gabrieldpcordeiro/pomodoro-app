// _app.tsx

import React, { useEffect } from 'react';

import '../styles/globals.css';
import Head from 'next/head';
import { AppProps } from 'next/app';

function PomodoroApp({ Component, pageProps }: AppProps) {
    useEffect(() => {
        // You can include any global logic here, such as Google Analytics or other scripts
    }, []);

    return (
        <>
            <Head>
                <title>Pomodoro App</title>
                {/* Additional head tags go here */}
            </Head>
            <div className="app-container">
                {/* Your application header or layout components can go here */}
                <header>
                </header>
                <main>
                    {/* The Component represents the current page being accessed */}
                    <Component {...pageProps} />
                </main>
                <footer>
                    {/* Footer content */}
                </footer>
            </div>
        </>
    );
}

export default PomodoroApp;
