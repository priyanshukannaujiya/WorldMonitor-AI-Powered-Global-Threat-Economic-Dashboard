import { AlertCircle, Anchor, Zap, ShieldAlert, Navigation } from 'lucide-react';

const ConflictTracker = () => {
    return (
        <div className="glass-panel" style={{ padding: '1.5rem', gridColumn: 'span 12' }}>
            <div className="flex-col-mobile" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem', gap: '0.5rem' }}>
                <h3 className="text-gradient hover-glow" style={{ margin: 0, display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.1rem', flexWrap: 'wrap' }}>
                    <ShieldAlert color="var(--accent-red)" className="animated-pulse" />
                    ACTIVE GEOPOLITICAL EVENT: MIDDLE EAST THEATER 2026
                </h3>
                <div className="flex-col-mobile" style={{ display: 'flex', gap: '1rem' }}>
                    <span style={{ color: 'var(--text-secondary)', fontSize: '0.8rem' }}>IMPACT SEVERITY: <span style={{ color: 'var(--accent-red)', fontWeight: 'bold' }}>CRITICAL</span></span>
                    <span style={{ color: 'var(--text-secondary)', fontSize: '0.8rem' }}>STATUS: <span style={{ color: '#ffb700', fontWeight: 'bold' }}>ESCALATING</span></span>
                </div>
            </div>

            <div className="dashboard-grid" style={{ padding: 0, maxWidth: 'none', gap: '1.5rem' }}>

                {/* Economic Impact Vectors */}
                <div className="col-span-4">
                    <h4 style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>Global Economic Vectors</h4>

                    <div style={{ background: 'rgba(0,0,0,0.3)', padding: '1rem', borderRadius: '4px', borderLeft: '3px solid var(--accent-cyan)', marginBottom: '1rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                            <Zap size={18} color="var(--accent-cyan)" />
                            <span style={{ fontWeight: 'bold', color: 'var(--text-primary)' }}>Energy Sector</span>
                        </div>
                        <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0 }}>
                            Oil prices actively volatile. Potential for renewed inflation spikes globally.
                            <span style={{ color: 'var(--accent-red)', display: 'block', marginTop: '0.25rem' }}>Market Risk: High</span>
                        </p>
                    </div>

                    <div style={{ background: 'rgba(0,0,0,0.3)', padding: '1rem', borderRadius: '4px', borderLeft: '3px solid #ffb700' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                            <Anchor size={18} color="#ffb700" />
                            <span style={{ fontWeight: 'bold', color: 'var(--text-primary)' }}>Logistics & Supply Chain</span>
                        </div>
                        <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0 }}>
                            Significant air cargo constraint. Elevated insurance premiums. Shift back to adaptive networks from efficiency-driven models.
                            <span style={{ color: '#ffb700', display: 'block', marginTop: '0.25rem' }}>Cost Increase: +35% YoY</span>
                        </p>
                    </div>
                </div>

                {/* Choke Point Intel */}
                <div className="col-span-4">
                    <h4 style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>Maritime Choke Points Alert</h4>
                    <div style={{ position: 'relative', height: '180px', background: 'var(--bg-dark)', border: '1px solid var(--border-color)', borderRadius: '4px', overflow: 'hidden' }}>
                        {/* Mock map graphic placeholder */}
                        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', opacity: 0.2 }}>
                            <Navigation size={120} color="var(--accent-blue)" />
                        </div>

                        <div style={{ position: 'relative', zIndex: 1, padding: '1rem' }}>
                            <div style={{ marginBottom: '1rem' }}>
                                <span className="status-dot status-negative"></span>
                                <span style={{ fontSize: '0.9rem', color: 'white' }}>Strait of Hormuz (HIGH RISK)</span>
                                <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginLeft: '1rem' }}>Threat to global LNG / Oil passages.</div>
                            </div>
                            <div>
                                <span className="status-dot status-negative"></span>
                                <span style={{ fontSize: '0.9rem', color: 'white' }}>Suez / Red Sea Corridor</span>
                                <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginLeft: '1rem' }}>Major carriers avoiding routes, resulting in extended delays.</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Business Intelligence Stream */}
                <div className="col-span-4">
                    <h4 style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>Sector Impact Analysis</h4>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '0.85rem', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                        <li style={{ display: 'flex', gap: '0.5rem' }}>
                            <AlertCircle size={14} color="var(--accent-green)" style={{ flexShrink: 0, marginTop: '2px' }} />
                            <div>
                                <span style={{ color: 'var(--accent-green)' }}>DEFENSE & TECH RESILIENCE:</span> Israeli defense and tech sectors continue to attract foreign directed investments due to competitive edge.
                            </div>
                        </li>
                        <li style={{ display: 'flex', gap: '0.5rem' }}>
                            <AlertCircle size={14} color="var(--accent-red)" style={{ flexShrink: 0, marginTop: '2px' }} />
                            <div>
                                <span style={{ color: 'var(--accent-red)' }}>HEAVY MANUFACTURING:</span> Vulnerable due to restricted supply lines and high energy costs globally.
                            </div>
                        </li>
                        <li style={{ display: 'flex', gap: '0.5rem' }}>
                            <AlertCircle size={14} color="var(--accent-cyan)" style={{ flexShrink: 0, marginTop: '2px' }} />
                            <div>
                                <span style={{ color: 'var(--accent-cyan)' }}>RESILIENCE INVESTING:</span> 75% of global leaders now view supply chain resilience as a growth driver, accelerating nearshoring.
                            </div>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default ConflictTracker;
