
"use client";

import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

/**
 * Custom hook to initialize and manage the Lenis smooth scrolling instance.
 * @param {object} options - Configuration options for Lenis.
 */
export function useLenis(options = {}) {
  useEffect(() => {
    // 1. Initialize Lenis instance
    const lenis = new Lenis({
      duration: 1.2, // Scroll duration
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Default easing function
      direction: 'vertical',
      gestureDirection: 'vertical',
      smoothTouch: false,
      // Pass any custom options provided
      ...options, 
    });

    // 2. Define the RAF (Request Animation Frame) loop
    function raf(time) {
      lenis.raf(time);
      // Recursively call raf to create the animation loop
      requestAnimationFrame(raf);
    }

    // 3. Start the animation loop
    requestAnimationFrame(raf);

    // 4. Cleanup function
    return () => {
      // Destroy the Lenis instance when the component unmounts
      lenis.destroy();
    };
  }, [options.duration, options.easing, options.lerp, options.wheelMultiplier]);
  // Dependency array includes common options to allow re-initialization if they change
}