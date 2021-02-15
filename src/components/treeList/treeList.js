import React, {useEffect, useState} from "react";

export const TreeList= (props) => {
    const [samples, setSamples] = useState([]);
    const [albums, setAlbums] = useState([]);
    const [orderedAlbums, setOrderedAlbums] = useState([]); // combine response samples + albums, based on albumUuid (given by sample)


    // albums each contains uuid
    // samples each contains uuid + albumUuid

    const mockSamples = async () => {
        return new Promise( resolve => {
            resolve([{
                uuid: "xdxdx",
                albumUuid: "1234"
            }, {
                uuid: "abcd",
                albumUuid: "4567"
            }])
        })
    }

    const mockAlbums = () => {
        return new Promise( resolve => {
            resolve([{
                uuid: "1234",
            }, {
                uuid: "4567",
            },
                {
                    uuid: "7899",
                }])
        })
    }

    const combineAlbumsWithSamples = (albums, samples) => {

        console.log("ok")
        console.log(albums)
        console.log(samples)
    }

    useEffect(() => {

        const test = async () => {
            let alb = await mockAlbums()
            setAlbums(alb)
            let samp = await mockSamples()
            setSamples(samp)
            combineAlbumsWithSamples(alb, samp)
        }
        test()

    }, [])

    return (
        <div className="">
            <pre>{JSON.stringify(samples)}</pre>
        </div>
    )

}

