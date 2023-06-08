# Interactive-Koch-Snowflake
This repository contains an interactive visualization of the Koch Snowflake fractal. It uses HTML5 canvas for the rendering and JavaScript for the fractal generation logic.

## Description
The Koch Snowflake, also known as the Koch curve, is a mathematical curve and one of the earliest fractal curves to have been described. This project aims to provide an interactive visualization tool where you can adjust the iteration level (order) to see how the Koch Snowflake evolves.

## File Structure
etude3.js: This file contains the JavaScript code for drawing the Koch Snowflake on a canvas. It defines a recursive function drawSnowflake to draw the snowflake at a given level of detail.
etude3.css: This file contains the CSS code for styling the page elements, like the draw button, slider, and the canvas itself.
index.html: This file creates the canvas on which the snowflake is drawn, the slider for adjusting the level of detail, and a button to trigger the drawing of the snowflake.
How to Use
Open the index.html file in your web browser. You should see a gray box with a slider, a button, and a big white square (which is the canvas where the snowflake will be drawn).

The slider adjusts the level of detail, or "order", of the Koch Snowflake. The value of the order is displayed above the slider.

Click the "Draw Snowflake" button to draw a Koch Snowflake on the canvas with the current order.

Adjust the slider and click the button again to redraw the snowflake with the new order.

## Implementation Details
The snowflake is drawn by starting with a single equilateral triangle, and then for each level of detail, replacing each straight line in the figure with a sequence of four lines that form a smaller equilateral "bump". The coordinates of these lines are calculated using simple geometry.

The order of the snowflake determines how many times this replacement process is repeated. For instance, an order-0 snowflake is just a plain triangle, an order-1 snowflake has a bump on each side, an order-2 snowflake has bumps on the bumps, and so on.

The slider in the UI allows for the snowflake's order to be adjusted between 0 and 10, and the snowflake is redrawn whenever the "Draw Snowflake" button is clicked.
