import { NextPage } from "next";
import React, { useState, useEffect } from 'react';

const Rarities: NextPage = () => {
    // Estado para mantener la visibilidad de cada tabla
    const [tabla0Visible, setTabla0Visible] = useState(false);
    const [tabla1Visible, setTabla1Visible] = useState(false);
    const [tabla2Visible, setTabla2Visible] = useState(false);

    // Función para alternar la visibilidad de la tabla 0
    const toggleTabla0 = () => {
        setTabla0Visible(!tabla0Visible);
        if (tabla1Visible || tabla2Visible) {
            setTabla1Visible(false);
            setTabla2Visible(false);
        }
    };

    // Función para alternar la visibilidad de la tabla 1
    const toggleTabla1 = () => {
        setTabla1Visible(!tabla1Visible);
        if (tabla0Visible || tabla2Visible) {
            setTabla0Visible(false);
            setTabla2Visible(false);
        }
    };

    // Función para alternar la visibilidad de la tabla 2
    const toggleTabla2 = () => {
        setTabla2Visible(!tabla2Visible);
        if (tabla0Visible || tabla1Visible) {
            setTabla0Visible(false);
            setTabla1Visible(false);
        }
    };

    // Efecto para cerrar las tablas al hacer scroll down
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 5500) {
                setTabla0Visible(false);
                setTabla1Visible(false);
                setTabla2Visible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <center>
            <div style={{ marginTop: "30px" }}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '5px',

                }}>
                    {/* Botón para la tabla 0 */}
                    <button className="metaportal_fn_buttonLW" onClick={toggleTabla0} title="Click to see info">Rare</button>
                    {/* Botón para la tabla 1 */}
                    <button className="metaportal_fn_buttonLW" onClick={toggleTabla1} title="Click to see info">Super Rare</button>
                    {/* Botón para la tabla 2 */}
                    <button className="metaportal_fn_buttonLW" onClick={toggleTabla2} title="Click to see info">Legendary</button>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div>
                        {/* Tabla 1 */}
                        {tabla1Visible && (
                            <div>
                                <div className="grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px' }}>
                                    <div>
                                        <img

                                            src="/img/traits/SuperRares/Amethyst.webp"
                                            alt="Small Image 1"
                                        />
                                        <p >Amethyst</p>
                                    </div>
                                    <div >
                                        <img

                                            src="/img/traits/SuperRares/Angel.webp"
                                            alt="Small Image 1"
                                        />
                                        <p >Angel</p>
                                    </div>
                                    <div >
                                        <img

                                            src="/img/traits/SuperRares/Black Skull.webp"
                                            alt="Small Image 1"
                                        />
                                        <p >Black Skull</p>
                                    </div>
                                    <div >
                                        <img

                                            src="/img/traits/SuperRares/Blue Scorpion.webp"
                                            alt="Small Image 4"
                                        />
                                        <p >Blue Scorpion</p>
                                    </div>
                                    <div >
                                        <img

                                            src="/img/traits/SuperRares/Chicken.webp"
                                            alt="Small Image 4"
                                        />
                                        <p >Chicken</p>
                                    </div>
                                    <div >
                                        <img

                                            src="/img/traits/SuperRares/Cyborg.webp"
                                            alt="Small Image 4"
                                        />
                                        <p >Cyborg</p>
                                    </div>
                                    <div >
                                        <img

                                            src="/img/traits/SuperRares/Fawkes.webp"
                                            alt="Small Image 4"
                                        />
                                        <p >Fawkes</p>
                                    </div>
                                    <div >
                                        <img

                                            src="/img/traits/SuperRares/Fire Skull.webp"
                                            alt="Small Image 4"
                                        />
                                        <p >Fire Skull</p>
                                    </div>
                                    <div >
                                        <img

                                            src="/img/traits/SuperRares/Frozen.webp"
                                            alt="Small Image 4"
                                        />
                                        <p >Frozen</p>
                                    </div>
                                    <div >
                                        <img

                                            src="/img/traits/SuperRares/Ghost.webp"
                                            alt="Small Image 4"
                                        />
                                        <p >Ghost</p>
                                    </div>
                                    <div >
                                        <img

                                            src="/img/traits/SuperRares/Hood Doom.webp"
                                            alt="Small Image 4"
                                        />
                                        <p >Hood Doom</p>
                                    </div>
                                    <div >
                                        <img

                                            src="/img/traits/SuperRares/Pharaoh.webp"
                                            alt="Small Image 4"
                                        />
                                        <p >Pharaoh</p>
                                    </div>
                                    <div >
                                        <img

                                            src="/img/traits/SuperRares/Roswell.webp"
                                            alt="Small Image 4"
                                        />
                                        <p >Roswell</p>
                                    </div>
                                    <div >
                                        <img

                                            src="/img/traits/SuperRares/The Shark.webp"
                                            alt="Small Image 4"
                                        />
                                        <p >The Shark</p>
                                    </div>
                                    <div >
                                        <img

                                            src="/img/traits/SuperRares/Zombie.webp"
                                            alt="Small Image 4"
                                        />
                                        <p >Zombie</p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    <div>
                        {tabla2Visible && (
                            <div>
                                <div className="grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px' }}>
                                    <div >
                                        <img

                                            src="/img/traits/Legendary/GhostFace.webp"
                                            alt="Small Image 1"
                                        />
                                        <p >Ghost Face</p>
                                    </div>
                                    <div >
                                        <img

                                            src="/img/traits/Legendary/GoodGuy.webp"
                                            alt="Small Image 1"
                                        />
                                        <p >Good Guy</p>
                                    </div>
                                    <div >
                                        <img

                                            src="/img/traits/Legendary/Lecter.webp"
                                            alt="Small Image 1"
                                        />
                                        <p >Lecter</p>
                                    </div>
                                    <div >
                                        <img

                                            src="/img/traits/Legendary/Lemmings.webp"
                                            alt="Small Image 4"
                                        />
                                        <p >Lemmings</p>
                                    </div>
                                    <div >
                                        <img

                                            src="/img/traits/Legendary/Mimo.webp"
                                            alt="Small Image 4"
                                        />
                                        <p >Mimo</p>
                                    </div>
                                    <div >
                                        <img

                                            src="/img/traits/Legendary/Nutcracker.webp"
                                            alt="Small Image 4"
                                        />
                                        <p >Nutcracker</p>
                                    </div>
                                    <div >
                                        <img

                                            src="/img/traits/Legendary/Pool.webp"
                                            alt="Small Image 4"
                                        />
                                        <p >Pool</p>
                                    </div>
                                    <div >
                                        <img

                                            src="/img/traits/Legendary/Pumpkinhead.webp"
                                            alt="Small Image 4"
                                        />
                                        <p >Pumpkin Head</p>
                                    </div>
                                    <div >
                                        <img

                                            src="/img/traits/Legendary/Sam.webp"
                                            alt="Small Image 4"
                                        />
                                        <p >Sam T 'r' T</p>
                                    </div>
                                    <div >
                                        <img

                                            src="/img/traits/Legendary/SithLord.webp"
                                            alt="Small Image 4"
                                        />
                                        <p >Shit Lord</p>
                                    </div>
                                    <div >
                                        <img

                                            src="/img/traits/Legendary/Spartan.webp"
                                            alt="Small Image 4"
                                        />
                                        <p >Spartan</p>
                                    </div>
                                    <div >
                                        <img

                                            src="/img/traits/Legendary/The Cenobite.webp"
                                            alt="Small Image 4"
                                        />
                                        <p >The Cenobite</p>
                                    </div>
                                    <div >
                                        <img

                                            src="/img/traits/Legendary/The Fallen.webp"
                                            alt="Small Image 4"
                                        />
                                        <p >The Fallen</p>
                                    </div>
                                    <div >
                                        <img

                                            src="/img/traits/Legendary/The King.webp"
                                            alt="Small Image 4"
                                        />
                                        <p >The King</p>
                                    </div>
                                    <div >
                                        <img

                                            src="/img/traits/Legendary/The Lich.webp"
                                            alt="Small Image 4"
                                        />
                                        <p >The Lich</p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    <div>
                        {tabla0Visible && (
                            <div>
                                <div className="grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px' }}>
                                    <div>
                                        <img

                                            src="/img/traits/Rare/Black Angel.webp"
                                            alt="Small Image 1"
                                        />
                                        <p >Black Angel</p>
                                    </div>
                                    <div >
                                        <img

                                            src="/img/traits/Rare/Bussines.webp"
                                            alt="Small Image 1"
                                        />
                                        <p >Bussines</p>
                                    </div>
                                    <div >
                                        <img

                                            src="/img/traits/Rare/Imp.webp"
                                            alt="Small Image 1"
                                        />
                                        <p >Imp</p>
                                    </div>
                                    <div >
                                        <img

                                            src="/img/traits/Rare/Kerubin.webp"
                                            alt="Small Image 4"
                                        />
                                        <p >Kerubin</p>
                                    </div>
                                    <div >
                                        <img

                                            src="/img/traits/Rare/On Fire.webp"
                                            alt="Small Image 4"
                                        />
                                        <p >On Fire</p>
                                    </div>
                                    <div >
                                        <img

                                            src="/img/traits/Rare/Red Scorpion.webp"
                                            alt="Small Image 4"
                                        />
                                        <p >Red Scorpion</p>
                                    </div>
                                    <div >
                                        <img

                                            src="/img/traits/Rare/Scorpion.webp"
                                            alt="Small Image 4"
                                        />
                                        <p >Scorpion</p>
                                    </div>
                                    <div >
                                        <img

                                            src="/img/traits/Rare/Skull Killer.webp"
                                            alt="Small Image 4"
                                        />
                                        <p >Skull Killer</p>
                                    </div>
                                    <div >
                                        <img

                                            src="/img/traits/Rare/The Hitman.webp"
                                            alt="Small Image 4"
                                        />
                                        <p >The Hitman</p>
                                    </div>
                                    <div >
                                        <img

                                            src="/img/traits/Rare/The Immortal.webp"
                                            alt="Small Image 4"
                                        />
                                        <p >The Immortal</p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </center>
    );
};

export default Rarities;