import React, {useEffect, useState} from "react";

export const TreeList= (props) => {
    const [samples, setSamples] = useState([]);
    const [albums, setAlbums] = useState([]);

    let [cacheAlbums, setCacheAlbums] = useState([]);

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
            },
                {
                    uuid: "bbhh",
                    albumUuid: "7899"
                },
                {
                    uuid: "xxrr",
                    albumUuid: "7899"
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
                },    {
                    uuid: "8888",
                },])
        })
    }

    const combineAlbumsWithSamples = (albums, samples) => {

        let combined = [];

        // Get all albums (unique)
        albums.map( (album, i) => {
            if ( !cacheAlbums.includes(album.uuid) ) {
                cacheAlbums = [...cacheAlbums, album.uuid]
                setCacheAlbums([new Set(cacheAlbums)]);
            }
        })

        samples.map( sample => {
            if ( cacheAlbums.includes(sample.albumUuid) ) {

                let position = cacheAlbums.indexOf(sample.albumUuid);


                if ( typeof combined[position] !== "undefined" ) {
                    combined[position].samples = [...combined[position].samples, sample];
                } else {
                    combined[position] = {
                        album: cacheAlbums[position],
                        samples: [
                            sample
                        ]
                    }
                }

            } else {
                // TODO => not working because we loop OVER samples, and so if one album is not linked to the sample, never added to the list
                // album with nothing inside
                let position = cacheAlbums.indexOf(sample.albumUuid);
                combined[position] = {
                    album: cacheAlbums[position],
                    samples: []
                }
            }
        });


        console.log(combined);
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

