import * as Api from '../../utils/api';
import Header from '../../Components/Header';
import Carousel from '../../Components/Carousel';
import Star from '../../Components/Star';
import Collapse from '../../Components/Collapse';
import Footer from '../../Components/Footer';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';

function Fiche() {
    const [Logement, setLogement] = useState({});
    const params = useParams();
    const Id = params.id;
    useEffect(() => {
        Api.getFiche().then((response) => {
            let LogementFind = response.filter((Logement) => Logement.id === Id)
            setLogement(LogementFind[0]);
        })
    }, [Id])

    if (Object.keys(Logement).length === 0) return (<div>
        <Header/>
        <main id='page-loading'>
            <div id='loader'></div>
        </main>
        <Footer/>
        </div>);
    console.log(Logement)

    const listTags = Logement.tags.map((tag) =>
        <li key={tag}>
            {tag}
        </li>
    );

    return (<div id='fiche'>
        <Header />
        <main>
            <Carousel pictures={Logement.pictures} />
            <div id='main'>
                <div id='infosLogements'>
                    <h1>{Logement.title}</h1>
                    <p>{Logement.location}</p>
                    <ul>{listTags}</ul>
                </div>
                <div id='infos'>
                    <div id='infosOwner'>
                        <p>
                            {Logement.host.name}
                        </p>
                        <img src={Logement.host.picture} alt={Logement.host.name} />
                    </div>
                    <div id='notations'>
                        <Star number={Logement.rating} />
                    </div>
                </div>
            </div>
            <div id='collapse'>
                <div className='gridElement'>
                    <Collapse title='Description'>{Logement.description}</Collapse>
                </div>
                <div className='gridElement'>
                    <Collapse title='Équipements'>
                        <ul className='collapse-list'>{Logement.equipments.map((equipment) => {
                            return (<li>{equipment}</li>)
                        })}
                        </ul>
                    </Collapse>
                </div>
            </div>
        </main>
        <Footer />
    </div>)
};

export default Fiche;