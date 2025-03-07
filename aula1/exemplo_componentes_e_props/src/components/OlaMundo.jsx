function OlaMundo(props) {
    if (props.nome)
        return <h1>Olá, {props.nome}!</h1>;
    else
        return <h1>Olá, Mundo!</h1>;
}

export default OlaMundo;
