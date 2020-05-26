var music=new Vue({
    el:"#music",
    data:{
        query:"",
        musicList:[],
        musicSrc:"",
        musicPic:'../static/images/1584964740782.jpeg',
        musicLyric:[],
    },
    methods:{
        /*歌曲搜索*/
        searchMusic:function () {
            var that=this
            axios.get("https://autumnfish.cn/search?keywords="+this.query)
                .then(function (response) {
                    that.musicList=response.data.result.songs
                })
        },
        /*歌曲播放*/
        playMusic:function (musicId) {
            var that=this
            axios.get("https://autumnfish.cn/song/url?id="+musicId)
                .then(function (response) {
                    that.musicSrc=response.data.data[0].url
                },function (error) {
                    console.log(error)
                })
            axios.get("https://autumnfish.cn/song/detail?ids="+musicId)
                .then(function (response) {
                    that.musicPic=response.data.songs[0].al.picUrl
                },function (error) {
                    console.log(error)
                })
            axios.get("https://autumnfish.cn//lyric?id="+musicId)
                .then(function (response) {
                    that.musicLyric=response.data.lrc.lyric.split("[");
                },function (error) {
                    console.log(error)
                })
        }
    }
})

