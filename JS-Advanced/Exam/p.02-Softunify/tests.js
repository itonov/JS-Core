class SoftUniFy {
    constructor() {
        this.allSongs = {};
    }

    downloadSong(artist, song, lyrics) {
        if (!this.allSongs[artist]) {
            this.allSongs[artist] = {rate: 0, votes: 0, songs: []}
        }

        this.allSongs[artist]['songs'].push(`${song} - ${lyrics}`);

        return this;
    }

    playSong(song) {
        let songArtists = Object.keys(this.allSongs).reduce((acc, cur) => {

            let songs = this.allSongs[cur]['songs']
                .filter((songInfo) => songInfo
                    .split(/ - /)[0] === song);

            if (songs.length > 0) {
                acc[cur] = songs;
            }

            return acc;
        }, {});

        let arr = Object.keys(songArtists);
        let output = "";

        if (arr.length > 0) {

            arr.forEach((artist) => {
                output += `${artist}:\n`;
                output += `${songArtists[artist].join('\n')}\n`;
            });

        } else {
            output = `You have not downloaded a ${song} song yet. Use SoftUniFy's function downloadSong() to change that!`
        }

        return output;
    }

    get songsList() {
        let songs = Object.values(this.allSongs)
            .map((v) => v['songs'])
            .reduce((acc, cur) => {
                return acc.concat(cur);
            }, []);

        let output;

        if (songs.length > 0) {
            output = songs.join('\n');
        } else {
            output = 'Your song list is empty';
        }

        return output;

    }

    rateArtist() {
        let artistExist = this.allSongs[arguments[0]];
        let output;

        if (artistExist) {

            if (arguments.length === 2) {
                artistExist['rate'] += +arguments[1];
                artistExist['votes'] += 1;
            }

            let currentRate = (+(artistExist['rate'] / artistExist['votes']).toFixed(2));
            isNaN(currentRate) ? output = 0 : output = currentRate;

        } else {
            output = `The ${arguments[0]} is not on your artist list.`
        }

        return output;
    }
}

let assert = require("chai").assert;

describe('SoftUniFy class tests', function () {
    it('should contain allSongs initial empty object', function () {
        let testObj = new SoftUniFy();
        assert.isObject(testObj.allSongs, 'Initial empty allSongs is missing')
    });
    it('downloadSong should return the class', function () {
        let testObj = new SoftUniFy();
        assert.isObject(testObj.downloadSong("test", "test", "test"));
    });
    it('should add song to all songs', function () {
        let testObj = new SoftUniFy();
        testObj.downloadSong("testArtist", "testSong", "testLyrics");
        assert.equal(testObj.allSongs.toString(), "[object Object]");
    });
    it('should add song to artist', function () {
        let testObj = new SoftUniFy();
        testObj.downloadSong("testArtist", "testSong", "testLyrics");
        assert.equal(testObj.allSongs["testArtist"]["songs"].length, 1);
    });
    it('should add song to artist', function () {
        let testObj = new SoftUniFy();
        testObj.downloadSong("testArtist", "testSong", "testLyrics");
        assert.isArray(testObj.allSongs["testArtist"]["songs"]);
    });
    it('should return message in case of playing missing song', function () {
        let testObj = new SoftUniFy();
        assert.equal(testObj.playSong("test"), "You have not downloaded a test song yet. Use SoftUniFy's function downloadSong() to change that!");
    });
    it('should return message in case of playing missing song', function () {
        let testObj = new SoftUniFy();
        testObj.downloadSong("firstTest", "firstTest", "firstTest");
        assert.equal(testObj.playSong("test"), "You have not downloaded a test song yet. Use SoftUniFy's function downloadSong() to change that!");
    });
    it('should return searched song', function () {
        let testObj = new SoftUniFy();
        testObj.downloadSong("test", "test", "test");
        assert.equal(testObj.playSong("test"), "test:\ntest - test\n")
    });
    it('should get all downloaded songs', function () {
        let testObj = new SoftUniFy();
        testObj.downloadSong("test", "test", "test");
        testObj.downloadSong("test", "test", "test");
        testObj.downloadSong("test", "test", "test");
        assert.equal(testObj.songsList(), "test - test\ntest - test\ntest - test\n")
    });
    it('should return message in case of empty list', function () {
        let testObj = new SoftUniFy();
        assert.equal(testObj.songsList(), "Your song list is empty");
    });
    it('should return message in case of missing artist', function () {
        let testObj = new SoftUniFy();
        assert.equal(testObj.rateArtist("test"), "The test is not on your artist list.")
    });
    it('should return message in case of missing artist', function () {
        let testObj = new SoftUniFy();
        assert.equal(testObj.rateArtist("test", 22), "The test is not on your artist list.")
    });
    it('should increase rate', function () {
        let testObj = new SoftUniFy();
        testObj.downloadSong("eminem", "testSong", "testing");
        assert.equal(testObj.rateArtist("eminem", 20), 20);
    });
    it('should not increase rate in case of NaN', function () {
        let testObj = new SoftUniFy();
        testObj.downloadSong("eminem", "testSong", "testing");
        assert.equal(testObj.rateArtist("eminem", "test"), 0);
    });
    it('should increase rate', function () {
        let testObj = new SoftUniFy();
        testObj.downloadSong("eminem", "testSong", "testing");
        assert.equal(testObj.rateArtist("eminem"), 1);
    });
});