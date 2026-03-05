import { Globe, Activity, ScanLine, LayoutDashboard } from 'lucide-react';

interface HeaderProps {
    currentView: 'dashboard' | 'map';
    onViewChange: (view: 'dashboard' | 'map') => void;
}

const Header: React.FC<HeaderProps> = ({ currentView, onViewChange }) => {
    return (
        <header className="header-bar flex-col-mobile" style={{ gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', width: '100%', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <ScanLine size={32} color="var(--accent-cyan)" className="animated-pulse" />
                    <div>
                        <h1 style={{ margin: 0, fontSize: '1.5rem', background: 'linear-gradient(90deg, #fff, #8b9bb4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                            WORLD<span style={{ color: 'var(--accent-cyan)', WebkitTextFillColor: 'initial' }}>MONITOR</span>
                        </h1>
                        <div style={{ fontSize: '0.7rem', color: 'var(--accent-cyan)', letterSpacing: '0.2em' }}>
                            GLOBAL ECONOMIC INTELLIGENCE
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap', width: '100%', justifyContent: 'flex-start' }} className="w-full-mobile">
                <div className="hide-on-mobile" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span className="status-dot status-positive"></span>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>SYSTEM ONLINE</span>
                </div>
                <div className="hide-on-mobile" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Activity size={18} color="var(--accent-green)" />
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>DATA FEED: STABLE</span>
                </div>
                <div style={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end' }}>
                    <button className="btn" onClick={() => onViewChange(currentView === 'dashboard' ? 'map' : 'dashboard')}>
                        {currentView === 'dashboard' ? (
                            <>
                                <Globe size={16} style={{ marginRight: '8px', verticalAlign: 'middle' }} />
                                <span>MAP VIEW</span>
                            </>
                        ) : (
                            <>
                                <LayoutDashboard size={16} style={{ marginRight: '8px', verticalAlign: 'middle' }} />
                                <span>DASHBOARD</span>
                            </>
                        )}
                    </button>
                </div>
            </div>
        </header >
    );
};

export default Header;
