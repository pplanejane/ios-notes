import plus from '../resources/icons/create.svg';
import trash from '../resources/icons/trash.svg';

function SearchBox() {
    return (
        <header className="header">
            <div className="header-content">
                <div className="buttons">
                    <button className="btn-create">
                        <img src={plus} alt="Create" className="img-create"/>
                    </button>
                    <button className="btn-delete">
                        <img src={trash} alt="Delete" className="img-delete"/>
                    </button>
                </div>
                <div className="search">
                    <input className="input-search" type="text" placeholder="Search..." id="search"></input>
                </div>
            </div>
        </header>
    )
}

export default SearchBox;