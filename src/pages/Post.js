import React from 'react';
import Card from 'react-bootstrap/Card';

const Post = ({match}) => {
    const rows = [];
    const numrows = [{"id" : 1, "name" : "abc"}, {"id" : 2, "name" : "abc"}, {"id" : 3, "name" : "abc"}];
    numrows.map((data, i) => {
        return rows.push(
            <Card style={{ width: '18rem' }} id={data.id} key={i}>
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
            </Card>
        );
    });
    return (
        <div>
            포스트 {match.params.id}
            {rows}
        </div>
    );
};

export default Post;