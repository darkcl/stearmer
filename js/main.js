var WebTorrent = require('webtorrent')

var client = new WebTorrent();

var torrentId = 'magnet:?xt=urn:btih:4b3dce31c713b02726f67e2ef49de9ff965ec3b7&tr=udp%3A%2F%2Ftracker.openbittorrent.com%3A80&tr=udp%3A%2F%2Fopen.demonii.com%3A1337&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Fexodus.desync.com%3A6969';

console.log(torrentId);

client.on('torrent', function (torrent) {
    console.log('Ready !');
    console.log(torrent);
});

client.add(torrentId, function (torrent) {

    console.log(torrent);

    var file = torrent.files[0];
    file.appendTo('div#vid');
});