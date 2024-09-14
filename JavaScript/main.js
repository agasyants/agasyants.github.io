window.addEventListener('load', function () {
    const btn = document.getElementById('themeSwitcher');
    btn.addEventListener('click', function () {
        if (document.body.classList.contains('dark-mode')) {
            document.body.classList.remove('dark-mode');
            document.body.classList.add('alt-mode');
        } else if (document.body.classList.contains('alt-mode')) {
            document.body.classList.remove('alt-mode');
        } else {
            document.body.classList.add('dark-mode');
        }
    });
    let audios = []
    const tracksEl = document.getElementsByClassName('track')
    for (const track of tracksEl) {
        const img = track.getElementsByTagName('img')[0] || null;
        const audio = track.getElementsByTagName('audio')[0] || null;
        if (img && audio) {
            audio.addEventListener('play', function () {
                Click();
            })
            audio.addEventListener('pause', function () {
                Click();
            })
            audio.addEventListener('ended', function () {
                Click();
            })
            audios.push(audio);
            img.addEventListener('click', function () {
                if (audio.paused) {
                    audio.play();
                } else {
                    audio.pause();
                }
            })
        }
        function Click(){
            if (audio.paused) {
                img.classList.add('pause');
            } else {
                audios.forEach(a => {
                    if (a !== audio){
                        a.currentTime = 0
                        a.pause()}});
                const boombox = document.getElementsByClassName('boombox')[0];
                boombox && boombox.classList.remove('boombox');
                const pause = document.getElementsByClassName('pause')[0];
                pause && pause.classList.remove('pause');
                img.classList.add('boombox');
            }
        }
    };
})