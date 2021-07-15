import React from 'react';
import { useParams } from 'react-router-dom';

import PlaceList from '../components/PlaceList';

const DUMMY_PLACES = [
    {
        id: 'p1',
        title: 'Empire State Building',
        description: 'One of the most famous buildings in the globe!',
        imageUrl: 'https://www.great-towers.com/sites/default/files/2019-07/tower_0.jpg',
        address: '20 W 34th St, New York, NY 10001, USA',
        location: {
            lat: 40.74861116670947,
            lng: -73.9856751309138
        },
        creator: 'u1'
    },
    {
        id: 'p2',
        title: 'Emp. State Building',
        description: 'One of the most famous buildings in the globe!',
        imageUrl: 'https://www.great-towers.com/sites/default/files/2019-07/tower_0.jpg',
        address: '20 W 34th St, New York, NY 10001, USA',
        location: {
            lat: 40.74861116670947,
            lng: -73.9856751309138
        },
        creator: 'u2'
    }
];

const UserPlaces = props => {
    const userId = useParams().userId;

    const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId);

    return <PlaceList items={loadedPlaces}/>
};

export default UserPlaces;