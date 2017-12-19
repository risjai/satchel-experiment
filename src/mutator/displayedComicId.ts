import {mutator, action} from 'satcheljs';
import displayComicNumber from '../action/displayComicNumber';
import getStore from '../store/store';

mutator(displayComicNumber, (msg) => {
    getStore().comicPicBeingDisplayed = msg.idx;
});