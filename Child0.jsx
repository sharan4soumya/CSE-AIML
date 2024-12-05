function Child0(props){
    return(
        <>
        <h1>Hello, {props.name}!</h1>
        <h2>{JSON.stringify(props.date)}</h2>
        <h2 style={{marginBottom: "20px"}}>(prop.date.toLocaleString())</h2>
        <p>{props.year.join(" ")}</p>
        </>
    );
}