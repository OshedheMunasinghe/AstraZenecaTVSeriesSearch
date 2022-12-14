import React, {createContext, PropsWithChildren, useEffect, useState} from 'react';
import {Serie} from './interface/interface';
import axios, {AxiosResponse} from 'axios';

interface Shows {
    showNames: string[] | undefined,
    smallImage: string[] | undefined,
}

export const SeriesContext = React.createContext<Shows|null>( null)

export const SeriesProvider = ({children}: PropsWithChildren) => {
    const [series, setSeries] = useState<Serie[]>()

    const showNames = series?.map( data => data.name)
    const smallImage = series?.map(data => data.image.medium)

    useEffect(() => {
        axios.get<Serie[]>('https://api.tvmaze.com/shows')
            .then((response: AxiosResponse) => {
                // console.log('Users: ', response.data);
                setSeries(response.data);

            });
    }, []);

    const value:Shows = {
        showNames: showNames,
        smallImage: smallImage
    }

    return(
        <SeriesContext.Provider value={value}>
            {children}
        </SeriesContext.Provider>
    )
}
