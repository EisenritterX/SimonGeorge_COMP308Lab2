
//import withRouter from './withRouter';

import React, { Component }  from 'react';

function Home(props)
{


    return (
        <div>
            <h2> Lab 2 Student Course Manager </h2>
            <p>React front-end calls Express REST API to add, 
            list, update, or delete a user, create an article, etc.</p>
        </div>
    );

}
// withRouter will pass updated match, location, and history props 
// to the wrapped component whenever it renders.
export default Home;