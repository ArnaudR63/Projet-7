import Card from '../Card';
import * as Api from '../../utils/api';
import { useEffect, useState } from 'react';

function Liste() {

    const [Logements, setLogements] = useState([]);

    useEffect(() => {
        Api.getLogements().then((response) => {
            setLogements(response);
        })
    }, [])

    if (Logements.length === 0) return (<main id='page-loading'>
            <div id='loader'></div>
        </main>)

    return(<div id='liste'>
        {Logements.length && Logements.map((Logement) => {
            return(<Card id={Logement.id} title={Logement.title} key={Logement.id} cover={Logement.cover}/>)
        })}
    </div>)
}

export default Liste;