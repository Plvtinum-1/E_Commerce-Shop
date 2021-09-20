import { Card, Button, Container } from 'react-bootstrap';  
import { useForm } from "react-hook-form";
const MyForm = ({ pro }) => {
    const { register, handleSubmit } = useForm();

    console.log(pro)
    return (

        <Container>
        <Card style={{ marginTop: '6rem', width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>

        <input type="text" {...register} name="firstName" />

        
        {/* {pro.map(e => (
            <h1>{e.data.id}</h1>
        ))} */}
        </Container>
    )
}

export default MyForm
