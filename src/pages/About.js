import React from 'react';
import queryString from 'query-string';
import Resume from '../components/resume/resume';
import TestEditorForm from '../components/editor/draftjsEditor';

const About = ({location, match}) => {
    const query = queryString.parse(location.search);
    let element = <h2>About {match.params.name}</h2>;
    if(match.params.name === 'resume') {
        element = <Resume />
    }else if(match.params.name === 'sub1') {
        element = <TestEditorForm />
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