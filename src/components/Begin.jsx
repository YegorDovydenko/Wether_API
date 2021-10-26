import { observer } from "mobx-react-lite";
import { useHistory } from "react-router";

const Begin = observer(() => {

    const history = useHistory()     

    return(
        <div className="Begin">
            <h1>This is the wether API app.</h1>
            <h2>You can choose one of the popular cities or enter your own in the text input.</h2>
            <form onSubmit={(e) => {
                    e.preventDefault()
                    history.push(`/${e.target.elements.city.value}`)
                }
            }>
                <input type="text" name="city" placeholder="enter your city" />
            </form>
        </div>
    )
})

export default Begin