import React from 'react';
import './resume.css';

const Resume = ({match}) => {
  const cardStyle = {
    borderLeft: '0px',
    borderRight: '0px',
  }
  const borderNone = {
    border: 'none'
  }
  const alignCenter = {
    textAlign: 'center',
    verticalAlign: 'middle'
  }
  const theadStyle = {
    borderBottom: '1px'
  }
    return (
        <div class="container">
          {/* <div className="content-dimmed"></div> */}
          <div class="card" style={cardStyle}>
            <div class="row g-0">
              <div class="col-md-2">
                <div className="card-body">
                  <h5 class="card-title">Profile</h5>
                </div>
              </div>
              <div class="col-md-10">
                <div class="card-body">
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  {/* <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}
                </div>
              </div>
            </div>
          </div>
          <div class="card" style={cardStyle}>
            <div class="row g-0">
              <div class="col-md-2">
                <div className="card-body">
                  {/* <h5 class="card-title">Work Experience(technical)</h5> */}
                  <h5 class="card-title">Skills</h5>
                </div>
              </div>
              <div class="col-md-10">
                <div class="card-body">
                  <div className="row">
                    <div className="resume">

                  <table className="table table-responsive align-middle table-bordered">
                    <thead style={theadStyle}>
                      <tr className="align-items-center" style={alignCenter}>
                        <th rowSpan="2" scope="col">Project</th>
                        <th rowSpan="2" scope="col">Experience</th>
                        <th colSpan="3" scope="colgroup" style={borderNone}>development</th>
                      </tr>
                      <tr style={alignCenter}>
                        <th scope="col">Tool</th>
                        <th scope="col">DBMS</th>
                        <th scope="col">WAS</th>
                      </tr>
                    </thead>
                    <tbody>
                   
                      <tr>
                        <td>d</td>
                        <td>d</td>
                        <td>d</td>
                        <td>d</td>
                        <td>d</td>
                      </tr>
                    
                    </tbody>
                  </table>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card" style={cardStyle}>
            <div class="row g-0">
              <div class="col-md-2">
              <div className="card-body">
                <h5 class="card-title">Education</h5>
              </div>
              </div>
              <div class="col-md-10">
                <div class="card-body">
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  {/* <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
    );
};

export default Resume;