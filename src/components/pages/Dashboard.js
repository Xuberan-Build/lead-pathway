// src/components/pages/Dashboard.js
import React, { useState, useEffect } from 'react';
import BaseModal from '../modal/BaseModal';
import './Dashboard.css'; // Import the Dashboard CSS
import { Line, Pie, Bar } from 'react-chartjs-2';
import 'chart.js/auto'; // Necessary for Chart.js v3+

const Dashboard = ({ isOpen, onClose, onNext, onPrev }) => {
  const [showDetails, setShowDetails] = useState(false);

  // Log when the modal opens
  useEffect(() => {
    console.log(`Dashboard modal isOpen: ${isOpen}`);
  }, [isOpen]);

  // Log when the component renders
  console.log('Dashboard component rendered');

  // 1. Form Submissions and Drop-offs
  const formSubmissionsData = {
    labels: ['Form Views', 'Form Starts', 'Form Submissions'],
    datasets: [
      {
        label: 'Count',
        data: [1000, 700, 500],
        backgroundColor: 'rgba(255, 122, 89, 0.6)',
        borderColor: 'rgba(255, 122, 89, 1)',
        borderWidth: 1,
      },
    ],
  };

  const formSubmissionsOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  // 2. Contacts Created by Source
  const contactsBySourceData = {
    labels: ['Organic Search', 'Paid Search', 'Social Media', 'Other'],
    datasets: [
      {
        data: [40, 25, 20, 15],
        backgroundColor: [
          'var(--secondary-color)',
          '#ffce85',
          '#a4dbcc',
          '#dce0e0',
        ],
        hoverBackgroundColor: [
          'var(--secondary-color)',
          '#ffce85',
          '#a4dbcc',
          '#dce0e0',
        ],
      },
    ],
  };

  const contactsBySourceOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  // 3. Contact Lifecycle Funnel
  const contactLifecycleData = {
    labels: ['Subscribers', 'Leads', 'MQLs', 'SQLs', 'Customers'],
    datasets: [
      {
        label: 'Count',
        data: [1000, 800, 500, 300, 100],
        backgroundColor: 'rgba(255, 122, 89, 0.6)',
        borderColor: 'rgba(255, 122, 89, 1)',
        borderWidth: 1,
      },
    ],
  };

  const contactLifecycleOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  // 4. Deal Forecast
  const dealForecastData = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Deals Forecast',
        data: [65, 59, 80, 81, 56],
        fill: false,
        backgroundColor: '#ff7a59',
        borderColor: '#ff7a59',
      },
    ],
  };

  const dealForecastOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  // 5. Lead Score Distribution
  const leadScoreDistributionData = {
    labels: ['0-50', '51-100', '101-150', '151-200'],
    datasets: [
      {
        label: 'Leads',
        data: [80, 60, 40, 20],
        backgroundColor: 'rgba(255, 122, 89, 0.6)',
        borderColor: 'rgba(255, 122, 89, 1)',
        borderWidth: 1,
      },
    ],
  };

  const leadScoreDistributionOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  // 6. Enriched vs. Non-Enriched Leads Conversion Rate
  const enrichedConversionData = {
    labels: ['Enriched', 'Non-Enriched'],
    datasets: [
      {
        label: 'Conversion Rate',
        data: [70, 40],
        backgroundColor: [
          'var(--secondary-color)',
          '#a4dbcc',
        ],
        hoverBackgroundColor: [
          'var(--secondary-color)',
          '#a4dbcc',
        ],
      },
    ],
  };

  const enrichedConversionOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  // 7. Time to Conversion by Lead Score
  const timeToConversionData = {
    labels: ['0-50', '51-100', '101-150', '151-200'],
    datasets: [
      {
        label: 'Time to Conversion (days)',
        data: [30, 45, 60, 90],
        fill: false,
        backgroundColor: '#ffce85',
        borderColor: '#ffce85',
      },
    ],
  };

  const timeToConversionOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  // 8. Sales Activities by Lead Quality
  const salesActivitiesData = {
    labels: ['Sales Activities'],
    datasets: [
      {
        label: 'Hot',
        data: [50],
        backgroundColor: '#ff7a59',
      },
      {
        label: 'Warm',
        data: [30],
        backgroundColor: '#ffce85',
      },
      {
        label: 'Cold',
        data: [20],
        backgroundColor: '#a4dbcc',
      },
    ],
  };

  const salesActivitiesOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
        beginAtZero: true,
      },
    },
  };

  // 9. Lead Engagement Metrics
  const leadEngagementData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label: 'Emails Opened',
        data: [65, 59, 80, 81, 56],
        fill: false,
        backgroundColor: '#ff7a59',
        borderColor: '#ff7a59',
      },
      {
        label: 'Website Visits',
        data: [35, 40, 60, 47, 88],
        fill: false,
        backgroundColor: '#ffce85',
        borderColor: '#ffce85',
      },
      {
        label: 'Demo Requests',
        data: [25, 30, 50, 39, 80],
        fill: false,
        backgroundColor: '#a4dbcc',
        borderColor: '#a4dbcc',
      },
    ],
  };

  const leadEngagementOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
    },
  };

  return (
    <BaseModal
      isOpen={isOpen}
      onClose={onClose}
      title="Dashboard"
      onNext={onNext}
      onPrev={onPrev}
    >
      {!showDetails ? (
        <div className="section-preview">
          <p>
            The dashboard offers a centralized view of your lead management metrics, allowing you to monitor
            performance, track progress, and make data-driven decisions. It features customizable reports,
            real-time analytics, and visualizations to help you understand key trends and identify areas for improvement.
          </p>
          <button
            onClick={() => setShowDetails(true)}
            className="details-button"
          >
            Read More
          </button>
        </div>
      ) : (
        <div className="section-details dashboard-content">
          <h2>Lead Management Reporting Dashboard</h2>
          {/* Dashboard Widgets */}
          <div className="dashboard-grid">
            {/* Form Submissions and Drop-offs */}
            <div className="dashboard-widget">
              <h3>Form Submissions and Drop-offs</h3>
              <Bar data={formSubmissionsData} options={formSubmissionsOptions} />
            </div>
            {/* Contacts Created by Source */}
            <div className="dashboard-widget">
              <h3>Contacts Created by Source</h3>
              <Pie data={contactsBySourceData} options={contactsBySourceOptions} />
              <ul className="pie-legend">
                <li><span className="legend-color source-organic"></span> Organic Search (40%)</li>
                <li><span className="legend-color source-paid"></span> Paid Search (25%)</li>
                <li><span className="legend-color source-social"></span> Social Media (20%)</li>
                <li><span className="legend-color source-other"></span> Other (15%)</li>
              </ul>
            </div>
            {/* Contact Lifecycle Funnel */}
            <div className="dashboard-widget">
              <h3>Contact Lifecycle Funnel</h3>
              <Bar data={contactLifecycleData} options={contactLifecycleOptions} />
            </div>

            {/* Deal Forecast */}
            <div className="dashboard-widget">
              <h3>Deal Forecast</h3>
              <Line data={dealForecastData} options={dealForecastOptions} />
            </div>
            {/* Lead Score Distribution */}
            <div className="dashboard-widget">
              <h3>Lead Score Distribution</h3>
              <Bar data={leadScoreDistributionData} options={leadScoreDistributionOptions} />
            </div>
            {/* Enriched vs. Non-Enriched Leads Conversion Rate */}
            <div className="dashboard-widget">
              <h3>Enriched vs. Non-Enriched Leads Conversion Rate</h3>
              <Pie data={enrichedConversionData} options={enrichedConversionOptions} />
              <ul className="pie-legend">
                <li><span className="legend-color enriched"></span> Enriched Leads</li>
                <li><span className="legend-color non-enriched"></span> Non-Enriched Leads</li>
              </ul>
            </div>
            {/* Time to Conversion by Lead Score */}
            <div className="dashboard-widget">
              <h3>Time to Conversion by Lead Score</h3>
              <Line data={timeToConversionData} options={timeToConversionOptions} />
            </div>
            {/* Sales Activities by Lead Quality */}
            <div className="dashboard-widget">
              <h3>Sales Activities by Lead Quality</h3>
              <Bar data={salesActivitiesData} options={salesActivitiesOptions} />
            </div>
            {/* Lead Engagement Metrics */}
            <div className="dashboard-widget">
              <h3>Lead Engagement Metrics</h3>
              <Line data={leadEngagementData} options={leadEngagementOptions} />
            </div>
          </div>

          <button
            onClick={() => setShowDetails(false)}
            className="details-button"
          >
            Back to Dashboard
          </button>
        </div>
      )}
    </BaseModal>
  );
};

export default Dashboard;
