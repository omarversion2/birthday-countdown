// غير التاريخ ده لموعد عيد الميلاد
const birthday = new Date('2026-7-2').getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = birthday - now;

    if (distance < 0) {
        document.getElementById('message').innerHTML = '🎂 H.B.d 🎉';
        document.querySelector('.countdown').style.display = 'none';
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = days.toString().padStart(2, '0');
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
}

// تحديث العد التنازلي كل ثانية
setInterval(updateCountdown, 1000);
updateCountdown();