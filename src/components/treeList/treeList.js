import React, {useEffect, useState} from "react";

export const TreeList= (props) => {
    const [node, setNodes] = useState([]);
    /*
        TODO
        => Nodejs side, create folder for sampels
        => pas de relation one to many, on fait un truck plutot du style les samples
     */

    /*
    If we click on Node => display lsit of URL and if display on dashboard the MP3
    node = {name: "", "contents": "MP3 URL files"}
    [
        {
          subNode: [
              node: {
                    subNodes: [Node]
              }
          ]
        }

    ]


     */

    // 1 node = directory
    // 2

    useEffect(() => {
        setNodes([
            {
                "test": "ok"
            }
        ])
    }, [])

    return (
        <div className="">
            <ul>
                <li>
                    ok
                    <ul>
                        <li>
                            salut
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    )

}

