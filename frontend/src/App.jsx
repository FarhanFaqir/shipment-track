import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

function App() {
    const [id, setId] = useState('');
    const [shipmentData, setShipmentData] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`http://localhost:3000/api/shipment/${id}`, {
                method: 'GET'
            });
            const data = await response.json();
            setShipmentData(data.data);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <>
            <Header />
            <div className='center-content'>
                <div className="p-5 mb-4 bg-body-tertiary rounded-3">
                    <div className="container py-3">
                        <div className="container">
                            <div className="row height d-flex justify-content-center align-items-center">
                                <div className="col-md-6">
                                    <form onSubmit={handleSubmit} className="form">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                            <path d="M10 2a8 8 0 015.666 13.773l4.53 4.53a1 1 0 01-1.414 1.414l-4.53-4.53A8 8 0 1110 2zm0 2a6 6 0 100 12 6 6 0 000-12z" />
                                        </svg>
                                        <div className="form-sb">
                                            <input
                                                type="text"
                                                className="form-control form-input"
                                                placeholder="Search shipment..."
                                                value={id}
                                                onChange={(e) => setId(e.target.value)}
                                            />
                                            <button type="submit" className="btn btn-primary">Search</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                    <div className="card mb-3 mt-5 shipment-details">
                        <img src="../public/delivery.jpg" className="card-img-top delivery-image" alt="..."/>
                        {shipmentData && (
                        <div className="card-body">
                            <div className='shipment-list'>
                                <h5 className="card-title">Shipment ID</h5>
                                <p className="card-text">{shipmentData?.shipmentId}</p>
                            </div>
                            <div className='shipment-list'>
                                <h5 className="card-title">Status</h5>
                                <p className="card-text">{shipmentData?.status}</p>
                            </div>
                            <div className='shipment-list'>
                                <h5 className="card-title">Estimated Delivery</h5>
                                <p className="card-text">{shipmentData?.estimatedDelivery}</p>
                            </div>
                            <div className='shipment-list'>
                                <h5 className="card-title">Origin</h5>
                                <p className="card-text">{shipmentData?.origin}</p>
                            </div>
                            <div className='shipment-list'>
                                <h5 className="card-title">Destination</h5>
                                <p className="card-text">{shipmentData?.destination}</p>
                            </div>
                        </div>
                        )}
                    </div>
            </div>
        </>
    );
}

export default App;
