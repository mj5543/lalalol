import React from 'react';
import queryString from 'query-string';
import './stickyContent.css';
import LifeCycle from '../components/category/menual/LifeCycle';
import ReactEvent from '../components/category/menual/ReactEvent';
const Category2 = ({location, match}) => {
    const query = queryString.parse(location.search);
    let element = <h2>About {match.params.name}</h2>;
    console.log(query);
    if(match.params.name === 'sub') {
      element = <LifeCycle />
    } else if(match.params.name === 'sub1') {
      element = <ReactEvent />
    }
  return (
       <div>
         {element}
       </div>
    );
};

export default Category2;