import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  //baseUrl = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  projects:any = [
    {
      id: 0,
      title: 'Gesture-based system using python',
      desc: 'Python application where we can control the system using gestures. Used mediapipe framework for tracking the body points and Performed mathematical calucations for respective body movements. Integrated with subway surfers game',
      livedemo: '',
      githurl: 'https://github.com/karthik443/Gesture_based_system',
      mediumlink: '',
      imgUrl: 'assets/images/gesture_based_system.png',
      tech: 'Python, openCV, mediaPipe'
    },
    {
      id: 1,
      title: 'E commerce application CRUD',
      desc: 'An Ecommerce application replicating real-world where users can shop, add to cart, order the items. Used SQL database for data storing. node js for backend server and nodemailer for authenticating users and ',
      livedemo: '',
      githurl: 'https://github.com/karthik443/E-commerce',
      mediumlink: '',
      imgUrl: 'assets/images/ecomerce1.png',
      tech: 'Express ,Node.js , MongoDB'
    },
    {
      id: 2,
      title: 'Multiroom Chat Application in Node JS',
      desc: 'Developed a real-time chat application using WebSockets, where users can join or create chat rooms and exchange messages instantly. Utilized the Socket.IO library with a Node.js backend to manage connections.',
      livedemo: 'https://chat-rooms-s9vj.onrender.com/',
      githurl: 'https://github.com/karthik443/ChatApp',
      mediumlink: '',
      imgUrl: 'assets/images/z23.png',
      tech: 'Node JS,Socket IO'
    },

    {
      id: 3,
      title: 'Netflix Clone',
      desc: 'Created an api which returns Movie information based on search query and designed nice user interface replicating the Netflix. ',
      livedemo: '',
      githurl: 'https://github.com/karthik443/Netflix-clone',
      mediumlink: 'https://itnext.io/blog-app-using-mern-stack-b0b4d69d7ea1',
      imgUrl: 'assets/images/netflix.png',
      tech: ' Node, MongoDB, Express , SQL'
    },

  ]
  about2 = ['Software developer with 1.8 Years of experience, specializing in backend development.','Proficient in low-level design, efficient API development, and data structures & algorithms along with  Strong understanding of MongoDB, MySQL, and Git.']

  about = `Proficient in low-level design, efficient API development, and data structures & algorithms along with  Strong understanding of MongoDB, MySQL, and Git.`
  resumeurl = "https://drive.google.com/file/d/1_y24ANG502T7l8mBLKSGSW61ltyRl4Xj/view"

  skillsData: any = [
    {
      'id': '1',
      'skill': 'NODE JS',
      'progress': '85%'
    },
    {
      'id': '2',
      'skill': 'Data structures & Algorithms',
      'progress': '80%'
    },
    {
      'id': '3',
      'skill': 'Python',
      'progress': '80%'
    },
    {
      'id': '4',
      'skill': 'MYSQL,MONOGO',
      'progress': '75%'
    },
    {
      'id': '5',
      'skill': 'GIT',
      'progress': '75%'
    },
    {
      'id': '6',
      'skill': 'JAVA, Operating Systems',
      'progress': '70%'
    },
    {
      'id': '7',
      'skill': 'DBMS',
      'progress': '75%'
    },
    {
      'id': '8',
      'skill': 'Angular',
      'progress': '70%'
    }
  ];


  educationData: any = [
    {
      'id': '1',
      'from_to_year': '2025 - 2027(expected)',
      'education': 'Master\'s Degree',
      'stream': 'Computer science and Information security',
      'info': `Secured a rank of 126 over 10,000 candidates.
               Currently pursuing `,
      'institution': 'International Institute of Information Technology, Hyderabad.'
    },
    {
      'id': '2',
      'from_to_year': '2019 - 2023',
      'education': 'Bachelor\'s Degree',
      'stream': 'Bachelor of Engineering',
      'info': `UCEOU  is one of  Telangan's top 3 ranked colleges.
Completed B.E in Computer Engineering with 8.3 CGPA.
Won the Best Major Project Award  for excellent Academic Technical project at College(CSE Dept).
Won the championship trophy in Badminton Tournament conducted in our college Sportsmania2k23`,
      'institution': 'University College of engineering, Osmania University, Hyderabad'
    },
    {
      'id': '3',
      'from_to_year': '2017 - 2019',
      'education': 'Higher Secondary',
      'stream': 'Maths, Physics & Chemistry',
      'institution': 'Sri Gayatri Junior College',
      'info': `The High School was mainly focus on the bases of science, mathematics, and Chemistry
Secured a rank of 1206 from over 1.5 lakh attempted students in TSEAMCET competative exam.
In first year got stage 3rd rank in IPE examinations scoring 465/470 marks`
    },
//     {
//       'id': '3',
//       'from_to_year': '2016 - 2017',
//       'education': 'Secondary  School',
//       'stream': 'Science and Mathematics',
//       'institution': 'T.S Model School',
//       'info': `The Secondary aims at Maths , English , Science, Social Science, Litrature and Languages.
// Completed my Secondary school with 9.7 CGPA`
//     }
  ];
  exprienceData: any = [
    {
      id: 4,
      company: 'AiQod Enterprises startup',
      location: 'Pune, Maharastra',
      timeline: 'December 2023 to June 2025',
      role: 'Software Developer',
      work: ['Technologies :   Node JS , MongoDB , Angular ,Micro services ,Web sockets , GIT.',
      'Working as a full stack developer, Built a document automation system , starting from recieving documents from email to extracting key information using tesseract ocr and Genai models.',
      'Pruning the data and creating reports based on bulk data, significantly speeding up data intake and reducing manual effort.',
      'Improved API response time from 30 sec to under 5 sec by optimizing core algorithms, introducing databaseindexing, and refactoring a monolithic endpoint into multiple cohesive APIs with better separation of concerns.',
      'Resolved ciritcal front end issue which helped us eliminate more than 5000 lines of redundant code .',
      'Implemented  Caching  and pagination where data is being loaded bulk, which inturn enhanced user experience and api performance ',
    'Received 2X Spot Awards for two high-impact contributions: resolving a critical server crash in a peer project with in an hour by analyzing end-to-end workflow, and another for eliminating 2,000+ lines of redundant code by fixing a circular dependency in Angular using ComponentFactoryResolver.']

    },
    {
      id: 3,
      company: 'BHEL',
      location: 'Remote',
      timeline: 'march 2023 to June 2023',
      role: 'Research Intern',
      work: [`Developed a Receiver Autonomous Integrity Monitoring (RAIM) method for GNSS receivers, ensuring the accuracy and reliability of GPS positioning .`,

              `Implemented efficient C and C++ code optimized for low memory usage and high-speed processing .`,

             `Achieved 91 accuracy rate in analyzing and interpreting research results, demonstrating strong analytical skills`]
    }
  //   {
  //     id: 2,
  //     company: 'Growth99',
  //     location: 'Remote',
  //     timeline: '',
  //     role: 'Frontend  Developer',
  //     work: `Technologies : Angular , Node JS , MongoDB .
  // Worked on the product of Growth99 which allowed other clients to come and integrate our product in their website .
  // Worked on REST Api , Admin Dashboard , Appointment Booking for services and UI of the application .
  // Created sections like templates for email, sms, landing pages, clinic, services, providers and triggers Automation.
  // `
  //   },

  //   {
  //     id: 1,
  //     company: 'Tata Consultancy Services',
  //     location: 'Gandhinagar and Pune',
  //     timeline: 'June 2019 - Jan 2021',
  //     role: 'Assistant System Engineer Trainee',
  //     work: `Technologies : Angular , JavaSpring Boot , SQL. Apache Solr .

  // Project 1 : Worked on uploading two excel sheets with bulk of data and finding the matches for each business .

  // Project 2 : Worked on indexing the search results inside the application with bulk of data using Apache Solr and configuring the server with cron jobs and shell scripts .

  // Worked on ranking the search results based on various criteria,features and delivering the accurate results based on generated scores.
  // `
  //   },


  ]

  extraCircularInfo: any = [
    {
      id:1,
      title: 'Blogger',
      description: '',
      img: 'assets/images/Mehul Kothari – Medium1.png',
      url: 'https://mehulkothari05.medium.com/'
    },
    {
      id:1,
      title: 'Github',
      description: '',
      img: 'assets/images/Mehulkothari_github.png',
      url: 'https://github.com/mehulk05/'
    },
    {
      id:1,
      title: 'Freelancing',
      description: '',
      img: 'assets/images/mehul_freelancing.png',
      url: 'https://www.upwork.com/freelancers/~016d6f497a5629df4b'
    },
  ]
  // contactus(data: any): Observable<any> {
  //   return this.http.post(this.baseUrl + 'contact', data);
  // }

  skills(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.skillsData;
  }

  getProjects(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.projects;
  }
  education(): Observable<any> {
    // return this.http.get(this.baseUrl + 'education');
    return this.educationData;
  }

  exprience(): Observable<any> {
    // return this.http.get(this.baseUrl + 'exprience');
    return this.exprienceData;
  }

  extraCircular(): Observable<any> {
    // return this.http.get(this.baseUrl + 'exprience');
    return this.extraCircularInfo;
  }
}
