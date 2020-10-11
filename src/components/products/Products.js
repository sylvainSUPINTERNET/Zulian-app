import React from "react";

import Menu from "../Menu";
import Card from "../card/Card";

export const Products = ( {} ) => {
    return (
        <div className="">
            <header className="">
                <Menu activeTab="home"></Menu>
            </header>
            <div className="container mt-2 black-background">
                <div className="row">
                    <div className="col-md-6 mt-4">
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <label className="input-group-text" htmlFor="inputGroupSelect01">Catégorie</label>
                            </div>
                            <select className="custom-select" id="inputGroupSelect01">
                                <option selected> - choisir une catégorie -</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                    </div>

                    <div className="col-md-6 mt-4">
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <label className="input-group-text" htmlFor="inputGroupSelect01">Catégorie</label>
                            </div>
                            <select className="custom-select" id="inputGroupSelect01">
                                <option selected> - choisir une catégorie -</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                    </div>

                </div>
            </div>
            <main className="container witness mb-4">
                <div className="row">
                    <div className="col-md-3 mb-3">
                        <Card backgroundColor={'purple-gradient'}></Card>
                    </div>
                    <div className="col-md-3 mb-3">
                        <Card backgroundColor={'purple-gradient'}></Card>
                    </div>
                    <div className="col-md-3 mb-3">
                        <Card backgroundColor={'purple-gradient'}></Card>
                    </div>
                    <div className="col-md-3 mb-3">
                        <Card backgroundColor={'purple-gradient'}></Card>
                    </div>
                    <div className="col-md-3 mb-3">
                        <Card backgroundColor={'purple-gradient'}></Card>
                    </div>
                </div>

                <nav aria-label="Page navigation example" style={{background : 'white'}}>
                    <ul className="pagination justify-content-center">
                        <li className="page-item disabled">
                            <a className="page-link" href="#" tabIndex="-1">Previous</a>
                        </li>
                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                        <li className="page-item">
                            <a className="page-link" href="#">Next</a>
                        </li>
                    </ul>
                </nav>

            </main>
        </div>
    )
};
