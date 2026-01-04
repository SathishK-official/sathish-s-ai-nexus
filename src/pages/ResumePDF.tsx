import { useEffect } from 'react';

const ResumePDF = () => {
  useEffect(() => {
    // Set page title
    document.title = 'Resume - SATHISH K';
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <iframe
        src="/resume/SATHISH_K_resume.pdf"
        className="w-full h-screen"
        title="SATHISH K Resume"
      />
    </div>
  );
};

export default ResumePDF;
