const reportWebVitals = onPerfEntry => {
  if (typeof onPerfEntry === 'function') {
    return import('web-vitals').then(({ onCLS, onFID, onFCP, onLCP, onTTFB }) => {
      onCLS(onPerfEntry);
      onFID(onPerfEntry);
      onFCP(onPerfEntry);
      onLCP(onPerfEntry);
      onTTFB(onPerfEntry);
    });
  }

  return Promise.resolve();
};

export default reportWebVitals;
