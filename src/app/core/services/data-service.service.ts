import { Injectable } from '@angular/core';
import { TeamData } from '../interfacies/teamData';

@Injectable({
  providedIn: 'root',
})
export class DataServiceService {
  private data: TeamData[] = [
    {
      id: '1',
      img: './assets/mostafa.jpg',
      name: 'Mostafa Ibrahim',
      profession: 'Campus Director',
      description:
        " is a fourth-year student in the Faculty of Commerce, specializing in Business Information Systems (BIS). He is currently serving as a media leader at the Hult Prize. Ahmed Shahawy, the Vice Director, played an instrumental role in our organization's remarkable success this season. His exceptional leadership, unwavering dedication, and collaborative spirit were crucial in propelling us towards these outstanding achievements.",
      linkedin: 'https://www.linkedin.com/in/mostafa-ebrahim-29a67025b/',
      instagram:
        'https://www.instagram.com/moustafaiibrahem?igshid=ZDdkNTZiNTM%3D',
      facebook:
        'https://www.facebook.com/profile.php?id=100017140516294&mibextid=ZbWKwL',
      awards: {
        global:
          'Top 5 in middle East and North Africa for best Campus Director',
        national: 'Best Campus Director of the 2023-2024 season in Egypt.',
      },
      whatsapp: 'https://api.whatsapp.com/send?phone=01110844808',
    },

    {
      id: '2',
      img: './assets/shehawy.jpg',
      name: 'Ahmed Shehawy',
      profession: 'Vice Director',
      description:
        'Mostafa is a third-year student majoring in Business Information Systems at Tanta University. He works as a front-end developer at KnowledgeNet, where he has honed his skills in software development and user interface design. Mostafa served as the Campus Director for the 2024 season, where he gained valuable hands-on experience in team management and leadership. During his tenure, he successfully led and motivated his team, organized events, and coordinated with various stakeholders. His role as Campus Director not only enhanced his leadership abilities but also provided him with insights into effective team dynamics and project management.',
      linkedin: 'https://www.linkedin.com/in/ahmed-shehawy-467124257/',
      instagram: 'https://www.instagram.com/ahmed.shhawy/',
      facebook: 'https://www.facebook.com/profile.php?id=100015773058409',
    },
    {
      id: '3',
      img: './assets/sara.jpg',
      name: 'Sara Elwan',
      profession: 'Vice Director',
      description:
        'Sara Khaled is a fourth-year student at the Faculty of Commerce, majoring in Business Information Systems. She served as Director Vice majoring marketing and & Communication Skills she gained experience in HR department,She excels in Communication Skills and developing strategic plans, demonstrated through her role at the last season in Hult Prize Tanta University',
      linkedin:
        'https://www.linkedin.com/in/sara-elwan-ab9646310?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      instagram: 'https://www.instagram.com/sara_elwan99?igsh=d2Y1Nm4wMnF3dXhk',
      facebook:
        'https://www.facebook.com/profile.php?id=100017506695139&mibextid=ZbWKwL',
      awards: {
        global: 'Best Vice of the Month two Times',
        national: 'Best member of the month in November 2023',
      },
    },
    {
      id: '4',
      img: './assets/menna.jpg',
      name: 'Menna Rafat',
      profession: 'HR Head',
      description:
        'Menna Raafat is a dedicated fourth-year student at the Faculty of Business, specializing in Business Information Systems (BIS) at Tanta University. Known for her active involvement in campus life, she currently serves as the HR Head for Hult Prize Tanta University. She has also showcased her organizational talents as a Host at Demo Egypt Summit for Hult Prize Egypt. Her multifaceted contributions reflect her passion for both academic excellence and community engagement. ',
      linkedin:
        'https://www.linkedin.com/in/menna-raafat-064691277?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      instagram:
        'https://www.instagram.com/menna.muhmd.raafat?igsh=YmkzaGk4bGtxeW40',
      facebook: 'https://www.facebook.com/menna.muhmdd.7?mibextid=ZbWKwL',
      awards: {
        global:
          'Best Leader of the 2023-2024 onCampus program at Hult Prize Tanta University. ',
        national: 'Best Leader of the Month seven Times.',
      },
    },
    {
      id: '5',
      img: './assets/zinap.jpg',
      name: 'Zinap Mohamed',
      profession: 'HR Vice',
      description:
        'Zinap is a dedicated fourth-year student at the Faculty of Business, specializing in the Business Information Systems (BIS) department. This season, she is making significant contributions as the HR Vice Leader for the Hult Prize at Tanta University, where she plays a pivotal role in fostering team collaboration and enhancing participant engagement. Her leadership and organizational skills are instrumental in driving the success of the competition and empowering her peers..',
      linkedin: 'https://www.linkedin.com/in/mostafa-ebrahim-29a67025b/',
      instagram:
        'https://www.instagram.com/moustafaiibrahem?igshid=ZDdkNTZiNTM%3D',
      facebook:
        'https://www.facebook.com/profile.php?id=100017140516294&mibextid=ZbWKwL',
      awards: {
        global: 'Best Vice of the Month three Times',
        national: 'Best Member of the Month two Times',
      },
    },
    {
      id: '6',
      img: './assets/ff.jpg',
      name: 'Farahat Adel',
      profession: 'Marketing Leader',
      description:
        'Farahat is a fourth-year student in the Faculty of Commerce, specializing in Business Information Systems (BIS). Currently serving as a marketing leader at hult prize,he bring hands-on experience from his role as a social media specialist at Shary Marketing Agency. Additionally, he is the founder of Advision Marketing Agency, showcasing your entrepreneurial spirit and expertise in digital marketing strategies.',
      instagram:
        'https://www.instagram.com/farahat_adel_?igsh=MXF4MGJsNzB2N2hrOA%3D%3D',
      facebook: 'https://www.facebook.com/farahat.adel.92?mibextid=ZbWKwL',
      awards: {
        national: 'Best Leader Of the Month two Times',
      },
    },
    {
      id: '7',
      img: './assets/yousef.jpg',
      name: 'Yousef Nour',
      profession: 'Marketing Vice',
      description:
        'Yousef Nour is a dedicated student at the Faculty of Commerce, BIS Section. He is actively involved in the Hult Prize, serving as a Marketing Leader and recently being appointed as the new season Campus Director. In the professional realm, Yousef works as a content creator in the marketing field and successfully runs his own company..',
      instagram:
        'https://www.instagram.com/theyousefnour?igsh=cjgweGM3MzdkY3Ry',
      facebook: 'https://www.facebook.com/yousef.nour.372?mibextid=ZbWKwL',
      linkedin:
        'https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Afsd_profile%3AACoAAEO70kABBVS-Bnc1TUqH70P4z1hl3c6a4zY&keywords=yousef%20nour&origin=RICH_QUERY_TYPEAHEAD_HISTORY&position=0&searchId=fdcf286b-d325-49c0-85d8-a43c9974eaab&sid=_%40~&spellCorrectionEnabled=true',
      awards: {
        global: 'Best Vice in the 2024 season',
        national: 'Best Vice Of the Month Five Times',
      },
    },
    {
      id: '8',
      img: './assets/zabdullah.jpg',
      name: 'Zeinab Abdullah',
      profession: 'Marketing Vice',
      description:
        'Zainab, a fourth-year student at BIS with experience in content creation and digital marketing.Zeinab directed Hult members to write content and conduct camps for the Hult Prize Competition at Tanta University.Because of the Hult Prize , Zainab is now training in a big company in the marketing department because she has learned a lot from this place and loves it very much',
      instagram:
        'https://www.instagram.com/zeinab___abdulla?igsh=MXV3dnR0a3J3cmI2cA==',
      facebook:
        'https://www.facebook.com/profile.php?id=100010067643623&mibextid=ZbWKwL',
      linkedin: 'https://www.linkedin.com/in/zeinab-abdullah-42b447256',
      awards: {
        national: 'Best Vice Of the Month two Times',
      },
    },
    {
      id: '9',
      img: './assets/znaty.jpg',
      name: 'Ahmed Znaty',
      profession: 'Media Leader',
      description:
        'Ahmed is a third-year student in the Faculty of Commerce, specializing in Business Information Systems (BIS). Served  as a media leader at Hult Prize. He has an extensive experience in the field of graphic design and video editing, as he participated in many works and projects, he also has strong skills in using design programs such as Adobe Photoshop, in addition to excellent experience in editing programs. ',
      instagram:
        'https://www.instagram.com/zntavigo_1412?igsh=MXc2bDNvMzhwYm0xbg%3D%3D',
      facebook:
        'https://www.facebook.com/profile.php?id=100087018957734&mibextid=ZbWKwL',
      linkedin:
        'https://www.linkedin.com/in/ahmed-znaty-31a411248?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      awards: {
        national: 'Best leader of the month three Times',
      },
    },
    {
      id: '10',
      img: './assets/fawzy.jpg',
      name: 'Ahmed Fawzy',
      profession: 'Media Vice',
      description:
        'Ahmed is a fourth-year student in the Faculty of Commerce, specializing in Business Information Systems (BIS). Currently serving as a media leader at Hult Prize.He has an extensive experience in the field of graphic design and video editing, as he participated in many works and projects, he also has strong skills in using design programs such as Adobe Photoshop,in addition to excellent experience in editing programs.',
      facebook: 'https://www.facebook.com/fawzyahmed.elsade?mibextid=ZbWKwL',
      instagram:
        'https://www.instagram.com/ahmedfawzy_0?igsh=MWhlaWVnbDJ0dHM3Mw==',
      linkedin:
        'https://www.linkedin.com/in/ahmed-fawzy-94154a219?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      awards: {
        global: 'Best Vice Of the Month two Times',
        national: 'Best member Of the Month three Times',
      },
    },
    {
      id: '11',
      img: './assets/noha.jpg',
      name: 'Noha Ibrahim',
      profession: 'Media Vice',
      description:
        'Noha is a fourth_ year in faculty of law Tanta University ,She has extensive experience in the field of graphic design and video editing, as she has participated in many projects. She has strong skills in using design programs such as Adobe Photoshop and Illustrator, in addition to excellent experience in editing programs. She has provided graphic design services to a number of clients, and worked on designing logos, banners, marketing materials, and illustrations. I also produce and edit promotional videos, advertisements, taking into account quality and innovation in every work she does.',
      facebook:
        'https://www.facebook.com/noha.ibrahim.37201901?mibextid=ZbWKwL',
      instagram:
        'https://www.instagram.com/__noha__ibrahim__?igsh=NXNzZTFvY3JqZGFw',
      linkedin:
        'https://www.linkedin.com/in/noha-abdeldaim-529463292?trk=feed-detail_main-feed-card_feed-actor-image',
      awards: {
        global: 'Best Vice in the 2024 season',
        national: 'Best Vice Of the Month seven Times',
      },
    },
    {
      id: '12',
      img: './assets/ola.jpg',
      name: 'Ola Elbrmawey',
      profession: 'PR Leader',
      description:
        "Ola Elbrmawy is a fourth-year student at Tanta University's Faculty of Commerce, specializing in Business Information Systems. They excel in campus leadership as the PR Leader for Hult Prize Tanta University, Ola brings strong leadership, presentation, and public speaking skills to both academic and professional environments.",
      instagram:
        'https://www.instagram.com/olaelbrmawy?igsh=MW5sM21razgxemNxcQ==',
      facebook:
        'https://www.facebook.com/profile.php?id=100071943367832&mibextid=ZbWKwL',
      linkedin:
        'https://www.linkedin.com/in/ola-elbrmawey-551929246?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      awards: {
        national: 'Best Leader Of the Month two Times',
      },
    },
    {
      id: '13',
      img: './assets/ahlam.jpg',
      name: 'Ahlam Fekry',
      profession: 'PR Vice',
      description:
        'Ahlam is a fourth-year student in Business Information Systems at Tanta University. work as an assistant manager at branch KAPCI coatings. Vice Head of PR and FR for the Hult Prize, She focus on building and nurturing relationships with companies and various entities, organizing events and initiatives to support participating teams in the competition.',
      instagram:
        'https://www.instagram.com/ahlam_fekry?igsh=YWpmdDU0dXJ4dmpk&utm_source=qr',
      facebook:
        'https://www.facebook.com/profile.php?id=100004819084720&mibextid=LQQJ4d',
      linkedin:
        'https://www.linkedin.com/in/ahlam-fekry-321a17277?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
      awards: {
        national: 'Best Vice Of the Month three Times',
      },
    },
  ];

  getDataById(id: string) {
    return this.data.find((item: any) => item.id === id);
  }
  constructor() {}
}
