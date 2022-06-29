import Rect from 'react';
import {EachPostLi,PostLink, PostRepl} from './styledComponet';

import {FontAwesomeIcon} from '@fortawesome/react-fomtawesome';
import{faLocationPin} from '@fortawesome/free-solid-svg-icons';
function EachPost({replCount, title}){
    return(
        <EachPostLi>
            <div>
                <FontAwesomeIcon icon={faLocationPin}/>
                <postLink> {title}</postLink>

            </div>
            <PostRepl>[{replCount}]</PostRepl>
        </EachPostLi>
    );
}

export default EachPost;