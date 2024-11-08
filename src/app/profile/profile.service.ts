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
      title: 'Doc Nest - where experts and patients meet!',
      desc: `Developed a healthcare application for finding nearby expert doctors with filters based on User preferences, ,
affordability, and experience. Integrated peer messaging, websockets for realtime chat. Caching for faster performance. kafka for Load Distribution Across Consumers. Used gemini ai for live quries`,
      livedemo: '',
      githurl: 'https://github.com/karthik443/docNest_BE',
      mediumlink: '',
      imgUrl: 'assets/images/docnest.png',
      tech: 'Express ,Node.js , MongoDB , Kafka, Websockets, caching'
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
      title: 'Netflix Clone',
      desc: 'created an api which returns Movie information and designed nice user interface replicating the netflix',
      livedemo: '',
      githurl: 'https://github.com/karthik443/Netflix-clone',
      mediumlink: 'https://itnext.io/blog-app-using-mern-stack-b0b4d69d7ea1',
      imgUrl: 'assets/images/netflix.png',
      tech: ' Node, MongoDB, Express , SQL'
    },


    {
      id: 3,
      title: 'Gesture-based system using python',
      desc: 'Python application where we can control the system using gestures. Used mediapipe framework for tracking the body points and Performed mathematical calucations for respective body movements. Integrated with subway surfers game',
      livedemo: '',
      githurl: 'https://github.com/karthik443/Gesture_based_system',
      mediumlink: '',
      imgUrl: 'assets/images/gesture_based_system.png',
      tech: 'Python, openCV, mediaPipe'
    },

    {
      id: 4,
      title: 'Multiroom Chat Application in Node JS',
      desc: 'Developed a chat application using websockets where I created rooms.used socketio library and Node js for backend ',
      livedemo: 'https://chat-rooms-s9vj.onrender.com/',
      githurl: 'https://github.com/karthik443/ChatApp',
      mediumlink: '',
      imgUrl: 'assets/images/z23.png',
      tech: 'Node JS,Socket IO'
    },

  ]
  about2 = `Software Developer with 1+ years of experience .
  Worked on 10+ major features of our product using Node.js and Angular which reduced the human time approximately 70%.
  Skilled in backend development, low level design, data structures and efficient API design.
  Have good understanding of  MongoDB, Git and MYSQL`

  about = " Recognized with the Pathfinder Award for leading backend team for our project and Employee of the Month for resolving critical circular dependency issue helping us remove 5000 lines of redunant code.."
  resumeurl = "https://drive.google.com/file/d/1nrDNAtwQafi71YYQj3M5AZYGhFatKpBn/view"

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
      'id': '2',
      'from_to_year': '2017 - 2019',
      'education': 'Higher Secondary',
      'stream': 'Maths, Physics & Chemistry',
      'institution': 'Sri Gayatri Junior College',
      'info': `The High School was mainly focus on the bases of science, mathematics, and Chemistry
Secured a rank of 1206 from over 1.5 lakh attempted students in TSEAMCET competative exam.
In first year got stage 3rd rank in IPE examinations scoring 465/470 marks`
    },
    {
      'id': '3',
      'from_to_year': '2016 - 2017',
      'education': 'Secondary  School',
      'stream': 'Science and Mathematics',
      'institution': 'T.S Model School',
      'info': `The Secondary aims at Maths , English , Science, Social Science, Litrature and Languages.
Completed my Secondary school with 9.7 CGPA`
    }
  ];
  exprienceData: any = [
    {
      id: 4,
      company: 'AiQod Enterprises startup',
      location: 'Pune, Maharastra',
      timeline: 'December 2023 to Present',
      role: 'Software Developer',
      work: `Technologies :   Node JS , MongoDB , Angular ,Micro services ,Web sockets , GIT.
      Working as a full stack developer, developed on a crucial feature which helps to Extract data from Invoices using cropperjs library, which efficiently decreased the manual extracting time from 30 min to 2 min i.e 1500% reduced time .
      Worked on improving Api performance using indexing , sub-dividing apis for loose coupling and optimising the code .
      Resolved ciritcal front end issue which helped us eliminate more than 5000 lines of redundant code .
      Implemented  Caching  and pagination where data is being loaded bulk, which inturn enhanced user experience and api performance `

    },
    {
      id: 3,
      company: 'BHEL',
      location: 'Remote',
      timeline: 'march 2023 to June 2023',
      role: 'Research Intern',
      work: `Developed a Receiver Autonomous Integrity Monitoring (RAIM) method for GNSS receivers, ensuring the accuracy and reliability of GPS positioning .

              Implemented efficient C and C++ code optimized for low memory usage and high-speed processing .

             Achieved 91 accuracy rate in analyzing and interpreting research results, demonstrating strong analytical skills`
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
