import {createStore} from 'satcheljs';
import {ComicStore, sampleComicData} from './ComicStore';
import '../mutator/selectedComicId'
import '../orchestrator/DisplayPic'

export default createStore<ComicStore>('MyComicStore', sampleComicData)