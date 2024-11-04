import React, { useState } from 'react';
import BaseModal from '../modal/BaseModal';

const Overview = ({ isOpen, onClose, onNext, onPrev }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <BaseModal
      isOpen={isOpen}
      onClose={onClose}
      title="Overview"
      onNext={onNext}
      onPrev={onPrev}
    >
      {!showDetails ? (
        <div className="section-preview">
          <p>
            This model serves LearnPath's key objectives by leveraging this new lead enrichment system we will boost
            sales conversions, enhance lead nurturing, and give the sales team clear visibility into high-value leads without
            the need for manual input. While building the modelI evaluated your needs by asking myself key questions.
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
        <h3>What specific business objectives does the lead enrichment and scoring model support?</h3>
           <p>
               This model is designed to help our client hit key objectives—boosting sales conversions, enhancing lead nurturing, and providing the sales team with visibility into high-value leads. By aligning with these priorities, we ensure the model adds substantial value to their strategy.
           </p>


           <h3>What is the client's target audience, and are there specific segments that are more valuable than others?</h3>
           <p>
               Our approach prioritizes the highest-potential segments, those identified as the most valuable. This focus helps us refine both enrichment and scoring criteria to ensure we're targeting leads that matter most.
           </p>


           <h3>How does the client currently define a "high-quality" lead, and what criteria do they use?</h3>
           <p>
               We have strategized this model based on the client’s definition of a high-quality lead, combining factors such as demographics, firmographics, and engagement levels. The selected attributes ensure this model provides value to LearnPath.
           </p>


           <h3>What data attributes are essential for enrichment to improve the model’s performance?</h3>
           <p>
               Key data points include firmographic details, technographics, and demographic insights. These enriched attributes provide a deeper understanding of leads, improving scoring accuracy.
           </p>


           <h3>How frequently should enriched data be updated to maintain accuracy and relevance?</h3>
           <p>
               Regular updates are crucial—typically quarterly, with faster updates for rapidly changing industries. We’ll establish workflows to ensure that enriched data remains relevant and maintains the scoring model’s accuracy.
           </p>


           <h3>What behavioral and firmographic data points should be considered in the scoring?</h3>
           <p>
               To capture intent and potential, we consider behavioral data (such as email engagement, website visits, and demo requests) and firmographic details (such as company revenue, location, and industry).
           </p>


           <h3>How does the client want to segment scoring? Should it be a single score or a combination?</h3>
           <p>
               We’ve developed a multi-tiered approach incorporating both intrinsic and extrinsic factors. This model is scalable, laying the groundwork for predictive analytics in future updates.
           </p>


           <h3>How adaptable is the model for expanding to new markets, products, or customer segments?</h3>
           <p>
               The model's modular approach means it's adaptable, easily extending to new markets or products without major reconfigurations, supporting business expansion smoothly.
           </p>
          <button
            onClick={() => setShowDetails(false)}
            className="details-button"
          >
            Back to Overview
          </button>
        </div>
      )}
    </BaseModal>
  );
};

export default Overview;
