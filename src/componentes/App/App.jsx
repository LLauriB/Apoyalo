import {Component} from 'react';
import PersonCard from '../../personcard/personcard';

class App extends Component{
    constructor(props){
        super(props);
    }

    render = () => {
        return(
            <>
                <PersonCard firstName={"Doe,"} lastName={"Jane"}
                            age={"45"}
                            HairColor={"Black"}/>
                <PersonCard firstName={"Smith,"} lastName={"John"}
                            age={"88"}
                            HairColor={"Brown"}/>
                <PersonCard firstName={"Fillmore,"} lastName={"Millard"}
                            age={"50"}
                            HairColor={"Brown"}/>
                <PersonCard firstName={"Doe,"} lastName={"Jane"}
                            age={"62"}
                            HairColor={"Brown"}/>
            </>
        )
    }
}
export default App;
