import { motion } from "framer-motion";
import SectionHeading from "../ui/section-heading";
import TeamCard from "../ui/team-card";

const Team = () => {
  const teamMembers = [
    {
      name: "Manish kumar",
      role: "CEO & Founder",
      imageSrc: "https://raw.githubusercontent.com/tentax143/images/refs/heads/main/profile.jpg",
      socialLinks: [
        {
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect width="4" height="12" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          ),
          href: "#",
          label: "LinkedIn"
        },
        {
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
            </svg>
          ),
          href: "#",
          label: "Twitter"
        }
      ]
    },
    {
      name: "vennila",
      role: "unknown",
      imageSrc: "https://raw.githubusercontent.com/tentax143/images/refs/heads/main/v.jpg",
      socialLinks: [
        {
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect width="4" height="12" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          ),
          href: "#",
          label: "LinkedIn"
        },
        {
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />
            </svg>
          ),
          href: "#",
          label: "GitHub"
        }
      ]
    },
    // {
    //   name: "Olivia Rodriguez",
    //   role: "Program Director",
    //   imageSrc: "https://pixabay.com/get/g228ff9604ab4edced18e1f1e9084ba77dfb1999df535db7207abc03fefba89fba2df591ab26da542e8b79eba69279c986d4d36e018fd58a70366d4c0d415c1f3_1280.jpg",
    //   socialLinks: [
    //     {
    //       icon: (
    //         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    //           <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    //           <rect width="4" height="12" x="2" y="9" />
    //           <circle cx="4" cy="4" r="2" />
    //         </svg>
    //       ),
    //       href: "#",
    //       label: "LinkedIn"
    //     },
    //     {
    //       icon: (
    //         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    //           <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    //         </svg>
    //       ),
    //       href: "#",
    //       label: "Twitter"
    //     }
    //   ]
    // },
    // {
    //   name: "David Park",
    //   role: "Lead Mentor",
    //   imageSrc: "https://pixabay.com/get/g23b3482af4b57a29c899d8c0dc6e697bae0f3ac3a3adf9f7b49bd38627b9214a6ca9aa608f0cd8e0cbea0100b08aeb5dab0a6f7c3289491663d85873195e9e0c_1280.jpg",
    //   socialLinks: [
    //     {
    //       icon: (
    //         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    //           <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    //           <rect width="4" height="12" x="2" y="9" />
    //           <circle cx="4" cy="4" r="2" />
    //         </svg>
    //       ),
    //       href: "#",
    //       label: "LinkedIn"
    //     },
    //     {
    //       icon: (
    //         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    //           <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />
    //         </svg>
    //       ),
    //       href: "#",
    //       label: "GitHub"
    //     }
    //   ]
    // }
  ];
  
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-custom">
        <SectionHeading
          title="Meet Our Team"
          subtitle="Our team of industry experts is dedicated to providing exceptional mentorship and guidance to our interns."
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <TeamCard
              key={index}
              name={member.name}
              role={member.role}
              imageSrc={member.imageSrc}
              socialLinks={member.socialLinks}
              delay={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
