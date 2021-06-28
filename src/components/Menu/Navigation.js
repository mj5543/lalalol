import React, { useState, useContext, callback } from 'react';
import { Route } from 'react-router-dom';
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import { NavLink } from 'react-router-dom';
import './Menu.css';
// import { Posts } from '../../pages';
import PostList from './sub/PostList';
// import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';
// function ContextAwareToggle({ children, eventKey, callback }) {
//     const currentEventKey = useContext(AccordionContext);
  
//     const decoratedOnClick = useAccordionToggle(
//       eventKey,
//       () => callback && callback(eventKey),
//     );
  
//     const isCurrentEventKey = currentEventKey === eventKey;
  
//     return (
//         <button class="btn btn-secondary dropdown-toggle" onClick={() => decoratedOnClick} data-target="#collapseOne" aria-expanded={open} aria-controls="collapseOne">
//           {children}
//         </button>
//     );
//   }
const Navigation = () => {
    // const activeStyle = {
    //     color: '#666',
    //     fontSize: '1.5rem'
    // };
    // const [open, setOpen] = useState(false);
    return (
        // <div className="menu-container">
        //     <ul>
        //         <li><NavLink exact to="/" activeStyle={activeStyle}>Home</NavLink></li>
        //         <li><NavLink exact to="/about" activeStyle={activeStyle}>About</NavLink></li>
        //         <li><NavLink to="/about/foo" activeStyle={activeStyle}>About Foo</NavLink></li>
        //         <li><NavLink to="/posts" activeStyle={activeStyle}>Posts</NavLink></li>
        //     </ul>
        // </div>
        <div className="menu-container">
<Accordion defaultActiveKey="0">
  <Card>
    <Card.Header className="wp100">
    <NavLink exact to="/" className="nav-title">
      <Accordion.Toggle className="btn btn-secondary wp100" variant="link" eventKey="0">
        Home
      </Accordion.Toggle>
      </NavLink>
    </Card.Header>
    {/* <Accordion.Collapse eventKey="0">
      <Card.Body className="nav-sub">Hello! I'm the body</Card.Body>
    </Accordion.Collapse> */}
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle className="btn btn-secondary wp100" variant="link" eventKey="1">
      <div className="nav-title"> About</div>
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="1">
      <Card.Body className="nav-sub nav-title">
        <ul>
          <li><NavLink exact to="/about" className="nav-title">About 1</NavLink></li>
          <li><NavLink to="/about/sub" className="nav-title">About 2</NavLink></li>
        </ul>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle className="btn btn-secondary wp100" variant="link" eventKey="2">
      Category1
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="2">
      <Card.Body className="nav-sub  nav-title">
        <ul>
          <li><NavLink to="/category1" className="nav-title">sub category1</NavLink></li>
          <li><NavLink to="/category1/sub" className="nav-title">sub category2</NavLink></li>
        </ul>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle className="btn btn-secondary wp100" variant="link" eventKey="4">
      Category2
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="4">
      <Card.Body className="nav-sub  nav-title">
        <ul>
          <li><NavLink to="/category2" className="nav-title">sub category1</NavLink></li>
          <li><NavLink to="/category2/foo" className="nav-title">sub category2</NavLink></li>
        </ul>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle className="btn btn-secondary wp100" variant="link" eventKey="3">
      <NavLink to="/posts" className="nav-title">Posts</NavLink>
      
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="3">
      <Card.Body className="nav-sub">
      {/* <NavLink to="/posts" className="nav-title">Posts</NavLink> */}
        <Route path="/posts" component={PostList}/>
        {/* <PostList /> */}
      </Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>
</div>
    );
};

export default Navigation;