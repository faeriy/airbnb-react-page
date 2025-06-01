import './Categories.scss';
import FilterButton from '../FilterButton/FilterButton';
import CategoryItem from '../CategoryItem/CategoryItem';

import categoriesData from '../../data/categories.json';

const Categories = () => {
    console.log(categoriesData);
    return (
        <div className="categories">
            <div className="container">
                <div className="categories__row">
                    <div className="categories__list">
                        {
                            categoriesData.map(
                                (item, index) => (<CategoryItem key={index} title={item.title} img={item.img} />)
                            )
                        }
                    </div>
                    <div className="categories__filter">
                        <FilterButton/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Categories;