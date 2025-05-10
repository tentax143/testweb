import { motion } from "framer-motion";

const MapSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-card rounded-lg border shadow-sm overflow-hidden"
    >
      <div className="p-6">
        <h3 className="text-2xl font-semibold mb-4">Visit Our Office</h3>
        
        <div className="space-y-4 mb-6">
          <div className="flex items-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-3 text-primary mt-1"
            >
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <div>
              <h4 className="font-medium">Address</h4>
              <p className="text-muted-foreground">Ramco Institute of Technology<br />Rajapalayam</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-3 text-primary mt-1"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <div>
              <h4 className="font-medium">Phone</h4>
              <p className="text-muted-foreground">7418642403</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-3 text-primary mt-1"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            <div>
              <h4 className="font-medium">Email</h4>
              <p className="text-muted-foreground">mk4997320@gmail.com</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-3 text-primary mt-1"
            >
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            <div>
              <h4 className="font-medium">Office Hours</h4>
              <p className="text-muted-foreground">Monday - Friday: 9AM - 6PM<br />Saturday - Sunday: Closed</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Map Embed */}
      <div className="h-96 relative border-t">
        <div className="absolute inset-0 bg-muted flex items-center justify-center">
          <div className="text-center p-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mx-auto mb-4 text-muted-foreground/70"
            >
              <path d="M17.5 6.5 14 10l3.5 3.5L14 17l7 7 7-7-3.5-3.5L28 10l-3.5-3.5L28 3l-7-7-7 7 3.5 3.5Z" />
              <path d="m3 3-2.5 2.5L3 8l-3 3 3 3-3 3 3 3 2.5-2.5L8 20.5l3-3 3 3 3-3-3-3 3-3-3-3 3-3-3-3-3 3-3-3L5.5 5.5 3 3Z" />
            </svg>
            <p className="text-muted-foreground">
              Interactive map loading... <br />
              <span className="text-sm">Visit us at Ramco Institute of Technology, Rajapalayam</span>
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default MapSection;
