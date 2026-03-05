# world-monitor: Real-Time OSINT & Geopolitical Risk Dashboard

![world-monitor](https://img.shields.io/badge/Status-Active-brightgreen.svg)
![React](https://img.shields.io/badge/Frontend-React.js-blue.svg)
![Python](https://img.shields.io/badge/Backend-Python_FastAPI-yellow.svg)

**WorldMonitor** is an AI-powered global economic and geopolitical intelligence platform. It continuously aggregates, analyzes, and visualizes worldwide news, geopolitical events, supply chain risks, startup ecosystems, and macroeconomic indicators. By leveraging open-source intelligence (OSINT), Natural Language Processing (NLP), and Machine Learning (ML), it acts as a decision-support system for analysts, investors, and researchers.

## 🌟 Key Features

* **Global Conflict Tracker:** Interactive mapping and real-time visualization of geopolitical hot zones (e.g., Middle East theater, Taiwan Strait).
* **Supply Chain & Economic Sensors:** Tracks global chokepoints, freight indexes, and energy pricing (e.g., Brent Crude impact).
* **Sector Impact Predictions:** ML-driven trajectory forecasting for specific sectors like cybersecurity, semiconductors, and defense.
* **Live Intelligence Intents:** Streaming ticker of actionable events, alerts, and market opportunities updated dynamically.
* **Premium Glassmorphism UI:** Highly responsive, cutting-edge interface tailored for mobile, tablet, and desktop viewing.

## 🚀 Tech Stack

### Frontend
* **React** + **Vite** + **TypeScript**
* **Tailwind/Vanilla CSS** for deep responsive Glassmorphism styling.
* **Chart.js** & **React-Leaflet** for intensive data visualization and interactive mapping.
* **Lucide-React** for iconography.

### Backend
* **Python** / **FastAPI** (Setup for handling NLP logic, API routes, and scraping integrations).
* Integrations tailored for web-scraping and text-analysis pipelines (e.g., identifying risk sentiment from live news streams).

## 🛠️ Installation & Setup

You can run the full-stack project easily via Docker.

### Running with Docker

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/world-monitor.git
   cd world-monitor
   ```

2. Start the services using Docker Compose:
   ```bash
   docker-compose up --build
   ```
   * *Frontend will be available at: http://localhost:5173*
   * *Backend will be available at: http://localhost:8000*

### Running Locally (Manual)

#### Frontend
```bash
cd frontend
npm install
npm run dev
```

#### Backend
```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
python app/main.py
```

## 📈 Use Cases
* **Investment Analysts:** Track sudden spikes in defense sector sentiment or energy constraints.
* **OSINT Researchers:** Monitor active signals across varied global zones simultaneously without scanning 50 different newsites.
* **Supply Chain Managers:** Spot maritime chokepoint escalations before they delay freight delivery networks.

## 🤝 Contributing
Contributions are always welcome! Feel free to raise an issue, submit a Pull Request, or fork this repository.

## 📜 License
This project is open-source and available under the [MIT License](LICENSE).
