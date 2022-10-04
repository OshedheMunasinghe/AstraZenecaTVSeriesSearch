import React, {createContext, PropsWithChildren, useEffect, useState} from 'react';
import {Serie} from './interface/interface';
import axios, {AxiosResponse} from 'axios';

interface Shows {
    showNames: string[] | undefined,
    showID : number[] | undefined, // todo ta bort
    smallImage: string[] | undefined,
}

export const SeriesContext = React.createContext<Shows|null>( null)

export const SeriesProvider = ({children}: PropsWithChildren) => {
    const [series, setSeries] = useState<Serie[]>()

    const showNames = series?.map( data => data.name)
    const showID = series?.map( data => data.id) // todo ta bort jag har ingen anvädning till det!
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
        showID: showID, // todo ta bort!
        smallImage: smallImage
    }

    return(
        <SeriesContext.Provider value={value}>
            {children}
        </SeriesContext.Provider>
    )
}
