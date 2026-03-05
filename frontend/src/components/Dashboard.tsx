import { Line, Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, BarElement, ArcElement
} from 'chart.js';
import { AlertTriangle, TrendingUp, TrendingDown, Target } from 'lucide-react';
import ConflictTracker from './ConflictTracker';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, BarElement, ArcElement);

const lineData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
        {
            label: 'AI Investments (B$)',
            data: [12, 19, 30, 45, 60, 85],
            borderColor: '#00f0ff',
            backgroundColor: 'rgba(0, 240, 255, 0.2)',
            tension: 0.4,
        },
        {
            label: 'Defense Contracts (B$)',
            data: [40, 42, 45, 55, 65, 90],
            borderColor: '#ff003c',
            backgroundColor: 'rgba(255, 0, 60, 0.2)',
            tension: 0.4,
        }
    ],
};

const barData = {
    labels: ['USA', 'China', 'EU', 'Taiwan', 'India'],
    datasets: [{
        label: 'Cybersecurity Threat Index',
        data: [65, 80, 45, 90, 50],
        backgroundColor: 'rgba(138, 43, 226, 0.7)',
        borderColor: '#8a2be2',
        borderWidth: 1,
    }]
};

const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            labels: { color: '#e0e6ed' }
        }
    },
    scales: {
        y: {
            grid: { color: 'rgba(43, 86, 172, 0.1)' },
            ticks: { color: '#8b9bb4' }
        },
        x: {
            grid: { color: 'rgba(43, 86, 172, 0.1)' },
            ticks: { color: '#8b9bb4' }
        }
    }
};

const Dashboard = () => {
    return (
        <div className="dashboard-grid">
            <ConflictTracker />

            {/* Top row stats */}
            <div className="col-span-3 glass-panel" style={{ padding: '1.5rem' }}>
                <h4 style={{ color: 'var(--text-secondary)' }}>Critical Alerts</h4>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '1rem' }}>
                    <AlertTriangle color="var(--accent-red)" size={40} className="animated-pulse" />
                    <div>
                        <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--accent-red)' }}>12</div>
                        <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Active geopolitical risks</div>
                    </div>
                </div>
            </div>

            <div className="col-span-3 glass-panel" style={{ padding: '1.5rem' }}>
                <h4 style={{ color: 'var(--text-secondary)' }}>Top Growth Sector</h4>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '1rem' }}>
                    <TrendingUp color="var(--accent-green)" size={40} />
                    <div>
                        <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--accent-green)' }}>Semiconductors</div>
                        <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>+45% YoY Investment</div>
                    </div>
                </div>
            </div>

            <div className="col-span-3 glass-panel" style={{ padding: '1.5rem' }}>
                <h4 style={{ color: 'var(--text-secondary)' }}>Sector Decline</h4>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '1rem' }}>
                    <TrendingDown color="var(--accent-red)" size={40} />
                    <div>
                        <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--accent-red)' }}>Commercial Real Estate</div>
                        <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>-12% Demand Score</div>
                    </div>
                </div>
            </div>

            <div className="col-span-3 glass-panel" style={{ padding: '1.5rem' }}>
                <h4 style={{ color: 'var(--text-secondary)' }}>AI Sentiment Index</h4>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '1rem' }}>
                    <Target color="var(--accent-cyan)" size={40} />
                    <div>
                        <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--accent-cyan)' }}>89/100</div>
                        <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Global Market Optimism</div>
                    </div>
                </div>
            </div>

            {/* Main Charts */}
            <div className="col-span-8 glass-panel" style={{ padding: '1.5rem', height: '400px' }}>
                <h3 className="text-gradient">Sector Trajectory (Predictive)</h3>
                <div style={{ height: 'calc(100% - 30px)' }}>
                    <Line data={lineData} options={chartOptions} />
                </div>
            </div>

            <div className="col-span-4 glass-panel" style={{ padding: '1.5rem', height: '400px' }}>
                <h3 className="text-gradient">Regional Threat Vectors</h3>
                <div style={{ height: 'calc(100% - 30px)' }}>
                    <Bar data={barData} options={chartOptions} />
                </div>
            </div>

            {/* Intelligence Feed */}
            <div className="col-span-12 glass-panel" style={{ padding: '1.5rem' }}>
                <h3 className="text-gradient">Real-Time Global Signals</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>

                    <div className="flex-col-mobile" style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem', gap: '0.25rem' }}>
                        <span style={{ color: 'var(--accent-red)' }}>[RISK SIGNAL] Supply chain disruption detected in Taiwan Straits</span>
                        <span style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>2 min ago • Probability: High</span>
                    </div>

                    <div className="flex-col-mobile" style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem', gap: '0.25rem' }}>
                        <span style={{ color: 'var(--accent-green)' }}>[OPPORTUNITY] Breakthrough in Solid-State Battery tech by European startup</span>
                        <span style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>14 min ago • Sector Impact: +35%</span>
                    </div>

                    <div className="flex-col-mobile" style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem', gap: '0.25rem' }}>
                        <span style={{ color: 'var(--accent-cyan)' }}>[POLICY EVENT] US announces $50B AI infrastructure bill</span>
                        <span style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>1 hr ago • Affected: Tech, Construction</span>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Dashboard;
