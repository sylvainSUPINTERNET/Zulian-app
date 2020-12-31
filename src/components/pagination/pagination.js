import React, {useEffect} from "react";


export const Pagination = (props) => {

    const displayPageNb = ( totalPages ) => {
        let arr = new Array(totalPages).fill(0);

        let resultTotal;

        if ( props.totalElements > 0 ) {
            resultTotal = <p>Total résultats {props.totalElements} </p>
        } else {
            resultTotal = <p>Total résultat {props.totalElements}</p>
        }

        return (
            <div className="text-white">
                <div className="rainbow-box y">
                    <ul className="pagination">
                        <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                        {
                            arr.map( page => {
                                return <li className="page-item">
                                    <a className="page-link " href="#">{page + 1}</a>
                                </li>

                            })
                        }
                        <li className="page-item"><a className="page-link" href="#">Next</a></li>
                    </ul>
                </div>

                <div>
                    <p>
                        {resultTotal}
                    </p>
                </div>
            </div>
        );
    }
    return (
        <div>
            <p style={{"color":" red"}}>

                <pre>{JSON.stringify(props)}</pre>
                <nav aria-label="Page navigation example">
                    <ul className="pagination">
                        { displayPageNb(props.totalPages) }
                    </ul>
                </nav>
            </p></div>
    )
};