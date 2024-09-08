window.addEventListener('load', function () {
    const btn = document.getElementById('themeSwitcher');
    btn.addEventListener('click', function () {
        document.body.classList.toggle('dark-mode');
    });
    let audios = []
    const tracksEl = document.getElementsByClassName('track')
    for (const track of tracksEl) {
        const img = track.getElementsByTagName('img')[0] || null;
        const audio = track.getElementsByTagName('audio')[0] || null;
        if (img && audio) {
            audios.push(audio)
            img.addEventListener('click', function () {
                if (audio.paused) {
                    audios.forEach(a => {
                        a.pause()
                        if (a !== audio)
                        a.currentTime = 0});
                    audio.play();
                } else {
                    audio.pause();
                }
                
            });
        }
    }
});