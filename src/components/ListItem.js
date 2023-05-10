import useIndexedDB from '../services/IndexedDB'

function ListItem() {

    const { addData, getData, error } = useIndexedDB();

    const handleAddData = () => {
        addData({ id: 1, name: 'John' });
    };
    
    const handleGetData = () => {
        getData((data) => console.log(data));
    }

    handleAddData();
    handleGetData();

    return (
        <>
            <div className="note">
                <h3>Wow, what a cool note</h3>
                <p>This is an amazing..</p>
            </div>
            <div className="note active">
                <h3>Wow, what a cool note</h3>
                <p>This is an amazing..</p>
            </div>
            <div className="note">
                <h3>Wow, what a cool note</h3>
                <p>This is an amazing..</p>
            </div>
            <div className="note">
                <h3>Wow, what a cool note</h3>
                <p>This is an amazing..</p>
            </div>
            <div className="note">
                <h3>Wow, what a cool note</h3>
                <p>This is an amazinrgg..</p>
            </div>
            <div className="note">
                <h3>Wow, what a cool note</h3>
                <p>This is an amazing..</p>
            </div>
        </>
    )
}

export default ListItem;