import { useRef, useEffect, useState } from 'react';

import { getElementMousePosition, isPositionInsideArea } from '@lib/util';
import { promiseToLoadImage } from '@lib/images';
import { drawImages } from '@lib/canvas';

import imgBurger from '@images/burger.jpg';

import styles from './Canvas.module.scss';

const Canvas = ({ backgroundColor, headlineFontColor, buttonBackgroundColor, buttonFontColor, width, height, ...rest }) => {
  const canvasRef = useRef();
  const burgerRef = useRef();
  const [isBurger, setIsBurger] = useState(false);

  // Dimensions and settings

  const canvasWidth = width;
  const canvasHeight = height;
  const canvasCenterX = canvasWidth / 2;
  const canvasCenterY = canvasHeight / 2;

  const contentPadding = 25;

  const headlineTextSize = 36;
  const headlineTextX = canvasCenterX - ( 178 / 2);
  const headlineTextY = canvasCenterY + ( ( headlineTextSize - ( headlineTextSize * .1 ) ) / 2 );

  const buttonWidth = 150;
  const buttonHeight = 50;
  const buttonX = canvasWidth - buttonWidth - contentPadding;
  const buttonY = canvasHeight - buttonHeight - contentPadding;

  const buttonTextSize = 18;
  const buttonTextY = canvasHeight - ( buttonTextSize - (buttonTextSize  * .1)  ) - contentPadding;

  useEffect(() => {
    (async function loadImages() {
      const { img } = await promiseToLoadImage({
        url: imgBurger
      });
      burgerRef.current = img;
    })();
  }, []);


  // Event handlers that listen clicks on the canvas

  useEffect(() => {
    const canvas = canvasRef?.current;
    canvas.addEventListener('click', handleOnCanvasClick);
    return () => {
      canvas.removeEventListener('click', handleOnCanvasClick);
    }
  }, [canvasRef, handleOnCanvasClick]);

  /**
   * handleOnCanvasClick
   */

  function handleOnCanvasClick(e) {
    const canvas = canvasRef?.current;

    const canvasWidthCurrent = canvas.offsetWidth;
    const multiplier = canvasWidthCurrent / canvasWidth;

    const mousePosition = getElementMousePosition({
      element: canvas,
      clientX: e.clientX,
      clientY: e.clientY
    });
    
    const isButtonClick = isPositionInsideArea(mousePosition, {
      x: buttonX * multiplier,
      y: buttonY * multiplier,
      width: buttonWidth * multiplier,
      heigth: buttonHeight * multiplier
    })

    if ( isButtonClick ) {
      setIsBurger(!isBurger);
    }
  }

  // Draws all of the text, shapes, and imagery 

  useEffect(() => {
    const canvas = canvasRef?.current;
    const context = canvas.getContext('2d');

    // Background

    context.fillStyle = backgroundColor;
    context.fillRect(0, 0, canvasWidth, canvasHeight);

    // If we have a burger, let's show one!
    // Otherwise, show a headline

    if ( isBurger ) {
      drawImages({
        context,
        images: [
          {
            image: burgerRef.current,
            x: 0,
            y: 0,
            width: canvasWidth,
            height: canvasHeight
          }
        ]
      })
    } else {
      context.font = `${headlineTextSize}pt Arial`;
      context.fillStyle = headlineFontColor;
      context.fillText('Hungry?', headlineTextX, headlineTextY);
    }

    // Button Background

    context.beginPath();
    context.rect(buttonX, buttonY, buttonWidth, buttonHeight); 
    context.fillStyle = buttonBackgroundColor;
    context.fill(); 
    context.closePath();

    // Button Text
    
    context.font = `${buttonTextSize}pt Arial`;
    context.fillStyle = buttonFontColor;

    if ( isBurger ) {
      const buttonTextX = canvasWidth - 105 - contentPadding;
      context.fillText('Reset', buttonTextX, buttonTextY);
    } else {
      const buttonTextX = canvasWidth - 120 - contentPadding;
      context.fillText('Let\'s Eat', buttonTextX, buttonTextY);
    }

  }, [canvasRef, width, height, backgroundColor, buttonBackgroundColor, buttonFontColor, isBurger]);

  return (
    <div className={styles.canvas}>
      <canvas ref={canvasRef} width={width} height={height} {...rest}  />
    </div>
  )
}

export default Canvas;