import React from 'react';
import './Dashboard.css'; // Ensure the path is correct

function Dashboard() {
    return (
        <div className="container">
            <aside className="sidebar">
                <div className="logo">
                    <h2>WasteWise</h2>
                </div>
                <nav className="menu">
                    <ul>
                        <li><a href="#" className="active">Dashboard <span className="badge">24</span></a></li>
                        <li><a href="#">Scheduling <span className="badge">100+</span></a></li>
                        <li><a href="#">Education Resources <span className="badge">100+</span></a></li>
                        <li><a href="#">Profile <span className="badge">100+</span></a></li>
                    </ul>
                </nav>
                <div className="support">
                    <a href="#">Support</a>
                    <a href="#">Logout</a>
                </div>
            </aside>
            <main className="main-content">
                <header>
                    <div className="location">
                        <span>Bandra East, Mumbai</span>
                        <a href="#">Change address</a>
                    </div>
                    <div className="notifications">
                        <span className="bell">🔔</span>
                        <span className="badge">5</span>
                    </div>
                </header>
                <section className="hero">
                    <div className="hero-content">
                        <h1>Waste Management</h1>
                        <img src="/waste-management.png" alt="Waste Management" /> {/* Adjust the path as needed */}
                    </div>
                </section>
                <section className="recent">
                    <h2>Most recent</h2>
                    <div className="recent-items">
                        <div className="item"><img src="/item1.png" alt="Item 1" /></div> {/* Adjust the path as needed */}
                        <div className="item"><img src="/item2.png" alt="Item 2" /></div> {/* Adjust the path as needed */}
                        <div className="item"><img src="/item3.png" alt="Item 3" /></div> {/* Adjust the path as needed */}
                        <div className="item"><img src="/item4.png" alt="Item 4" /></div> {/* Adjust the path as needed */}
                    </div>
                </section>
            </main>
        </div>
    );
}

export default Dashboard;
