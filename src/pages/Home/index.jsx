import React, {useState, useCallback} from 'react'
import { useNavigate } from 'react-router-dom';

export default function HomePage() {

    const[value, setValue] = useState();
    const navigate = useNavigate();

    const handleJoinRoom = useCallback(() => {
        navigate(`/room/${value}`);
    }, [navigate, value])

    return (
        <>
            {/* ----------------------------------------------------------------------------------------------------------------- */}
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
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
                    </div>
                </nav>
            </div>
            {/* ----------------------------------------------------------------------------------------------------------------- */}

            <div className="container my-3">
                <input value={value} onChange={(e) => setValue(e.target.value)} type="text" placeholder='Enter Room Code' />
                <button className="btn btn-primary my-3 mx-3" onClick={handleJoinRoom}>Join</button>
            </div>
        </>
    )
}
