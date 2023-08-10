import "./style.css"

const CardList = ({children})  => {
    return (
    <>
    <div className="card-list">
        {children}
    </div>
    </>
    );
};

export default CardList;