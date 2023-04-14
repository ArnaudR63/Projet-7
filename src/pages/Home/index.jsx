import Header from '../../Components/Header';
import Banner from '../../Components/Images/Banner-home';
import Liste from '../../Components/FicheList'
import Footer from '../../Components/Footer';

function Home() {
    return (
        <div id='home'>
            <Header />
            <main>
                <Banner />
                <Liste />
            </main>
            <Footer />
        </div>
    )
};

export default Home;
