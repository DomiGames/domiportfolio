'use client'
import React, { useEffect, useRef, useState } from 'react';

const AsciiBackground: React.FC<{ imageUrl: string; outputWidth?: number }> = ({
  imageUrl,
  outputWidth = 100,
}) => {
  const [asciiArt, setAsciiArt] = useState<string>('');
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const convertImageToAscii = async () => {
      try {
        // Load the image
        const image = new Image();
        image.src = imageUrl;
        image.crossOrigin = 'anonymous'; // Allow cross-origin images

        image.onload = () => {
          const canvas = canvasRef.current!;
          const ctx = canvas.getContext('2d')!;

          // Set canvas dimensions
          const aspectRatio = image.height / image.width;
          const width = outputWidth;
          const height = Math.floor(width * aspectRatio);
          canvas.width = width;
          canvas.height = height;

          // Draw the image on the canvas
          ctx.drawImage(image, 0, 0, width, height);

          // Get the image data
          const imageData = ctx.getImageData(0, 0, width, height).data;

          // Define the character set for ASCII art (from darkest to lightest)
          const charSet = ' @%#*+=-:. ';

          let asciiArt = '';

          // Loop through each pixel and convert to ASCII
          for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
              const index = (y * width + x) * 4; // 4 channels (RGBA)
              const r = imageData[index];
              const g = imageData[index + 1];
              const b = imageData[index + 2];

              // Calculate brightness (average of RGB values)
              const brightness = (r + g + b) / 3;

              // Map brightness to a character in the charSet
              const charIndex = Math.floor((brightness / 255) * (charSet.length - 1));
              const char = charSet[charIndex];

              // Add the character to the ASCII art
              asciiArt += char;
            }
            // Add a newline at the end of each row
            asciiArt += '\n';
          }

          // Set the ASCII art state
          setAsciiArt(asciiArt);
        };
      } catch (error) {
        console.error('Error processing the image:', error);
      }
    };

    convertImageToAscii();
  }, [imageUrl, outputWidth]);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        marginTop: 150,
        backgroundColor: 'bg-vampire-dark',
        color: 'gray',
        fontFamily: 'monospace',
        whiteSpace: 'pre',
        fontSize: '10px',
        lineHeight: '8px',
        zIndex: -1, // Ensure it stays in the background
      }}
    >
      {asciiArt}
      <canvas ref={canvasRef} style={{ display: 'none' }} />
    </div>
  );
};

export default AsciiBackground;