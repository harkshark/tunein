const AVAILABLE_FILTERS = ['all', 'popular', 'jazz', 'news'];

const Filters = ({active, handleClick}) => {
    const filtersList = AVAILABLE_FILTERS.map(filter => {
        const isActive = (filter === active);
        return (
            <li
            key={filter}
            className={isActive ? 'active' : ''}
            onClick={() => handleClick(filter)}>
            {filter}
        </li>
        );
    });

        return (
        <ul className="filters">
        {filtersList}
        </ul>
    );
}

export default Filters;
