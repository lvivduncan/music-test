let wavesurfer;

// Init & load audio file
document.addEventListener('DOMContentLoaded', function() {

/* 
    // простий еквалайзер
    wavesurfer = WaveSurfer.create({
        container: document.querySelector('#waveform'),
        waveColor: '#A8DBA8',
        progressColor: '#3B8686',
        backend: 'MediaElement',
        mediaControls: false
    });
 */

    // паличками
    var wavesurfer = WaveSurfer.create({
        container: document.querySelector('#waveform'),
        waveColor: '#D9DCFF',
        progressColor: '#4353FF',
        cursorColor: '#4353FF',
        barWidth: 3,
        barRadius: 3,
        cursorWidth: 1,
        height: 200,
        barGap: 3
    });

    // Load audio from URL
    wavesurfer.load('https://ring.techbigs.download/files/kgf-karuvinil-enai-.mp3');
    // wavesurfer.load('//nv.ua/system/Article/speeches/50198415_ukr.mp3');

    // toggle play button
    document.querySelector('[data-action="play"]').addEventListener('click', wavesurfer.playPause.bind(wavesurfer));

});