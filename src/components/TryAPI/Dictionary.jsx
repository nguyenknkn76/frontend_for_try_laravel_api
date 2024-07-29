import { useState } from "react"
import TryAPIService from "../../services/TryAPIService"

const Dictionary = () => {
    const [searchTerm, setSearchTerm] = useState("")
    const [result, setResult] = useState(null)

    
    const searchDictionary = async (e) =>{
        e.preventDefault()
        await TryAPIService
            .dictionary(searchTerm)
            .then(res => setResult(res))
        
        setSearchTerm('')
        console.log('sus', result[0].word)
    }

    return(
        <div>
            this is Dictionary
            <form onSubmit={searchDictionary}> 
                <input type='text' value={searchTerm}  onChange={(e)=> setSearchTerm(e.target.value)}/> ~ enter search key here
                <button type="submit">search</button>
            </form>
            <h3>result</h3>
            {
                (result != null) && 
                (
                    <div>
                        <ul>
                            <li>word: {result[0]?.word}</li>
                            <li>pos: {result[0]?.meanings[0]?.partOfSpeech}</li>
                            <li>definition: {result[0]?.meanings[0]?.definitions[0].definition}</li>
                        </ul>
                        
                    </div>
                )

            }
            
        </div>
    )
}

export default Dictionary