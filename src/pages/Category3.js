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
      <Nav.Item className="nav-link px-2 text-white">
        <Link to={`${match.url}/1`} className="nav-link"><span className="btn btn-outline-dark me-2">Post #1</span></Link>

      </Nav.Item>
      <Nav.Item className="nav-link px-2 text-white">
        {/* <Nav.Link href={`${match.url}/2`}><span className="btn btn-outline-dark me-2">Post #2</span></Nav.Link> */}
        <Link to={`${match.url}/2`} className="nav-link"><span className="btn btn-outline-dark me-2">Post #2</span></Link>
      </Nav.Item>
      <Nav.Item className="nav-link px-2 text-white">
      <Link to={`${match.url}/3`} className="nav-link"><span className="btn btn-outline-dark me-2">Post #3</span></Link>
      </Nav.Item>
      <Nav.Item className="nav-link px-2 text-white">
        <Link to={`${match.url}/4`} className="nav-link"><span className="btn btn-outline-dark me-2">Post #4</span></Link>
      </Nav.Item>
     
    </Nav>
  </Navbar>           
   {/* <h2>Category3 {match.params.name}</h2> */}
        <div>
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