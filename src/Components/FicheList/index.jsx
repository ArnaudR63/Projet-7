import Card from '../Card';
import Logements from '../../backend/logements.json';

function Liste() {
    return(<div id='liste'>
        {Logements.map((Logement) => {
            return(<Card id={Logement.id} title={Logement.title} key={Logement.id} cover={Logement.cover}/>)
        })}
    </div>)
}

export default Liste;