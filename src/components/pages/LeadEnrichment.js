// src/components/pages/LeadEnrichment.js
import React, { useState, useEffect } from 'react';
import BaseModal from '../modal/BaseModal';

const LeadEnrichment = ({ isOpen, onClose, onNext, onPrev }) => {
  const [showDetails, setShowDetails] = useState(false);

  // Log when the modal opens
  useEffect(() => {
    console.log(`LeadEnrichment modal isOpen: ${isOpen}`);
  }, [isOpen]);

  return (
    <BaseModal
      isOpen={isOpen}
      onClose={onClose}
      title="Lead Enrichment"
      onNext={onNext}
      onPrev={onPrev}
    >
      {!showDetails ? (
        <div className="section-preview">
          <p>
            Lead enrichment enhances your existing lead data by adding valuable information such as company details,
            social profiles, and contact information. This process ensures that your sales and marketing teams have
            a comprehensive understanding of each lead, enabling more personalized and effective outreach.
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
        <h3>Aims & Outcomes</h3>
        <ul>
          <li>
            <strong>Alignment:</strong> Targets elementary school superintendents in North America with 1,000-5,000 students,
            ensuring focus on the most valuable leads.
          </li>
          <li>
            <strong>Integration:</strong> Utilizes Clearbit's native integration with HubSpot for efficient data enrichment
            without the need for additional tools.
          </li>
          <li>
            <strong>Data Quality:</strong> Provides enriched firmographic and demographic data, leading to better lead
            qualification and prioritization.
          </li>
          <li>
            <strong>Segmentation:</strong> Enables more effective segmentation based on enriched attributes,
            facilitating personalized marketing campaigns.
          </li>
          <li>
            <strong>Enablement:</strong> Equips the sales team with deeper insights for tailored outreach, increasing
            the likelihood of conversions.
          </li>
          <li>
            <strong>Efficient:</strong> Streamlines the lead nurturing process by focusing efforts on high-quality leads,
            reducing time wasted on low-potential prospects.
          </li>
        </ul>

        <h3>Implementation Steps</h3>
          <ol>
            <li><strong>Access:</strong> Set up Integration with Clearbit.</li>
            <li><strong>Define:</strong> Identify Clearbit attributes that align with lead scoring.</li>
            <li><strong>Create:</strong> Workflow and Properties.</li>
            <li><strong>Configure:</strong> Map Clearbit attributes to HubSpot properties.</li>
            <li><strong>Automate:</strong> Enrichment by workflow enrollments.</li>
            <li><strong>Testing:</strong> Verify correct data mapping.</li>
            <li><strong>Data Validation:</strong> Generate and analyze results - monthly and quarterly.</li>
          </ol>

          <button
            onClick={() => setShowDetails(false)}
            className="details-button"
          >
            Back to Lead Enrichment
          </button>
        </div>
      )}
    </BaseModal>
  );
};

export default LeadEnrichment;
