import { Button } from "react-bootstrap";
import SearchResults from "../SearchResults/SearchResults";
import {useState} from "react"


function Quizzes(){

    const [showResults, setShowResults] = useState(false)
    let results;
    if(showResults){
        results = <SearchResults/>
    }
    return (
        <div>
            <h2>Quiz Home</h2>
            <div>
                <label for="searchquiz">Search Quiz</label>
                <input type="text" id="searchquiz" name="searchquiz"></input>
                <Button variant="success" onClick={() => setShowResults(true)}>Search</Button>
                <br /><br />
                <p>Create a Quiz</p>
                <Button variant="success">+</Button>
            </div>
            <hr/>
            {results}
        </div>
    )
}



export default Quizzes;