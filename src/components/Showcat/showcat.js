import React from 'react';
import { Link } from 'react-router-dom';

import Resource from '../../Resource';
import { PetImage } from './styles';

const ShowCat = ({numOfCats}) => {
    console.log(numOfCats);
    const webURL = `https://api.thecatapi.com/v1/images/search/?api_key=live_S03pBcaI0oKfo1KxdFexq8DSWQwp0LyByyzcnw6Dj5lhxA5VHoUjljNt4eLyBbIo&limit=${numOfCats}`
    const render = (data) => {
        if (data.loading === true) return <p>loading ...</p>
        return (data.trans.map(cat => (
            <Link to='/adopt-form' state={{id: cat.id, src: cat.url}}>
                <PetImage className='image' src={cat.url} alt='cat img' />
            </Link>
        )))
    }

    return (
        <Resource path={webURL} render={render} />
    )
}

export default ShowCat