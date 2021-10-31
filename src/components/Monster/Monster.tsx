import React from 'react';
import './Monster.css';

interface Props {
    name: string
};

function Monster({name} : Props) {
    return (
    <div className="monster">
        <img src={`http://robohash.org/${name}?set=set2`} alt=""/>
        <h2>{name}</h2>
    </div>)
}

export default Monster;
