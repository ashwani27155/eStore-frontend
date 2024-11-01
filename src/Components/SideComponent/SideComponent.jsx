import React, { useState } from 'react';
import '../SideComponent/SideComponent.css';

const SideComponent = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenW, setIsOpenW] = useState(false);
    const [isOpenK, setIsOpenK] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };
    const toggleAccordionW = () => {
        setIsOpenW(!isOpenW);
    };
    const toggleAccordionK = () => {
        setIsOpenK(!isOpenK);
    };

    return (
        <div className='side-nav'>
            <h3>Category</h3>
            <div className="accordion">
                <div className="accordion-item">
                    <button
                        className={`accordion-button ${isOpen ? '' : 'collapsed'}`}
                        onClick={toggleAccordion}
                    >
                        Mens
                    </button>
                    <div className={`accordion-collapse collapse ${isOpen ? 'show' : ''}`}>
                        <div className="accordion-body">
                            <ul>
                                <li><a href="">Coats</a></li>
                                <li><a href="">Jeans</a></li>
                                <li><a href="">Shirts</a></li>
                                <li><a href="">Boxer</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <button
                        className={`accordion-button ${isOpenW ? '' : 'collapsed'}`}
                        onClick={toggleAccordionW}
                    >
                        Womens
                    </button>
                    <div className={`accordion-collapse collapse ${isOpenW ? 'show' : ''}`}>
                        <div className="accordion-body">
                            <ul>
                                <li><a href="">Coats</a></li>
                                <li><a href="">Jeans</a></li>
                                <li><a href="">Frack</a></li>
                                <li><a href="">Boxer</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <button
                        className={`accordion-button ${isOpenK ? '' : 'collapsed'}`}
                        onClick={toggleAccordionK}
                    >
                        Kids
                    </button>
                    <div className={`accordion-collapse collapse ${isOpenK ? 'show' : ''}`}>
                        <div className="accordion-body">
                            <ul>
                                <li><a href="">Coats</a></li>
                                <li><a href="">Jeans</a></li>
                                <li><a href="">Frack</a></li>
                                <li><a href="">Boxer</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SideComponent;
