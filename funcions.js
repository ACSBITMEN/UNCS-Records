const canvas = document.getElementById('canv');
const ctx = canvas.getContext('2d');

let w = canvas.width = window.innerWidth;
let h = canvas.height = window.innerHeight;
let cols = Math.floor(w / 20) + 1;
const ypos = Array(cols).fill(0);

function matrix() {
    ctx.fillStyle = 'rgba(2, 2, 29, 0.281)';
    ctx.fillRect(0, 0, w, h);

    ctx.fillStyle = '#00BFFF';
    ctx.font = '15px monospace';

    const columnWidth = Math.floor(w / cols);

    ypos.forEach((y, ind) => {
        const text = String.fromCharCode(Math.random() * 128);
        const x = ind * columnWidth;

        ctx.fillText(text, x, y);

        if (y > 100 + Math.random() * 10000) {
            ypos[ind] = 0;
        } else {
            ypos[ind] = y + 20;
        }
    });
}

setInterval(matrix, 90);

window.addEventListener('resize', () => {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
    cols = Math.floor(w / 20) + 1;
    ypos.fill(0);
});
