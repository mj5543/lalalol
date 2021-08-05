import React, { Component } from 'react';
// import { Route } from 'react-router-dom';
import { NavLink, useHistory } from 'react-router-dom';
import './Sidebar.css';
// import PostList from './sub/PostList';
// import { Nav } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// const histpry = () => {
//   const history = useHistory();
//   // history를 props에서 얻어왔을 때 처럼 동일하게 사용 가능하다.
  
//   return (
//     history.push('/about')
//   );
// };
function GoButton(props) {
  let history = useHistory();
  function handleClick() {
    history.push("/about/resume");
    props.btnCallback();
  }
  if(props.password === '1234') {
    return (
      <Button variant="primary" onClick={handleClick}>Ok</Button>
    );
  } else {
    return (
      <Button variant="primary" onClick={handleClick} disabled>Ok</Button>
    );
  }
// return (
//     {element}
//   );
}
class Sidebar extends Component {
  constructor() {
    super();
    this.state  = {
      password: '', // 첫번째 비밀번호
      rePassword: '', // 두번째 비밀번호
      pMessage:'', // 확인 메시지 (비밀번호 일치여부를 사용자에게 알려주는 메시지)
      show: false
    };  // 초기 state값을 셋팅해준다. 빈 스트링 값은 false를 뜻한다.
  }
  handleConfirmPassword = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
    if (e.target.value !== '1234') {
      this.setState({
        pMessage: "비밀번호가 일치하지 않습니다.",
        // password: '',
      }) //사용자가 입력한 값이 재확인 비번과 일치하지 않을 경우
    }
    console.log('password--', this.state.password);
  }
  render() {
    // const [show, setShow] = useState(false);
    // const [password, setPassword, getPassword] = useState();
  
    const handleClose = () => {
      this.setState({
        show: false,
        password: ''
      });
    };
    const handleShow = () => {
      this.setState({show: true});
    }
    const handleSubmit = () => {
      // const password = getPassword;
      
      console.log('password--', this.state.password);
    }
    const handleConfirmPassword = () => {
      console.log('password--', this.state.password);
    }
  
    return (
      <div className="p-3 bg-white sidebar-container overflow-auto">
      <a href="/" className="d-flex align-items-center pb-3 mb-3 link-dark text-decoration-none border-bottom">
        <span className="fs-5 fw-semibold">Category</span>
      </a>
      <ul className="list-unstyled ps-0">
        {/* <li className="mb-1">
          <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="false">
            Home
          </button>
          <div className="collapse" id="home-collapse">
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <li><a href="#" className="link-dark rounded">Overview</a></li>
              <li><a href="#" className="link-dark rounded">Updates</a></li>
              <li><a href="#" className="link-dark rounded">Reports</a></li>
            </ul>
          </div>
        </li> */}
        <li className="mb-1">
          <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#about-collapse" aria-expanded="false">
          About
          </button>
          <div className="collapse" id="about-collapse">
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              {/* <li><NavLink exact to="/about/sub1" className="link-dark rounded">About 1</NavLink></li>
              <li><NavLink exact to="/about/sub2" className="link-dark rounded">About 2</NavLink></li> */}
              <li><span className="link-dark rounded" onClick={handleShow}>Resume</span></li>
            </ul>
          </div>
        </li>
        {/* <li className="mb-1">
          <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">
            Dashboard
          </button>
          <div className="collapse" id="dashboard-collapse">
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <li><a href="#" className="link-dark rounded">Overview</a></li>
              <li><a href="#" className="link-dark rounded">Weekly</a></li>
              <li><a href="#" className="link-dark rounded">Monthly</a></li>
              <li><a href="#" className="link-dark rounded">Annually</a></li>
            </ul>
          </div>
        </li> */}
        <li className="border-top my-3"></li>
        <li className="mb-1">
          <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#category1-collapse" aria-expanded="false">
          {/* <Nav.Link href="#category1-sub">
            </Nav.Link> */}
            Util
          </button>
          {/* <a href="#category1-sub" role="button" className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#category1-collapse" aria-expanded="false">Category1</a> */}
          {/* <Nav.Link role="button" href="#category1-sub" className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#category1-collapse" aria-expanded="false">Category1</Nav.Link> */}
          <div className="collapse" id="category1-collapse" data-bs-spy="scroll">
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <li><NavLink exact to="/about/sub1" className="link-dark rounded">Editor</NavLink></li>
              {/* <li><NavLink exact to="/category1" className="link-dark rounded" id="category1-sub"> sub category 1</NavLink></li>
              <li><NavLink exact to="/category1/sub" className="link-dark rounded"> sub category 2</NavLink></li> */}
            </ul>
          </div>
        </li>
        <li className="mb-1">
          <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#category2-collapse" aria-expanded="false">
             React
          </button>
          <div className="collapse" id="category2-collapse">
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <li><NavLink exact to="/category2" className="link-dark rounded"> Intro</NavLink></li>
              <li><NavLink exact to="/category2/sub" className="link-dark rounded"> LifeCyle</NavLink></li>
              <li><NavLink exact to="/category2/sub1" className="link-dark rounded"> Event</NavLink></li>
            </ul>
          </div>
        </li>
        <li className="mb-1">
          <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#category3-collapse" aria-expanded="false">
             Posts
          </button>
          <div className="collapse" id="category3-collapse">
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <li><NavLink exact to="/category3" className="link-dark rounded"> Post Page</NavLink></li>
            </ul>
          </div>
        </li>
        {/* <li className="border-top my-3"></li>
        <li className="mb-1">
          <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#account-collapse" aria-expanded="false">
            Account
          </button>
          <div className="collapse" id="account-collapse">
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <li><a href="#" className="link-dark rounded">New...</a></li>
              <li><a href="#" className="link-dark rounded">Profile</a></li>
              <li><a href="#" className="link-dark rounded">Settings</a></li>
              <li><a href="#" className="link-dark rounded">Sign out</a></li>
            </ul>
          </div>
        </li> */}
      </ul>
      <Modal
      show={this.state.show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header>
        <Modal.Title>접근제한 패스워드 입력</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      {/* <Form>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" value={this.state.password} onChange={this.handleConfirmPassword}/>
        </Form.Group>
      </Form> */}
          <div className="form-group">
            
            <input type="password" name="password" className="form-control" 
            value={this.state.password}
            onChange={this.handleConfirmPassword} />
          </div>
      </Modal.Body>
      <Modal.Footer>
        <GoButton password={this.state.password} btnCallback={handleClose}/>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        {/* <Button variant="primary" onClick={handleSubmit}>Ok</Button> */}
      </Modal.Footer>
    </Modal>
    </div>

//         <div className="menu-container">
// <Accordion defaultActiveKey="0">
//   <Card>
//     <Card.Header className="wp100">
//     <NavLink exact to="/" className="nav-title">
//       <Accordion.Toggle className="btn btn-secondary wp100" variant="link" eventKey="0">
//         Home
//       </Accordion.Toggle>
//       </NavLink>
//     </Card.Header>
//   </Card>
//   <Card>
//     <Card.Header>
//       <Accordion.Toggle className="btn btn-secondary wp100" variant="link" eventKey="1">
//       <div className="nav-title"> About</div>
//       </Accordion.Toggle>
//     </Card.Header>
//     <Accordion.Collapse eventKey="1">
//       <Card.Body className="nav-sub nav-title">
//         <ul>
//           <li><NavLink exact to="/about" className="nav-title">About 1</NavLink></li>
//           <li><NavLink to="/about/sub" className="nav-title">About 2</NavLink></li>
//         </ul>
//       </Card.Body>
//     </Accordion.Collapse>
//   </Card>
//   <Card>
//     <Card.Header>
//       <Accordion.Toggle className="btn btn-secondary wp100" variant="link" eventKey="2">
//       Category1
//       </Accordion.Toggle>
//     </Card.Header>
//     <Accordion.Collapse eventKey="2">
//       <Card.Body className="nav-sub  nav-title">
//         <ul>
//           <li><NavLink to="/category1" className="nav-title">sub category1</NavLink></li>
//           <li><NavLink to="/category1/sub" className="nav-title">sub category2</NavLink></li>
//         </ul>
//       </Card.Body>
//     </Accordion.Collapse>
//   </Card>
//   <Card>
//     <Card.Header>
//       <Accordion.Toggle className="btn btn-secondary wp100" variant="link" eventKey="4">
//       Category2
//       </Accordion.Toggle>
//     </Card.Header>
//     <Accordion.Collapse eventKey="4">
//       <Card.Body className="nav-sub  nav-title">
//         <ul>
//           <li><NavLink to="/category2" className="nav-title">sub category1</NavLink></li>
//           <li><NavLink to="/category2/foo" className="nav-title">sub category2</NavLink></li>
//         </ul>
//       </Card.Body>
//     </Accordion.Collapse>
//   </Card>
//   <Card>
//     <Card.Header>
//       <Accordion.Toggle className="btn btn-secondary wp100" variant="link" eventKey="3">
//       <NavLink to="/posts" className="nav-title">Posts</NavLink>
      
//       </Accordion.Toggle>
//     </Card.Header>
//     <Accordion.Collapse eventKey="3">
//       <Card.Body className="nav-sub">
//         <Route path="/posts" component={PostList}/>
//       </Card.Body>
//     </Accordion.Collapse>
//   </Card>
// </Accordion>
// </div>
    );
  }
};

export default Sidebar;