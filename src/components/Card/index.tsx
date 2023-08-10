import './style.css';

type CardProps = {
    titulo: string,
    imagem: string,
    descricao: string,
    acoes?: boolean,
    categoria?: string
}

const Card = ({titulo, imagem, descricao, acoes, categoria } : CardProps) => {
    return(
        <>
            <div className="card">
                <h3 className="card-title">
                {titulo}
                </h3>
                {
                    categoria && (
                        <h4>{categoria}</h4>
                    )
                }
                <div className="card-image">
                    <img src={imagem} alt=""/>
                </div>
                <div className="card-content">
                    {descricao}
                </div>
                
                {
                    acoes && (
                    <div className="card-actions">
                        <button>Action</button>
                    </div>
                    )
                }
                
            </div>
        </>
    );
}

export default Card;