import Logements from '../../backend/logements.json';
import Header from '../../Components/Header';
import Carousel from '../../Components/Carousel';
import Star from '../../Components/Star';
import Collapse from '../../Components/Collapse';
import Footer from '../../Components/Footer';

function Fiche() {
    const Id = window.location.pathname.split('/fiche/')[1];
    const Logement = Logements.find((Logement) => Logement.id === Id)
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
                    <Collapse title='Description' content={Logement.description} />
                </div>
                <div className='gridElement'>
                    <Collapse title='Équipements' content={Logement.equipments} />
                </div>
            </div>
        </main>
        <Footer />
    </div>)
};

export default Fiche;