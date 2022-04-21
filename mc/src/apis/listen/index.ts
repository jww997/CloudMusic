/**
 * @description 音乐
 * @author Gavin
 */
import { https } from '@/utils/modules/https';
import { LISTEN as L } from '@/constant/api/listen';
import * as T from './type';

const api: T.API = {
  // #region about playlist
  getPlaylistCatlist: (params) => https.get(L.GET_PLAYLIST_CATLIST, params),
  getPlaylistHot: (params) => https.get(L.GET_PLAYLIST_HOT, params),
  getTopPlaylist: (params) => https.get(L.GET_TOP_PLAYLIST, params),
  getPlaylistHighqualityTags: (params) => https.get(L.GET_PLAYLIST_HIGHQUALITY_TAGS, params),
  getTopPlaylistHighquality: (params) => https.get(L.GET_TOP_PLAYLIST_HIGHQUALITY, params),
  getRelatedPlaylist: (params) => https.get(L.GET_RELATED_PLAYLIST, params),
  getPlaylistDetail: (params) => https.get(L.GET_PLAYLIST_DETAIL, params),
  getPlaylistDetailDynamic: (params) => https.get(L.GET_PLAYLIST_DETAIL_DYNAMIC, params),
  getPlaylistCreate: (params) => https.get(L.GET_PLAYLIST_CREATE, params),
  getPlaylistDelete: (params) => https.get(L.GET_PLAYLIST_DELETE, params),
  getPlaylistSubscribe: (params) => https.get(L.GET_PLAYLIST_SUBSCRIBE, params),
  getPlaylistSubscribers: (params) => https.get(L.GET_PLAYLIST_SUBSCRIBERS, params),
  getPlaylistTracks: (params) => https.get(L.GET_PLAYLIST_TRACKS, params),
  getPlaylistTrackAdd: (params) => https.get(L.GET_PLAYLIST_TRACK_ADD, params),
  getPlaylistTrackDelete: (params) => https.get(L.GET_PLAYLIST_TRACK_DELETE, params),
  getSimiPlaylist: (params) => https.get(L.GET_SIMI_PLAYLIST, params),
  getRecommendResource: (params) => https.get(L.GET_RECOMMEND_RESOURCE, params),




  getPlaylistUpdatePlaycount: (params) => https.get(L.GET_PLAYLIST_UPDATE_PLAYCOUNT, params),



  getCommentPlaylist: (params) => https.get(L.GET_COMMENT_PLAYLIST, params),
  // #endregion

  // #region about artist
  getArtistList: (params) => https.get(L.GET_ARTIST_LIST, params),
  getArtistSub: (params) => https.get(L.GET_ARTIST_SUB, params),
  getArtistTopSongs: (params) => https.get(L.GET_ARTIST_TOP_SONG, params),
  getArtistSongs: (params) => https.get(L.GET_ARTIST_SONGS, params),
  getArtistSublist: (params) => https.get(L.GET_ARTIST_SUBLIST, params),
  getArtist: (params) => https.get(L.GET_ARTISTS, params),
  getArtistMv: (params) => https.get(L.GET_ARTISTS_MV, params),
  getArtistAlbum: (params) => https.get(L.GET_ARTISTS_ALBUM, params),
  getArtistDesc: (params) => https.get(L.GET_ARTISTS_DESC, params),
  getArtistDetail: (params) => https.get(L.GET_ARTISTS_DETAIL, params),
  getSimiArtists: (params) => https.get(L.GET_SIMI_ARTISTS, params),
  getTopArtists: (params) => https.get(L.GET_TOP_ARTISTS, params),
  getToplistArtist: (params) => https.get(L.GET_TOPLIST_ARTIST, params),
  getArtistNewSong: (params) => https.get(L.GET_ARTIST_NEW_SONG, params),
  getArtistNewMv: (params) => https.get(L.GET_ARTIST_NEW_MV, params),
  getArtistFans: (params) => https.get(L.GET_ARTIST_FANS, params),
  getArtistFollowCount: (params) => https.get(L.GET_ARTIST_FOLLOW_COUNT, params),
  getArtistVideo: (params) => https.get(L.GET_ARTIST_VIDEO, params),
  // #endregion

  // #region about search
  getSearch: (params) => https.get(L.GET_SEARCH, params),
  getCloudsearch: (params) => https.get(L.GET_CLOUDSEARCH, params),
  getSearchDefault: (params) => https.get(L.GET_SEARCH_DEFAULT, params),
  getSearchSuggest: (params) => https.get(L.GET_SEARCH_SUGGEST, params),
  getSearchMultimatch: (params) => https.get(L.GET_SEARCH_MULTIMATCH, params),
  getSearchHot: (params) => https.get(L.GET_SEARCH_HOT, params),
  getSearchHotDetail: (params) => https.get(L.GET_SEARCH_HOT_DETAIL, params),
  // #endregion

  // #region about album
  getAlubum: (params) => https.get(L.GET_ALBUM, params),
  getAlubumDetailDynamic: (params) => https.get(L.GET_ALBUM_DETAIL_DYNAMIC, params),
  getAlubumSub: (params) => https.get(L.GET_ALBUM_SUB, params),
  getAlubumSublist: (params) => https.get(L.GET_ALBUM_SUBLIST, params),
  getAlubumNewest: (params) => https.get(L.GET_ALBUM_NEWEST, params),
  getCommentAlubum: (params) => https.get(L.GET_COMMENT_ALBUM, params),


  // #endregion

  // #region about dj
  getPersonalizedDjprogram: (params) => https.get(L.GET_PERSONALIZED_DJPROGRAM, params),
  getDjBanner: (params) => https.get(L.GET_DJ_BANNER, params),
  getDjPersonalizeRecommend: (params) => https.get(L.GET_DJ_PERSONALIZE_RECOMMEND, params),
  getDjSubscriber: (params) => https.get(L.GET_DJ_SUBSCRIBER, params),
  getUserAudio: (params) => https.get(L.GET_USER_AUDIO, params),
  getDjHot: (params) => https.get(L.GET_DJ_HOT, params),
  getDjProgramToplist: (params) => https.get(L.GET_DJ_PROGRAM_TOPLIST, params),
  getDjToplistPay: (params) => https.get(L.GET_DJ_TOPLIST_PAY, params),
  getDjProgramToplistHours: (params) => https.get(L.GET_DJ_PROGRAM_TOPLIST_HOURS, params),
  getDjToplistHours: (params) => https.get(L.GET_DJ_TOPLIST_HOURS, params),
  getDjToplistNewcomer: (params) => https.get(L.GET_DJ_TOPLIST_NEWCOMER, params),
  getDjToplistPopular: (params) => https.get(L.GET_DJ_TOPLIST_POPULAR, params),
  getDjToplist: (params) => https.get(L.GET_DJ_TOPLIST, params),
  getRadioHot: (params) => https.get(L.GET_RADIO_HOT, params),
  getDjRecommend: (params) => https.get(L.GET_DJ_RECOMMEND, params),
  getDjCatelist: (params) => https.get(L.GET_DJ_CATELIST, params),
  getDjRecommendType: (params) => https.get(L.GET_DJ_RECOMMEND_TYPE, params),
  getDjSub: (params) => https.get(L.GET_DJ_SUB, params),
  getDjSublist: (params) => https.get(L.GET_DJ_SUBLIST, params),
  getDjPaygift: (params) => https.get(L.GET_DJ_PAYGIFT, params),
  getDjCategoryExcludehot: (params) => https.get(L.GET_DJ_CATEGORY_EXCLUDEHOT, params),
  getDjCategoryRecommend: (params) => https.get(L.GET_DJ_CATEGORY_RECOMMEND, params),
  getDjTodayPerfered: (params) => https.get(L.GET_DJ_TODAY_PERFERED, params),
  getDjDetail: (params) => https.get(L.GET_DJ_DETAIL, params),
  getDjProgram: (params) => https.get(L.GET_DJ_PROGRAM, params),
  getDjProgramDetail: (params) => https.get(L.GET_DJ_PROGRAM_DETAIL, params),
  getCommentDj: (params) => https.get(L.GET_COMMENT_DJ, params),







  // #endregion

  getSongUrl: (params) => https.get(L.GET_SONG_URL, params),
  getSongDetail: (params) => https.get(L.GET_SONG_DETAIL, params),
  getlyric: (params) => https.get(L.GET_LYRIC, params),
  getCheckMusic: (params) => https.get(L.GET_CHECK_MUSIC, params),

  getPersonalized: (params) => https.get(L.GET_PERSONALIZED, params),
  getPersonalFm: (params) => https.get(L.GET_PERSONALFM, params),
  
  

  // #region about comment
  // #endregion

  // #region about yunbei
  // #endregion

  // #region about musician
  // #endregion



};

export default api;
