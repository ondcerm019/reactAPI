import {useState, useEffect} from "react";
import axios from "axios";
import Item from "./Item";

export const List = ({date}) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        setIsLoading(true);
        let formattedDate = date.getFullYear() + "" + date.getMonth() + "" + date.getDate();
        axios.get("https://www.pslib.cz/tomas.kazda/api/kurzycnbapi.php", date)
        .then(res => {
            setResponse(res.date);
        })
        .catch(err => {
            setResponse(null);
            setError(err.message);
            console.log(err);
        })
        .then(() => {
            setIsLoading(false);
        });
    }, [date]);




    if (isLoading) {
        console.log("he")
        return <p>...nahrávání dat...</p>
    }
    else if (error) {
        return <div className="error">{error}</div>
    }
    else if (response) {
        console.log(response)
        return (
            <>
                <p>{response.date}</p>
                <table>
                    <tbody>
                        {response.items.map((item, index) => {
                            <Item key={index} content={item} />
                        })}
                    </tbody>
                </table>
            </>
        )
    }
    else {
        return <p>Připravuji komponentu</p>
    }
}

export default List;