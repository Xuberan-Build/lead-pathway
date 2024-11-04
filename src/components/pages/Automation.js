// src/components/pages/Automation.js
import React, { useState, useEffect } from 'react';
import BaseModal from '../modal/BaseModal';

const Automation = ({ isOpen, onClose, onNext, onPrev }) => {
  const [showDetails, setShowDetails] = useState(false);

  // Log when the modal opens
  useEffect(() => {
    console.log(`Automation modal isOpen: ${isOpen}`);
  }, [isOpen]);

  // Log when the component renders
  console.log('Automation component rendered');

  return (
    <BaseModal
      isOpen={isOpen}
      onClose={onClose}
      title="Automation"
      onNext={onNext}
      onPrev={onPrev}
    >
      {!showDetails ? (
        <div className="section-preview">
          <p>
            Automation in lead management simplifies repetitive tasks such as email follow-ups, data entry,
            and lead nurturing. By automating these processes, your team can focus on strategic activities
            that drive growth and enhance customer relationships.
          </p>
          <button
            onClick={() => setShowDetails(true)}
            className="details-button"
          >
            Read More
          </button>
        </div>
      ) : (
        <div className="section-details">
          {/* Existing Content */}
          <h3>Key Automation Features</h3>
          <p>
            Our automation tools include automated email campaigns, lead assignment based on predefined criteria,
            and seamless integration with your CRM and other marketing tools. These features help streamline workflows
            and ensure consistent engagement with your leads.
          </p>

          {/* New Content: Automation Strategy */}
          <h3>Automation Strategy</h3>
          <ul>
            <li>
              <strong>Clearbit Dynamic Forms:</strong> Auto-fill lead information to reduce form fields and enhance user experience.
            </li>
            <li>
              <strong>Real-Time Lead Enrichment:</strong> Automatically enrich lead profiles with firmographic and demographic data upon form submission.
            </li>
            <li>
              <strong>HubSpot Workflows:</strong> Automate lead scoring updates, segmentation, and notifications.
            </li>
            <li>
              <strong>Sales Team Notifications:</strong> Instant alerts for specific engagement levels or score thresholds.
            </li>
            <li>
              <strong>Account Management Integration:</strong> Sync enriched data with account records for a comprehensive view of each prospect.
            </li>
          </ul>

          {/* New Content: Benefits */}
          <h3>Benefits</h3>
          <ul>
            <li>
              <strong>Seamless Integration:</strong> Utilizes native Clearbit and HubSpot features for efficient automation.
            </li>
            <li>
              <strong>Enhanced Lead Capture:</strong> Reduces form fields to improve conversion rates.
            </li>
            <li>
              <strong>Efficient Sales Outreach:</strong> Equips sales teams with timely, enriched data.
            </li>
            <li>
              <strong>Real-Time Insights:</strong> Provides proactive engagement through live updates on lead activities and score changes.
            </li>
          </ul>

          <button
            onClick={() => setShowDetails(false)}
            className="details-button"
          >
            Back to Automation
          </button>
        </div>
      )}
    </BaseModal>
  );
};

export default Automation;
