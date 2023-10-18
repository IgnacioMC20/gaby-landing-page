import React, { useEffect, useRef } from 'react';
import Parallax from 'parallax-js';
import { Paper, Grid, Card } from '@mui/material';
import ContactForm from './ContactForm';

interface ParallaxBackgroundProps {
    backgroundImage: string;
    children: React.ReactNode;
}

const ParallaxBackground: React.FC<ParallaxBackgroundProps> = ({ children, backgroundImage }) => {
    const parallaxRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (parallaxRef.current) {
            const parallaxInstance = new Parallax(parallaxRef.current);
            return () => {
                parallaxInstance.destroy();
            };
        }
    }, []);

    return (
        <Paper elevation={0} square>
            <div ref={parallaxRef} data-relative-input="true">
                <div data-depth="0.1" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', height: '100vh' }}>
                    {/* Contenido con el efecto de parallax */}
                    {children}
                </div>
            </div>
        </Paper>
    );
};

export default ParallaxBackground;
