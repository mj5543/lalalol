import React from 'react';
import { Link, Route } from 'react-router-dom';
import Post from '../../../pages/Post'; 

const PostList = ({match}) => {
    return (
        <div class="nav-title">
           <ul>
                <li><Link to={`${match.url}/1`} className="nav-title">Post #1</Link></li>
                <li><Link to={`${match.url}/2`} className="nav-title">Post #2</Link></li>
                <li><Link to={`${match.url}/3`} className="nav-title">Post #3</Link></li>
                <li><Link to={`${match.url}/4`} className="nav-title">Post #4</Link></li>
           </ul>
           <Route exact path={match.url} render={()=>(<h3>Please select any post</h3>)}/>
           <Route path={`${match.url}/:id`} component={Post}/>
        </div>
    );
};

export default PostList;