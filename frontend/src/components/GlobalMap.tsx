import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, CircleMarker, Popup } from 'react-leaflet';
import { Zap, ShieldAlert, Activity, Navigation, Radio } from 'lucide-react';
import { Line } from 'react-chartjs-2';
import 'leaflet/dist/leaflet.css';

const lineData = {
    labels: ['08:00', '10:00', '12:00', '14:00', '16:00', '18:00'],
    datasets: [
        {
            label: 'Brent Crude ($)',
            data: [82, 84, 85, 87, 86, 90],
            borderColor: '#ff003c',
            backgroundColor: 'rgba(255, 0, 60, 0.2)',
            tension: 0.4,
        },
        {
            label: 'Global Freight Index',
            data: [150, 153, 155, 160, 158, 165],
            borderColor: '#00f0ff',
            backgroundColor: 'rgba(0, 240, 255, 0.2)',
            tension: 0.4,
        }
    ],
};

const mapChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { labels: { color: '#e0e6ed', boxWidth: 10 } } },
    scales: {
        y: { display: false },
        x: { ticks: { color: '#8b9bb4', font: { size: 10 } }, grid: { display: false } }
    }
};

const liveIntents = [
    { id: 1, time: '21:05', msg: 'DETECTED: 15% drop in Suez Canal traffic in last 24h', type: 'alert', coords: [29.93, 32.55] },
    { id: 2, time: '21:03', msg: 'MARKET INTENT: Heavily buying Defense ETFs (ITA)', type: 'trade', coords: [38.89, -77.03] },
    { id: 3, time: '21:00', msg: 'LOGISTICS: Air freight rates Asia-Europe spiked +8%', type: 'info', coords: [50.11, 8.68] },
    { id: 4, time: '20:55', msg: 'GEO-POLITICAL: Escalation warning issued for Strait of Hormuz', type: 'risk', coords: [26.56, 56.25] },
    { id: 5, time: '20:50', msg: 'TECH SECTOR: Israeli cybersecurity firms seeing record M&A interest', type: 'opportunity', coords: [32.08, 34.78] },
];

const conflictZones = [
    { name: 'Israel-Middle East Theater', coords: [31.76, 35.21], risk: 'CRITICAL', desc: 'Regional escalation. Impacts global oil & tech.' },
    { name: 'Red Sea / Suez Corridor', coords: [21.38, 38.07], risk: 'HIGH', desc: 'Attacks affecting 12% global trade routes.' },
    { name: 'Taiwan Strait', coords: [23.5, 120.0], risk: 'ELEVATED', desc: 'Tension impacting global semiconductor supply.' },
    { name: 'Ukraine-Russia Front', coords: [48.37, 31.16], risk: 'HIGH', desc: 'Disrupting EU energy matrices and grain exports.' }
];

const GlobalMap = () => {
    const [feed, setFeed] = useState(liveIntents);

    useEffect(() => {
        const interval = setInterval(() => {
            setFeed(prev => {
                if (prev.length === 0) return prev;
                const _new = [...prev];
                const last = _new.pop()!;
                _new.unshift({ ...last, time: new Date().toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' }), id: Date.now() });
                return _new;
            });
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="map-wrapper" style={{ position: 'relative', width: '100%', height: 'calc(100vh - 80px)', backgroundColor: 'var(--bg-dark)' }}>
            {/* Map Layer */}
            <MapContainer
                center={[30, 40]}
                zoom={3}
                style={{ width: '100%', height: '100%', zIndex: 1 }}
                className="map-layer-container"
                zoomControl={false}
            >
                <TileLayer
                    url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                    attribution='&copy; <a href="https://carto.com/">CARTO</a>'
                />

                {conflictZones.map((zone, i) => (
                    <CircleMarker
                        key={i}
                        center={zone.coords as [number, number]}
                        radius={zone.risk === 'CRITICAL' ? 18 : 12}
                        pathOptions={{
                            color: zone.risk === 'CRITICAL' ? 'var(--accent-red)' : 'orange',
                            fillColor: zone.risk === 'CRITICAL' ? 'var(--accent-red)' : 'orange',
                            fillOpacity: 0.5,
                            className: zone.risk === 'CRITICAL' ? 'animated-pulse' : ''
                        }}
                    >
                        <Popup className="futuristic-popup">
                            <div style={{ padding: '0.5rem', background: 'var(--bg-card)', color: 'white' }}>
                                <h4 style={{ margin: '0 0 0.5rem 0', color: zone.risk === 'CRITICAL' ? 'var(--accent-red)' : 'orange' }}>{zone.name}</h4>
                                <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{zone.desc}</p>
                                <div style={{ marginTop: '0.5rem', fontSize: '0.75rem', fontWeight: 'bold' }}>RISK: {zone.risk}</div>
                            </div>
                        </Popup>
                    </CircleMarker>
                ))}

                {/* Live Intent Markers */}
                {feed.map((intent, i) => {
                    if (!intent.coords) return null;
                    const isLatest = i === 0;
                    const markerColor = intent.type === 'risk' || intent.type === 'alert' ? 'var(--accent-red)' : intent.type === 'opportunity' ? 'var(--accent-green)' : 'var(--accent-cyan)';

                    return (
                        <CircleMarker
                            key={`intent-${intent.id}`}
                            center={intent.coords as [number, number]}
                            radius={isLatest ? 20 : 6}
                            pathOptions={{
                                color: markerColor,
                                fillColor: markerColor,
                                fillOpacity: isLatest ? 0.4 : 0.8,
                                weight: isLatest ? 2 : 0,
                                className: isLatest ? 'animated-pulse' : ''
                            }}
                        >
                            <Popup className="futuristic-popup">
                                <div style={{ padding: '0.5rem', background: 'var(--bg-card)', color: 'white' }}>
                                    <h4 style={{ margin: '0 0 0.5rem 0', color: markerColor }}>{isLatest ? 'ACTIVE INTENT' : 'RECENT NETWORK SIGNAL'}</h4>
                                    <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{intent.msg}</p>
                                    <div style={{ marginTop: '0.5rem', fontSize: '0.75rem', fontWeight: 'bold' }}>{intent.time}</div>
                                </div>
                            </Popup>
                        </CircleMarker>
                    );
                })}
            </MapContainer>

            {/* Floating HUD - Left Side */}
            <div className="glass-panel hud-left" style={{ position: 'absolute', top: '20px', left: '20px', zIndex: 10, width: '320px', padding: '1rem' }}>
                <h3 className="text-gradient hover-glow" style={{ fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Activity size={18} /> ECONOMIC WAR IMPACT SENSORS
                </h3>

                <div style={{ height: '180px', marginTop: '1rem' }}>
                    <Line data={lineData} options={mapChartOptions} />
                </div>

                <div style={{ marginTop: '1.5rem', borderTop: '1px solid var(--border-color)', paddingTop: '1rem' }}>
                    <h4 style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', marginBottom: '0.75rem' }}>IMPACTED FREIGHT ROUTES</h4>
                    <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem', alignItems: 'center', fontSize: '0.85rem' }}>
                        <Navigation size={14} color="#00f0ff" />
                        <span>Asia &rarr; Europe (Rerouted +12 Days)</span>
                    </div>
                    <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', fontSize: '0.85rem' }}>
                        <Navigation size={14} color="var(--accent-red)" />
                        <span>Middle East &rarr; Global (Energy Blockage Risk)</span>
                    </div>
                </div>
            </div>

            {/* Floating HUD - Right Side (Live Intents) */}
            <div className="glass-panel hud-right" style={{ position: 'absolute', top: '20px', right: '20px', zIndex: 10, width: '350px', padding: '1rem', maxHeight: 'calc(100vh - 120px)', overflow: 'hidden' }}>
                <h3 className="text-gradient hover-glow" style={{ fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                    <Radio size={18} className="animated-pulse" /> LIVE GLOBAL INTENTS
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {feed.map((intent, idx) => (
                        <div
                            key={intent.id}
                            style={{
                                padding: '0.75rem',
                                background: idx === 0 ? 'rgba(0, 240, 255, 0.1)' : 'rgba(0,0,0,0.3)',
                                borderLeft: `3px solid ${intent.type === 'risk' || intent.type === 'alert' ? 'var(--accent-red)' : intent.type === 'opportunity' ? 'var(--accent-green)' : 'var(--accent-cyan)'}`,
                                transition: 'all 0.5s ease'
                            }}
                        >
                            <div style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', marginBottom: '0.25rem' }}>{intent.time}</div>
                            <div style={{ fontSize: '0.85rem', color: idx === 0 ? 'white' : 'var(--text-secondary)' }}>{intent.msg}</div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default GlobalMap;
