import React from 'react';
import queryString from 'query-string';
import Resume from '../components/resume/resume';

const About = ({location, match}) => {
    const query = queryString.parse(location.search);
    let element = <h2>About {match.params.name}</h2>;
    if(match.params.name === 'resume') {
        element = <Resume />
    }
    console.log(query);
    return (
        <div>
            {element}
            {/* <h2>About {match.params.name}</h2>
            <Resume /> */}
        </div>
    );
};

export default About;