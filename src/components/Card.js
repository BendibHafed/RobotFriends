import React from 'react';
import 'tachyons';

const Card = ({ id, name, username, email }) => {
    return (
        <div className='bg-light-green tc dib br3 pa3 ma2 grow bw2 shadow-5'>        
            <img alt='robots' src={`https://robohash.org/${id}?200x200`}/>
            <div>
                <h2>{name}</h2>
                <h3>{username}</h3>
                <p>{email}</p>
            </div>
        </div>
    );
}
export default Card;