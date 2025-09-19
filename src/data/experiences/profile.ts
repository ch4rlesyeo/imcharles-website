import { IProfileSelectorProps } from '@/types/data/experiences/profile';

export const profiles: IProfileSelectorProps[] = [
  {
    company: 'Aquariux',
    jobTitle: 'Lead Software Engineer',
    range: '2020 - 2025',
    rangeDetail: 'Jan 2020 - Apr 2025',
    descriptions: [
      {
        description:
          'Spearheaded the development and enhancement of a white-label trading platform (web and mobile), including Execution Management System (EMS) apps, a client-facing back-office system, and a root admin dashboard.'
      },
      {
        description:
          'Designed and developed an in-house trading charting platform inspired by TradingView delivering advanced indicators, drawing tools, and seamless integration into both web and mobile EMS, providing users with a familiar yet fully proprietary experience.'
      },
      {
        description:
          'Led and mentored a team of frontend engineers, overseeing projects including the trading EMS apps, charting solution as well as :',
        details: [
          'A payment gateway web app for merchants to integrate and enable Fiat and Crypto payments for end user.',
          'An in-house corporate management system for directors to monitor from individual companies to group wide financial performance.'
        ]
      },
      {
        description:
          'Shifted the engineering team’s focus from pure feature delivery to deployment improvements on CI/CD pipeline automation such as :',
        details: [
          `Implemented configuration driven deployment (with a dashboard for easy editing the configuration) to better customise for every broker's needs.`,
          'App versioning for flexible deployment (opt out certain brokers receiving the latest updates temporarily) and a form of rollback strategy.',
          'Implemented Over-The-Air updates for quick updates or emergency patches for mobile apps using Expo Dev.'
        ]
      }
    ]
  },
  {
    company: 'Freelancer',
    jobTitle: 'Full-stack Developer',
    range: '2019 - 2019',
    rangeDetail: 'Aug 2019 - Dec 2019',
    descriptions: [
      {
        description:
          'Developed a mobile app with React Native and Expo for booking medical services across Johor Bahru, improving operational efficiency and accessibility for patients.'
      },
      {
        description:
          'Developed a back-office web application with React.js that enabled the operations team to track bookings and manage service availability in real time.'
      }
    ]
  },
  {
    company: 'Ciro Solutions',
    jobTitle: 'Frontend Developer',
    range: '2019 - 2019',
    rangeDetail: 'Jan 2019 - Aug 2019',
    descriptions: [
      {
        description:
          'Developed an operations management and configuration dashboard to support cross-company teams, enabling deployment monitoring, status tracking, and data visualizations with D3.js.'
      }
    ]
  },
  {
    company: 'Yoozrr Technologies',
    jobTitle: 'JavaScript Developer',
    range: '2017 - 2019',
    rangeDetail: 'Aug 2017 - Jan 2019',
    descriptions: [
      {
        description:
          'Developed and maintain an online import/export forwarding booking system for a logistics company, streamlining coordination between forwarding and liner operations to improve efficiency, optimize financing workflows, and reduce human errors.'
      },
      {
        description:
          'Developed a mobile app in JavaScript with React Native for haulage drivers to manage assigned jobs, trailer handling, and container collections.'
      },
      {
        description:
          'Implemented GraphQL with Apollo Client to manage data fetching, caching, and state across web apps, eliminating the need for custom network handlers.'
      },
      {
        description:
          'Built a backend using GraphQL and KoaJS with Apollo Server, implementing resolvers to map queries and mutations to controllers.'
      },
      {
        description:
          'Implemented JWT authentication with Passport.js and integrated SevenBoom with GraphQL to standardize HTTP responses.'
      }
    ]
  },
  {
    company: 'Experian',
    jobTitle: 'C# Developer',
    range: '2017 - 2017',
    rangeDetail: 'Apr 2017 - July 2017',
    descriptions: [
      {
        description:
          'Developed, maintained, and debugged cross-channel marketing applications, backend systems, and scheduled jobs using ASP.NET technologies including C#, ASP.NET MVC, and Web API.'
      }
    ]
  },
  {
    company: 'Fourtitude Asia',
    jobTitle: 'ASP.NET Developer',
    range: '2015 - 2017',
    rangeDetail: 'May 2015 - Apr 2017',
    descriptions: [
      {
        description:
          'Developed and maintain Astro Malaysia Single Sign On (SSO) portal, Astro Malaysia e-commerce web apps using ASP.NET with VB and C#.'
      },
      {
        description:
          'Integrate those systems with various AWS cloud services such as EC2, S3, ELB, SES and ELK to adapt the frequent change requests.'
      },
      {
        description:
          'Monitor API status, uptime and response performance using Runscope. Monitor APIs availability and detect failures or latency issues.'
      }
    ]
  }
];
