export const detectDevice = (userAgent: string) => {
  const mobileKeywords = [
    'Android',
    'iPhone',
    'iPad',
    'iPod',
    'BlackBerry',
    'Windows Phone',
    'Opera Mini',
    'Mobile',
    'Tablet'
  ];

  return {
    isMobile: mobileKeywords.some((keyword) => userAgent.includes(keyword)),
    isDesktop: !mobileKeywords.some((keyword) => userAgent.includes(keyword)),
    userAgent
  };
};
