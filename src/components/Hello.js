const name = 'Hassan';

const displayMessage = () =>{
    return "I need help!"
};

function Hello(){
    return <h1>The message is: {displayMessage()} + {name}</h1>;
}

export default Hello;