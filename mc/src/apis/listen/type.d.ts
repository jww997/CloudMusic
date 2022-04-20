import { ResType } from '@/utils/modules/https';
import * as P from './typeParams';
import * as R from './typeResult';

export interface API {
  // #region about playlist
  getPlaylistCatlist: (params?: P.PARAMS_PLAYLIST_CATLIST) => Promise<R.RESULT_PLAYLIST_CATLIST>,
  getPlaylistHot: (params?: P.PARAMS_PLAYLIST_HOT) => Promise<R.RESULT_PLAYLIST_HOT>,
  getTopPlaylist: (params: P.PARAMS_TOP_PLAYLIST) => Promise<R.RESULT_TOP_PLAYLIST>;
  getPlaylistHighqualityTags: (params?: P.PARAMS_PLAYLIST_HIGHQUALITY_TAGS) => Promise<R.RESULT_PLAYLIST_HIGHQUALITY_TAGS>;
  getTopPlaylistHighquality: (params: P.PARAMS_TOP_PLAYLIST_HIGHQUALITY) => Promise<R.RESULT_TOP_PLAYLIST_HIGHQUALITY>;
  getRelatedPlaylist: (params: P.PARAMS_RELATED_PLAYLIST) => Promise<R.RESULT_RELATED_PLAYLIST>;
  getPlaylistDetail: (params: P.PARAMS_PLAYLIST_DETAIL) => Promise<R.RESULT_PLAYLIST_DETAIL>;
  getPlaylistDetailDynamic: (params: P.PARAMS_PLAYLIST_DETAIL_DYNAMIC) => Promise<R.RESULT_PLAYLIST_DETAIL_DYNAMIC>;
  getPlaylistUpdatePlaycount: (params: P.PARAMS_PLAYLIST_UPDATE_PLAYCOUNT) => Promise<R.RESULT_PLAYLIST_UPDATE_PLAYCOUNT>;
  getPlaylistCreate: (params: P.PARAMS_PLAYLIST_CREATE) => Promise<R.RESULT_PLAYLIST_CREATE>;
  getPlaylistDelete: (params: P.PARAMS_PLAYLIST_DELETE) => Promise<R.RESULT_PLAYLIST_DELETE>;
  getPlaylistSubscribe: (params: P.PARAMS_PLAYLIST_SUBSCRIBE) => Promise<R.RESULT_PLAYLIST_SUBSCRIBE>;
  getPlaylistSubscribers: (params: P.PARAMS_PLAYLIST_SUBSCRIBERS) => Promise<R.RESULT_PLAYLIST_SUBSCRIBERS>;
  getPlaylistTracks: (params: P.PARAMS_PLAYLIST_TRACKS) => Promise<R.RESULT_PLAYLIST_TRACKS>;
  getPlaylistTrackAdd: (params: P.PARAMS_PLAYLIST_TRACK_ADD) => Promise<R.RESULT_PLAYLIST_TRACK_ADD>;
  getPlaylistTrackDelete: (params: P.PARAMS_PLAYLIST_TRACK_DELETE) => Promise<R.RESULT_PLAYLIST_TRACK_DELETE>;
  getSimiPlaylist: (params: P.PARAMS_SIMI_PLAYLIST) => Promise<R.RESULT_SIMI_PLAYLIST>;
  getRecommendResource: (params?: P.PARAMS_RECOMMEND_RESOURCE) => Promise<R.RESULT_RECOMMEND_RESOURCE>;




  getCommentPlaylist: (params: P.PARAMS_COMMENT_PLAYLIST) => Promise<R.RESULT_COMMENT_PLAYLIST>,
  // #endregion

  // #region about artist
  getArtistList: (params?: P.PARAMS_ARTIST_LIST) => Promise<ResType<R.RESULT_ARTIST_LIST>>;
  getArtistSub: (params: P.PARAMS_ARTIST_SUB) => Promise<ResType<R.RESULT_ARTIST_SUB>>;
  getArtistTopSongs: (params: P.PARAMS_ARTIST_TOP_SONGS) => Promise<ResType<R.RESULT_ARTIST_TOP_SONGS>>;
  getArtistSongs: (params: P.PARAMS_ARTIST_SONGS) => Promise<ResType<R.RESULT_ARTIST_SONGS>>;
  getArtistSublist: (params: P.PARAMS_ARTIST_SUBLIST) => Promise<ResType<R.RESULT_ARTIST_SUBLIST>>;
  getArtist: (params: P.PARAMS_ARTIST) => Promise<ResType<R.RESULT_ARTIST>>;
  getArtistMv: (params: P.PARAMS_ARTIST_MV) => Promise<ResType<R.RESULT_ARTIST_MV>>;
  getArtistAlbum: (params: P.PARAMS_ARTIST_ALBUM) => Promise<ResType<R.RESULT_ARTIST_ALBUM>>;
  getArtistDesc: (params: P.PARAMS_ARTIST_DESC) => Promise<ResType<R.RESULT_ARTIST_DESC>>;
  getArtistDetail: (params: P.PARAMS_ARTIST_DETAIL) => Promise<ResType<R.RESULT_ARTIST_DETAIL>>;
  getSimiArtists: (params: P.PARAMS_SIMI_ARTISTS) => Promise<ResType<R.RESULT_SIMI_ARTISTS>>;
  getTopArtists: (params: P.PARAMS_TOP_ARTISTS) => Promise<ResType<R.RESULT_TOP_ARTISTS>>;
  getToplistArtist: (params: P.PARAMS_TOPLIST_ARTIST) => Promise<ResType<R.RESULT_TOPLIST_ARTIST>>;
  getArtistNewSong: (params: P.PARAMS_ARTIST_NEW_SONG) => Promise<ResType<R.RESULT_ARTIST_NEW_SONG>>;
  getArtistNewMv: (params: P.PARAMS_ARTIST_NEW_MV) => Promise<ResType<R.RESULT_ARTIST_NEW_MV>>;
  getArtistFans: (params: P.PARAMS_ARTIST_FANS) => Promise<ResType<R.RESULT_ARTIST_FANS>>;
  getArtistFollowCount: (params: P.PARAMS_ARTIST_FOLLOW_COUNT) => Promise<ResType<R.RESULT_ARTIST_FOLLOW_COUNT>>;
  getArtistVideo: (params: P.PARAMS_ARTIST_VIDEO) => Promise<ResType<R.RESULT_ARTIST_VIDEO>>;
  // #endregion

  // #region about search
  getSearch: (params: P.PARAMS_SEARCH) => Promise<R.RESULT_SEARCH>,
  getCloudsearch: (params: P.PARAMS_CLOUDSEARCH) => Promise<R.RESULT_CLOUDSEARCH>,
  getSearchDefault: (params: P.PARAMS_SEARCH_DEFAULT) => Promise<R.RESULT_SEARCH_DEFAULT>,
  getSearchSuggest: (params: P.PARAMS_SEARCH_SUGGEST) => Promise<R.RESULT_SEARCH_SUGGEST>,
  getSearchMultimatch: (params: P.PARAMS_SEARCH_MULTIMATCH) => Promise<R.RESULT_SEARCH_MULTIMATCH>,
  getSearchHot: (params: P.PARAMS_SEARCH_HOT) => Promise<R.RESULT_SEARCH_HOT>,
  getSearchHotDetail: (params: P.PARAMS_SEARCH_HOT_DETAIL) => Promise<R.RESULT_SEARCH_HOT_DETAIL>,
  // #endregion

  // #region about album
  getAlubum: (params: P.PARAMS_ALUBUM) => Promise<R.RESULT_ALUBUM>;
  getAlubumDetailDynamic: (params: P.PARAMS_ALUBUM_DETAIL_DYNAMIC) => Promise<R.RESULT_ALUBUM_DETAIL_DYNAMIC>;
  getAlubumSub: (params: P.PARAMS_ALUBUM_SUB) => Promise<R.RESULT_ALUBUM_SUB>;
  getAlubumSublist: (params: P.PARAMS_ALUBUM_SUBLIST) => Promise<R.RESULT_ALUBUM_SUBLIST>;
  getAlubumNewest: (params: P.PARAMS_ALUBUM_NEWEST) => Promise<R.RESULT_ALUBUM_NEWEST>;
  getCommentAlubum: (params: P.PARAMS_COMMENT_ALUBUM) => Promise<R.RESULT_COMMENT_ALUBUM>;



  // #endregion


  getSongUrl: (params: P.PARAMS_SONG_URL) => Promise<R.RESULT_SONG_URL>;
  getSongDetail: (params: P.PARAMS_SONG_DETAIL) => Promise<R.RESULT_SONG_DETAIL>,
  getlyric: (params: P.PARAMS_LYRIC) => Promise<R.RESULT_LYRIC>,
  getCheckMusic: (params: P.PARAMS_CHECK_MUSIC) => Promise<R.RESULT_CHECK_MUSIC>,

  getPersonalized: (params?: P.PARAMS_PERSONALIZED) => Promise<ResType<R.RESULT_PERSONALIZED>>;


}
