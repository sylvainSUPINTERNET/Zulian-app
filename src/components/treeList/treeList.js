import React, {useEffect, useState} from "react";
import musicFolderIcon from '../../icons/folder.svg';
import musicFolderColorizedIcon from '../../icons/folder-colorized.svg';
import musicFolderOpen from '../../icons/folder-open.svg';

import Style from "./treeList.style";
import {getSamplesAsB64ForAlbum} from "../../api/media/media";

export const TreeList = (props) => {
    const [samples, setSamples] = useState([]);
    const [albums, setAlbums] = useState([]);

    const [display, setDisplay] = useState(new Set());

    let [cacheAlbums, setCacheAlbums] = useState([]);

    let [albumsWithSamplesList, setAlbumsWithSamplesList] = useState([]);


    // albums each contains uuid
    // samples each contains uuid + albumUuid

    const mockSamples = async () => {
        return new Promise(resolve => {
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
                },
                {
                    uuid: '61af071f-0f16-4741-be3d-4f9b153abfa9',
                    albumUuid: "9daacaef-349d-4287-be38-e7e3a1525b0c"
                }, {
                    uuid: '61af071f-0f16-4741-be3d-4f9b153abfa9',
                    albumUuid: "9daacaef-349d-4287-be38-e7e3a1525b0c"
                }])
        })
    }

    const mockAlbums = () => {
        return new Promise(resolve => {
            resolve([{
                uuid: "1234",
            }, {
                uuid: "4567",
            },
                {
                    uuid: "7899",
                }, {
                    uuid: "8888",
                }, {
                    uuid: "d48ee7ed-0936-45e8-b270-e6feb66c7065"
                },
                {
                    uuid: '9daacaef-349d-4287-be38-e7e3a1525b0c',
                }])
        })
    }

    const clickOnMusicFolder = async (ev) => {
        ev.target.src = (new URL(ev.target.src).pathname === musicFolderColorizedIcon ? musicFolderOpen : musicFolderColorizedIcon)
        let filterAlbumUuid = ev.target.id;

        let i = -1;
        albumsWithSamplesList.filter((combined, index) => {
            if (combined.album === filterAlbumUuid) {
                i = index;
                return combined.album === filterAlbumUuid
            }
        });
        console.log(ev.target.id);

        if (!display.has(ev.target.id)) {
            // For rerender, else react does not detect the Set change
            let newDisplay = new Set(new Set([...display.add(ev.target.id)]));
            let {data} = await getSamplesAsB64ForAlbum(ev.target.id, localStorage.getItem("apiPpcToken"))
            console.log("GET SAMPELS AS B64")
            if (i !== -1) {
                console.log(albumsWithSamplesList[i]["samplesAsB64"])
                console.log([...albumsWithSamplesList[i]["samplesAsB64"], ...data])
                albumsWithSamplesList[i]["samplesAsB64"] = [...albumsWithSamplesList[i]["samplesAsB64"], ...data];
                setAlbumsWithSamplesList(albumsWithSamplesList);
                console.log(albumsWithSamplesList);
            }
            setDisplay(newDisplay);
        } else {
            console.log(i);
            albumsWithSamplesList[i]["samplesAsB64"] = [];
            display.delete(ev.target.id);
            let newDisplay = new Set(new Set([...display]));
            setDisplay(newDisplay);
        }


        console.log("TO SEND ?")
        console.log(display)
        console.log("COMBINED")
        console.log(albumsWithSamplesList);
    }

    const combineAlbumsWithSamples = (albums, samples) => {

        let combined = [];

        // Get all albums (unique)
        albums.map((album, i) => {
            if (!cacheAlbums.includes(album.uuid)) {
                cacheAlbums = [...cacheAlbums, album.uuid]
                setCacheAlbums([new Set(cacheAlbums)]);
            }
        });

        // dont pass by reference !
        let tmpAlbums = [...cacheAlbums];


        samples.map(sample => {
            if (cacheAlbums.includes(sample.albumUuid)) {

                let position = cacheAlbums.indexOf(sample.albumUuid);
                tmpAlbums[position] = ""


                if (typeof combined[position] !== "undefined") {
                    combined[position] = {
                        album: cacheAlbums[position],
                        samples: [...combined[position].samples, sample],
                        samplesAsB64: []
                    }
                } else {
                    combined[position] = {
                        album: cacheAlbums[position],
                        samples: [
                            sample
                        ],
                        samplesAsB64: []
                    }
                }
            }
        });

        tmpAlbums.map((al, i) => {
            if (al !== "") {
                combined[i] = {
                    album: al,
                    samples: [],
                    samplesAsB64: []
                }
            }
        })

        setAlbumsWithSamplesList(combined);

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
            {
                albumsWithSamplesList.map(e => {
                    return <div className="rainbow-box" style={{
                        display: 'flex',
                        flexFlow: 'row wrap',
                        justifyContent: 'start',
                        margin: '10px'
                    }}>
                        <div style={{display: 'flex',
                            flexFlow: 'row wrap',
                            justifyContent: 'start', flex: '100%' , background: 'red'}}>
                            <img id={e.album} onClick={clickOnMusicFolder} src={musicFolderColorizedIcon}
                                 style={Style.icon}/>
                            <p style={Style.album}>{e.album}</p>
                        </div>
                        {
                            <ul className={display.has(e.album) === true ? 'd-block' : 'd-none'} style={Style.sampleList}>
                                {
                                    e.samplesAsB64.map(sample => {
                                        return <li>
                                            <audio className="rainbow-box" style={Style.audio} src={sample.b64} controls></audio>
                                            <audio className="rainbow-box" style={Style.audio} src={sample.b64} controls></audio>
                                        </li>
                                    })
                                }
                            </ul>
                        }
                    </div>
                })
            }
        </div>
    )

}

