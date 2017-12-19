import {orchestrator} from 'satcheljs';
import selectComic from '../action/selectComic';
import displayComicNumber from '../action/displayComicNumber';
import getStore from '../store/store';

orchestrator(selectComic, () => {
    downloadAndDisplayPic(getStore().selectedComicId)
});

function downloadAndDisplayPic(id: any) {
    let url=""
    console.log(typeof(id))
    switch(id) {
        case "1":
            url="https://static5.comicvine.com/uploads/original/0/40/5663900-archie%2319smallwood.jpg"
            break
        case "2":
            url="https://nerdist.com/wp-content/uploads/2017/08/Rick-and-Morty-Portal.jpg"
            break
    }
        let img = document.createElement('img');
        img.src = url;
        document.body.appendChild(img);
    
        new Promise(function(resolve, reject){
        displayComicNumber(id);
        setTimeout(() => {
          img.remove();
          resolve();
        }, 3000);
    }).then(
       () => displayComicNumber(null)
    )
}