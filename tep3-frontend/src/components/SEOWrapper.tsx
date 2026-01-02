import React, { useEffect } from 'react';

interface SEOWrapperProps {
  pageType?: string;
  customTitle?: string;
  customDescription?: string;
  customKeywords?: string[];
  children: React.ReactNode;
}

const SEOWrapper: React.FC<SEOWrapperProps> = ({
  pageType = 'page',
  customTitle = 'TraderEdge Pro',
  customDescription = 'Professional prop firm clearing service',
  customKeywords = [],
  children
}) => {
  useEffect(() => {
    // Update document title
    document.title = customTitle;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, property?: boolean) => {
      const attribute = property ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attribute}="${name}"]`);

      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, name);
        document.head.appendChild(meta);
      }

      meta.setAttribute('content', content);
    };

    updateMetaTag('description', customDescription);

    if (customKeywords.length > 0) {
      updateMetaTag('keywords', customKeywords.join(', '));
    }

    updateMetaTag('og:title', customTitle, true);
    updateMetaTag('og:description', customDescription, true);
    updateMetaTag('og:type', 'website', true);
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', customTitle);
    updateMetaTag('twitter:description', customDescription);
  }, [customTitle, customDescription, customKeywords]);

  return <>{children}</>;
};

export default SEOWrapper;
