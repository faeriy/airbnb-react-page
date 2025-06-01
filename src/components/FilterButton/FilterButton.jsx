import './FilterButton.scss';
import filterIcon from './img/filters.svg';

function FilterButton() {
    return (
        <div className="filter-button">
            <img className="filter-button__icon" src={filterIcon} alt="Filters" />
            Filters
        </div>
    );
}

export default FilterButton;