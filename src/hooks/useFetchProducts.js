import { useState, useEffect } from 'react'


export const useFetchProducts = (item, getService) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect( () => {

        setState({data: [], loading: true});

        // llama al getApi-? Service y le pasa el argumento en el buscador
        getService
            //retorna el conjunto de productos
            .then(results => {

                setTimeout(() => {

                    setState({
                        data: results,
                        loading: false
                    });

                }, /*Tiempo de respuesta milisegundos*/ 170);
            })
    }, [item])
    // [item]  se usa para evitar missing dependency: 'category'

    return state; // { data:[], loading: true };
}