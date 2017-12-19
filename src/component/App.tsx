import * as React from 'react';
import {observer} from 'mobx-react';
import {dispatch} from 'satcheljs';
import selectMycomic from '../action/selectComic'
import getStore from '../store/store'

@observer
export default class App extends React.Component<any,any>{
    constructor(props:any)
    {
        super(props);
    }
    dispatchAction = (event:any,id:any) => {
        selectMycomic(id,"s");
    }
    render() {
        const store = getStore();
        const {comicBooks} =store;
        const list = Object.keys(comicBooks).map(id => (<a href="#"><li onClick= {(e) => this.dispatchAction(e,id)}>{store.comicBooks[id].name}</li></a>))
        return(
        <div>
            <h1>Few good comics. Click to view cover temporarily</h1>
            <ol>
                {list}
            </ol>
            <div>Last clicked comic id is <h3>{store.selectedComicId}</h3></div>
            <div>Comic being displayed is <h3>{store.comicPicBeingDisplayed == null ? "None" : comicBooks[store.comicPicBeingDisplayed].name}</h3></div>

        </div>
        )
    }
}