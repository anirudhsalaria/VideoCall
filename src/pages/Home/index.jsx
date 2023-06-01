import React from 'react'

export default function HomePage() {
    return (
        <>
            {/* ----------------------------------------------------------------------------------------------------------------- */}
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a className="navbar-brand" href="/">VideoCall</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="/">Home</a>
                            </li>
                        </ul>

                    </div>
                </nav>
            </div>
            {/* ----------------------------------------------------------------------------------------------------------------- */}
            <div className="container">
                <textarea name="area" id="myId" cols="30" rows="10"></textarea>
            </div>

        </>
    )
}
