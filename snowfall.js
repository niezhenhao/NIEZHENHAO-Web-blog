function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.style.left = Math.random() * window.innerWidth + 'px';
    snowflake.style.animationDuration = Math.random() * 3 + 2 + 's'; // 介于2-5秒之间
    snowflake.style.opacity = Math.random();
    snowflake.style.fontSize = Math.random() * 10 + 10 + 'px'; // 介于10-20px之间
    snowflake.innerHTML = '❄';
    document.body.appendChild(snowflake);

    // 在动画结束后移除雪花
    setTimeout(() => {
        snowflake.remove();
    }, parseFloat(snowflake.style.animationDuration) * 1000);
}

function snowfall() {
    setInterval(createSnowflake, 100);
}

window.addEventListener('load', snowfall);
