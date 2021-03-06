import React from 'react';
import { Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import './SingleBlogCard.css'
// import Button from 'react-bootstrap/Button';

const SingleBlogCard = (props) => {
    // console.log(props)
    const { mainTitle, publishDate, shortDescription, _id } = props.data;

    const history = useHistory();
    const handleBlogItems = _id => {
        history.push(`/details/${_id}`)
    }


    return (
        <div id="blogs">
            <Card className="rounded shadow-lg" style={{ width: '18rem', marginBlock: '1rem', backgroundColor: "#E68966" }} >
                <Card.Body>
                    <Card.Title>{mainTitle}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{publishDate}</Card.Subtitle>
                    <Card.Text>
                        {shortDescription}
                    </Card.Text>
                    <Card.Link className="card-link" onClick={() => handleBlogItems(_id)}>See More ...</Card.Link>

                </Card.Body>
            </Card>
        </div>
    );
};

export default SingleBlogCard;