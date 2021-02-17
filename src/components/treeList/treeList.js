import React, {useEffect, useState} from "react";
import musicFolderIcon from '../../icons/folder.svg';
import musicFolderColorizedIcon from '../../icons/folder-colorized.svg';
import musicFolderOpen from '../../icons/folder-open.svg';

import Style from "./treeList.style";

export const TreeList= (props) => {
    const [samples, setSamples] = useState([]);
    const [albums, setAlbums] = useState([]);

    let [cacheAlbums, setCacheAlbums] = useState([]);

    let [albumsWithSamplesList, setAlbumsWithSamplesList] = useState([]);

    let [currentSamplesList, setCurrentSamplesList] = useState([])
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

    const clickOnMusicFolder = (ev) => {
        ev.target.src = (new URL(ev.target.src).pathname === musicFolderColorizedIcon ? musicFolderOpen : musicFolderColorizedIcon)
        let filterAlbumUuid = ev.target.id;

        if ( new URL(ev.target.src).pathname === musicFolderOpen ) {
            let currentSamples = albumsWithSamplesList.filter(combined => {
                return combined.album === filterAlbumUuid
            });

            setCurrentSamplesList(currentSamples[0].samples);
        }
    }

    const combineAlbumsWithSamples = (albums, samples) => {

        let combined = [];

        // Get all albums (unique)
        albums.map( (album, i) => {
            if ( !cacheAlbums.includes(album.uuid) ) {
                cacheAlbums = [...cacheAlbums, album.uuid]
                setCacheAlbums([new Set(cacheAlbums)]);
            }
        });

        // dont pass by reference !
        let tmpAlbums = [...cacheAlbums];


        samples.map( sample => {
            if ( cacheAlbums.includes(sample.albumUuid) ) {

                let position = cacheAlbums.indexOf(sample.albumUuid);
                tmpAlbums[position] = ""


                if (typeof combined[position] !== "undefined") {
                    combined[position] = {
                        album: cacheAlbums[position],
                        samples:[...combined[position].samples, sample]
                    }
                } else {
                    combined[position] = {
                        album: cacheAlbums[position],
                        samples: [
                            sample
                        ]
                    }
                }
            }
        });

        tmpAlbums.map( (al,i) => {
            if ( al !== "") {
                combined[i] = {
                    album: al,
                    samples: []
                }
            }
        })

        setAlbumsWithSamplesList(combined);
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
            <code>{JSON.stringify(albumsWithSamplesList)}</code>
            {
                albumsWithSamplesList.map(e => {
                    return <div style={{background: 'red', display:'flex', flexFlow: 'row wrap', justifyContent: 'flex-start',margin: '10px'}}>
                        <img id={e.album} onClick={clickOnMusicFolder} src={musicFolderColorizedIcon} style={Style.icon}/>
                        <p style={{background: 'green'}}>{e.album}</p>
                        {
                            <pre>{JSON.stringify(currentSamplesList)}</pre>
                        }
                    </div>
                })
            }
        </div>
    )

}

