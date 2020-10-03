import React from 'react';
import {Button, Badge} from 'react-bootstrap';

function PageBadge(){
    return(
        <>
            <Button variant="primary">
                Notifications <Badge variant="light">9</Badge>
                <span className="sr-only">unread messages</span>
            </Button>
            <Button variant="primary">
                Message <Badge variant="light">19</Badge>
                <span className="sr-only">unread messages</span>
            </Button>
        </>
    )
}

export default PageBadge

