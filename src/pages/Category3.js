import React from 'react';
import queryString from 'query-string';
import PostList from '../components/Menu/sub/PostList';
import { Route, NavLink, Link } from 'react-router-dom';
import Posts from './Posts';
import Post from './Post';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const Category3 = ({location, match}) => {
    const query = queryString.parse(location.search);
    console.log(query);
    return (
        <div>
  <Navbar bg="light" variant="light" sticky="top" className="shadow p-3 mb-5 bg-body rounded">
  {/* <Navbar variant="dark" sticky="top" className="bg-secondary bg-gradient text-white"> */}
    {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
    <Nav className="mr-auto">
    <Link to={`${match.url}/1`}>Post #1</Link>
    <Link to={`${match.url}/2`}>Post #2</Link>
    <Link to={`${match.url}/3`}>Post #3</Link>
      {/* <Nav.Link href={`${match.url}/1`}>Post #1</Nav.Link>
      <Nav.Link href={`${match.url}/2`}>Post #2</Nav.Link> */}
      <Nav.Link href={`${match.url}/3`}>Post #3</Nav.Link>
      <Link to={`${match.url}/4`}>Post #4</Link>
    </Nav>
  </Navbar>           
   {/* <h2>Category3 {match.params.name}</h2> */}
        <div>
           {/* <ul>
                <li><Link to={`${match.url}/1`}>Post #1</Link></li>
                <li><Link to={`${match.url}/2`}>Post #2</Link></li>
                <li><Link to={`${match.url}/3`}>Post #3</Link></li>
                <li><Link to={`${match.url}/4`}>Post #4</Link></li>
           </ul> */}
           <Route exact path={match.url} render={()=>(<Route path={`${match.url}/1`} component={Post}/>)}/>
           <Route path={`${match.url}/:id`} component={Post}/>
        </div>
            {/* <Route path="/posts" component={PostList}/>
            <Route path="/posts" component={Posts}/>
            <NavLink to="/posts" className="nav-title">Posts</NavLink> */}

        </div>
    );
};

export default Category3;