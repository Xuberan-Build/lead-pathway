// src/components/pages/LeadScoring.js
import React, { useState, useEffect } from 'react';
import BaseModal from '../modal/BaseModal';

const LeadScoring = ({ isOpen, onClose, onNext, onPrev }) => {
  const [showDetails, setShowDetails] = useState(false);

  // Log when the modal opens
  useEffect(() => {
    console.log(`LeadScoring modal isOpen: ${isOpen}`);
  }, [isOpen]);

  // Log when the component renders
  console.log('LeadScoring component rendered');

  return (
    <BaseModal
      isOpen={isOpen}
      onClose={onClose}
      title="Lead Scoring"
      onNext={onNext}
      onPrev={onPrev}
    >
      {!showDetails ? (
        <div className="section-preview">
          <p>
            Our lead scoring model assigns numerical values to leads based on various criteria such as demographic information,
            behavior, and engagement levels. This system helps prioritize leads that are more likely to convert,
            allowing your sales team to focus their efforts where it matters most.
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
          <h3>How Lead Scoring Works</h3>
          <p>
            The lead scoring model evaluates leads based on factors like job title, company size, website interactions,
            and content engagement. Leads with higher scores are prioritized for immediate follow-up, ensuring efficient
            use of sales resources.
          </p>

          {/* New Content: Lead Scoring Matrix */}
          <h3>Lead Scoring Matrix</h3>
          <ul>
            <li>
              <strong>Target Audience:</strong> Elementary school superintendents.
            </li>
            <li>
              <strong>Geographic Location:</strong> Across North America.
            </li>
            <li>
              <strong>Student Population Size:</strong> Schools with 1,000-5,000 students.
            </li>
            <li>
              <strong>Product Focus:</strong> Curriculum management, administrative efficiencies, personalized learning experiences.
            </li>
          </ul>

          <h3>1. Job Title Specificity</h3>
          <ul>
            <li>
              <strong>Purpose:</strong> Prioritize decision-makers in elementary education.
            </li>
            <li>
              <strong>High Priority (30 points):</strong> Superintendent (Elementary Education)
            </li>
            <li>
              <strong>Medium Priority (25 points):</strong> Assistant Superintendent, Director of Elementary Education
            </li>
            <li>
              <strong>Lower Priority (20 points):</strong> Principal (Elementary School)
            </li>
            <li>
              <strong>Minimal Priority (10 points):</strong> Other administrative roles in elementary education
            </li>
            <li>
              <strong>Negative Signal (-20 points):</strong> Roles unrelated to elementary education (e.g., High School Superintendent, Higher Education Administrators)
            </li>
          </ul>

          <h3>2. Institution Type</h3>
          <ul>
            <li>
              <strong>Purpose:</strong> Focus on leads within the core market of elementary education.
            </li>
            <li>
              <strong>High Priority (30 points):</strong> Elementary School/District
            </li>
            <li>
              <strong>Medium Priority (20 points):</strong> K-8 School/District
            </li>
            <li>
              <strong>Low Priority (5 points):</strong> Other Educational Institutions
            </li>
            <li>
              <strong>Negative Signal (-20 points):</strong> Institutions primarily focused on secondary or higher education
            </li>
          </ul>

          <h3>3. Student Population Size</h3>
          <ul>
            <li>
              <strong>Purpose:</strong> Target schools that fit within the optimal size range for LearnPath's solutions.
            </li>
            <li>
              <strong>High Priority (25 points):</strong> 1,000-5,000 Students
            </li>
            <li>
              <strong>Medium Priority (15 points):</strong> 800-999 or 5,001-6,000 Students
            </li>
            <li>
              <strong>Low Priority (5 points):</strong> Below 800 or Above 6,000 Students
            </li>
            <li>
              <strong>Negative Signal (-10 points):</strong> Extremely small (&lt;500) or large (&gt;10,000) institutions
            </li>
          </ul>

          <h3>4. Geographic Location</h3>
          <ul>
            <li>
              <strong>Purpose:</strong> Concentrate efforts on the primary geographic market.
            </li>
            <li>
              <strong>High Priority (20 points):</strong> United States and Canada
            </li>
            <li>
              <strong>Medium Priority (10 points):</strong> Mexico
            </li>
            <li>
              <strong>Negative Signal (-20 points):</strong> Leads outside North America
            </li>
          </ul>

          <h3>5. Interest in Product Focus Areas</h3>
          <ul>
            <li>
              <strong>Purpose:</strong> Identify leads that show interest in LearnPath's key solution areas.
            </li>
            <li>
              <strong>High Engagement (15 points each):</strong>
              <ul>
                <li>Curriculum Management Content Engagement</li>
                <li>Administrative Efficiencies Content Engagement</li>
                <li>Personalized Learning Engagement</li>
              </ul>
            </li>
            <li>
              <strong>General Content Engagement (5-10 points):</strong> Engaged with general educational content
            </li>
            <li>
              <strong>Negative Signal (-20 points):</strong> Lack of engagement with any content related to product focus areas
            </li>
          </ul>

          <h3>6. Technographics Specific to Education Sector</h3>
          <ul>
            <li>
              <strong>Purpose:</strong> Prioritize institutions with a higher propensity to adopt LearnPath's technology.
            </li>
            <li>
              <strong>High Priority (20 points):</strong> Uses complementary educational software
            </li>
            <li>
              <strong>Medium Priority (15 points):</strong> Known to invest in educational technology
            </li>
            <li>
              <strong>Low Priority (5 points):</strong> Limited technological adoption
            </li>
            <li>
              <strong>Negative Signal (-20 points):</strong> Reluctant to adopt new technology or uses outdated systems
            </li>
          </ul>

          <h3>7. Engagement Metrics</h3>
          <ul>
            <li>
              <strong>Purpose:</strong> Gauge the lead's level of interest based on their interactions with LearnPath's content.
            </li>
            <li>
              <strong>High Engagement:</strong>
              <ul>
                <li>Visited Pricing Page Multiple Times (30 points)</li>
                <li>Attended Webinars on Elementary Education Solutions (25 points)</li>
                <li>Downloaded Case Studies or Whitepapers on Curriculum Management (20 points)</li>
              </ul>
            </li>
            <li>
              <strong>Medium Engagement:</strong>
              <ul>
                <li>Clicked Links in Emails Multiple Times (15 points)</li>
                <li>Visited Key Website Pages Related to Product Focus (10 points)</li>
              </ul>
            </li>
            <li>
              <strong>Low Engagement:</strong>
              <ul>
                <li>General Website Visits (5 points)</li>
              </ul>
            </li>
            <li>
              <strong>Negative Signal (-20 points):</strong> Unsubscribed from emails, negative feedback, or long periods of inactivity
            </li>
          </ul>

          {/* Grading Matrix */}
          <h3>Grading</h3>
          <ul>
            <li><strong>Hot Leads (SQLs):</strong> Above 200 points.</li>
            <li><strong>Warm Leads (MQLs):</strong> Between 120 and 199 points.</li>
            <li><strong>Cold Leads:</strong> Below 120 points.</li>
          </ul>

          <button
            onClick={() => setShowDetails(false)}
            className="details-button"
          >
            Back to Lead Scoring
          </button>
        </div>
      )}
    </BaseModal>
  );
};

export default LeadScoring;
