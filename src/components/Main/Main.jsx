import './Main.scss';
import Card from '../Card/Card';
import cardsData from '../../data/cards.json';

function Main() {
    return (
        <main className="main">
            <div className="container">
                <div className="main__cards">
                    {
                        cardsData.map(
                            (item) => {
                                return (
                                    <Card key={item.id} data={item} />
                                )
                            }
                        )
                    }
                </div>
            </div>
        </main>
    );
}

export default Main;
