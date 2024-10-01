import './header.css'
import DisplayDropdown from '../Dropdown/index';

function Header({ grouping, setGrouping, ordering, setOrdering }: { grouping: string, setGrouping: (grouping: string) => void, ordering: string, setOrdering: (ordering: string) => void }) {

    return (
        <header>
            <DisplayDropdown grouping={grouping} setGrouping={setGrouping} ordering={ordering} setOrdering={setOrdering} />
        </header>
    );
}

export default Header;
