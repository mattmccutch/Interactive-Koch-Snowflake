const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');


function drawSnowflake(level, x1, y1, x5, y5) {
    let diffX, diffY, x2, y2, x3, y3, x4, y4;
    ctx.beginPath();
    if (level == 0) {
        ctx.moveTo(x1, y1);
        ctx.lineTo(x5, y5);
        ctx.stroke();
    } else {
        diffX = x5 - x1;
        diffY = y5 - y1;

        x2 = x1 + diffX / 3;
        y2 = y1 + diffY / 3;

        x3 = (0.5 * (x1 + x5) + Math.sqrt(3) * (y1 - y5) / 6);
        y3 = (0.5 * (y1 + y5) + Math.sqrt(3) * (x5 - x1) / 6);

        x4 = x1 + 2 * diffX / 3;
        y4 = y1 + 2 * diffY / 3;

        drawSnowflake(level - 1, x1, y1, x2, y2);
        drawSnowflake(level - 1, x2, y2, x3, y3);
        drawSnowflake(level - 1, x3, y3, x4, y4);
        drawSnowflake(level - 1, x4, y4, x5, y5);
    }
}

document.getElementById('drawButton').addEventListener('click', function () {
    // Define the triangle properties
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const sideLen = 500;
    const level = document.getElementById('slider').value;

    x = {
        p1: centerX,
        p2: centerX - sideLen / 2,
        p3: centerX + sideLen / 2
    };

    y = {
        p1: centerY - sideLen / 2,
        p2: centerY + sideLen / 2,
        p3: centerY + sideLen / 2
    };
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawSnowflake(level, x.p1, y.p1, x.p2, y.p2)
    drawSnowflake(level, x.p2, y.p2, x.p3, y.p3)
    drawSnowflake(level, x.p3, y.p3, x.p1, y.p1)

});

const slider = document.getElementById('slider');
const sliderValue = document.getElementById('sliderValue');

slider.addEventListener('input', function () {
    sliderValue.textContent = "Order: " + this.value;
});
