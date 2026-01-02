// Production error handler to catch and handle runtime errors

if (typeof window !== 'undefined') {
  // Handle unhandled promise rejections
  window.addEventListener('unhandledrejection', (event) => {
    console.error('Unhandled promise rejection:', event.reason);
    event.preventDefault();
  });

  // Handle global errors
  window.addEventListener('error', (event) => {
    console.error('Global error:', event.error);
  });

  // Suppress specific header-related errors that don't affect functionality
  const originalError = console.error;
  console.error = (...args: any[]) => {
    const message = args[0]?.toString() || '';

    // Filter out harmless header warnings
    if (
      message.includes('Headers is a read-only') ||
      message.includes('Cannot modify headers') ||
      message.includes('Headers already sent')
    ) {
      return;
    }

    originalError.apply(console, args);
  };
}

export {};
