import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //当前播放音乐的id
    musicId: null,
    //当前查看歌单的id
    songSheetId: null,
    //当前的播放列表
    playList: []
  },
  mutations: {
    //修改当前播放音乐的id
    setMusicId(state, musicId) {
      state.musicId = musicId
    },
    //修改当前查看歌单的id
    setSongSheetId(state, songSheetId) {
      state.songSheetId = songSheetId
    },
    setplayList(state, playlist) {
      state.playList = playlist

    }
  },
  actions: {},
  modules: {}
})