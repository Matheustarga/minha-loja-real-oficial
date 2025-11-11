//Importação dos componentes do bootstrap 10/11/2025
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
//Importando o link para transferencia de página
import { Link } from "react-router-dom"

const CardProduto = (props) => {

    // Função para lidar com o delete
    const handleDelete = () => {}


  return (
    <div>
      <Card className="text-center" style={{width:"17rem", height:"35rem"}}>
        {/* Imagem do card */}
        <Card.Img variant="top" height="200px" src={props.imagemUrl != null ? props.imagemUrl : "Imagem padrão(produto sem imagem)"}> 

        </Card.Img>
        <Card.Body>
            {/*simmmmmmmmmmmmmmmmmmmmmmmmmm */}
            {/* Título do card com o nome do produto */}
            <Card.Title className="mb-3"> {props.nome} </Card.Title>

            {/* Subtítulo com o preco do produto */}
            <Card.Subtitle className="mb-2 text-muted"> <b> Preço: </b> {props.precoVenda} </Card.Subtitle>
            <Card.Text><b> Marca: </b>{props.marca}</Card.Text>
            <Card.Text><b> Tamanho: </b>{props.tamanho}</Card.Text>
            <Card.Text><b> Categoria: </b>{props.categoria}</Card.Text>
            <Card.Text><b> Descrição: </b>{props.descricao}</Card.Text>

            {/* Botão de editar produto, passando o id como parametro  */}
            <Card.Link as={ Link } to={`/produtos/editar/${props.id}`}>
                <Button variant="warning"> Editar </Button>
            </Card.Link>

            {/* Botão de excluir */}
            <Card.Link>
                <Button variant="danger" onClick={handleDelete}> Excluir </Button>
            </Card.Link>            

        </Card.Body>
      </Card>
    </div>
  )
}

export default CardProduto
