import { useState, useEffect } from 'react'
import { getGifsService } from '../services/getGifService';


export const useFetchGifs = (category) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect( () => {

        // llama al getGifsService y le pasa el argumento en el buscador
        getGifsService(category)
            //retorna el conjunto de productos
            .then(imgs => {

                setTimeout(() => {

                    setState({
                        data: imgs,
                        loading: false
                    });

                }, 0);
            })

    }, [category])
    // [category]  se usa para evitar missing dependency: 'category'


    return state; // { data:[], loading: true };
}


