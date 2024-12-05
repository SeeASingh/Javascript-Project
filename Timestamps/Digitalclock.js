const clock = document.querySelector('.clock');

const time = () => {
    const now = new Date();

    // Format hours, minutes, and seconds with leading zeros
    const h = String(now.getHours()).padStart(2, '0');
    const m = String(now.getMinutes()).padStart(2, '0');
    const s = String(now.getSeconds()).padStart(2, '0');

    const html = `
        <span>${h}</span> :
        <span>${m}</span> :
        <span>${s}</span>
    `;

    clock.innerHTML = html;
};

// Update the clock every 1 second
setInterval(time, 1000);
