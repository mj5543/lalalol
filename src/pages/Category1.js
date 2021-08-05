import React from 'react';
import queryString from 'query-string';
import Image from 'react-bootstrap/Image';

const Category1 = ({location, match}) => {
    const query = queryString.parse(location.search);
    console.log(query);
    const rows = [];
    const datas = [
      {first: 'Mark', last: 'Otto', handle: '@mdo'},
      {first: 'Jacob', last: 'Thornton', handle: '@fat'},
      {first: 'Larry the Bird', last: '', handle: '@twitter'},
      {first: 'Jone', last: 's', handle: '@mdo'},
    ]
    datas.map((data, index) => {
      return rows.push(
        <tr>
          <th scope="row">{index+1}</th>
          <td>{data.first}</td>
          <td>{data.last}</td>
          <td>{data.handle}</td>
        </tr>
      )
    });
    const tableElement = <div>
        <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          {rows}
          {/* <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td colSpan="2">Larry the Bird</td>
            <td>@twitter</td>
          </tr> */}
        </tbody>
      </table>
    </div>
    let domElement = 
    <div class="clearfix">
      {/* <Image src="holder.js/171x180" className="col-md-6 float-md-end mb-3 ms-md-3" rounded /> */}
  <img src="..." className="col-md-6 float-md-end mb-3 ms-md-3" />

  <p>
    A paragraph of placeholder text. We're using it here to show the use of the clearfix class. We're adding quite a few meaningless phrases here to demonstrate how the columns interact here with the floated image.
  </p>

  <p>
    As you can see the paragraphs gracefully wrap around the floated image. Now imagine how this would look with some actual content in here, rather than just this boring placeholder text that goes on and on, but actually conveys no tangible information at. It simply takes up space and should not really be read.
  </p>

  <p>
    And yet, here you are, still persevering in reading this placeholder text, hoping for some more insights, or some hidden easter egg of content. A joke, perhaps. Unfortunately, there's none of that here.
  </p>
</div>;
    if(match.params.name === 'sub') {
      domElement = tableElement;
    }
    return (
      <div>
        {domElement}
      </div>
    );
};

export default Category1;