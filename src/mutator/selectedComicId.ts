import {mutator, action} from 'satcheljs';
import selectComic from '../action/selectComic';
import getStore from '../store/store';

mutator(selectComic, (msg) => {
    getStore().selectedComicId = msg.id;
});