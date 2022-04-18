const defaultData = [
  {
      "dateString": "Mon Mar 21 2022",
      "moodRank": 29
  },
  {
      "dateString": "Tue Mar 22 2022",
      "moodRank": 43
  },
  {
      "dateString": "Wed Mar 23 2022",
      "moodRank": 57
  },
  {
      "dateString": "Thu Mar 24 2022",
      "moodRank": 71
  },
  {
      "dateString": "Fri Mar 25 2022",
      "moodRank": 71
  },
  {
      "dateString": "Sat Mar 26 2022",
      "moodRank": 57
  },
  {
      "dateString": "Sun Mar 27 2022",
      "moodRank": 43,
      "mj": true
  },
  {
      "dateString": "Mon Mar 28 2022",
      "moodRank": 43,
      "mj": true
  },
  {
      "dateString": "Tue Mar 29 2022",
      "moodRank": 57
  },
  {
      "dateString": "Wed Mar 30 2022",
      "moodRank": 43
  },
  {
      "dateString": "Thu Mar 31 2022",
      "moodRank": 43,
      "mj": true
  },
  {
      "dateString": "Fri Apr 01 2022",
      "moodRank": 57
  },
  {
      "dateString": "Sat Apr 02 2022",
      "moodRank": 57,
      "mj": true
  },
  {
      "dateString": "Sun Apr 03 2022",
      "moodRank": 71,
      "mj": true
  },
  {
      "dateString": "Mon Apr 04 2022",
      "moodRank": 43,
      "mj": true
  },
  {
      "dateString": "Tue Apr 05 2022",
      "moodRank": 57
  },
  {
      "dateString": "Wed Apr 06 2022",
      "moodRank": 71,
      "mj": true
  },
  {
      "dateString": "Thu Apr 07 2022",
      "moodRank": 57,
      "mj": true
  },
  {
      "dateString": "Fri Apr 08 2022",
      "moodRank": 57,
      "mj": true
  },
  {
      "dateString": "Sat Apr 09 2022",
      "moodRank": 43,
      "mj": true
  },
  {
      "dateString": "Sun Apr 10 2022",
      "moodRank": 43,
      "mj": true
  },
  {
      "dateString": "Mon Apr 11 2022",
      "moodRank": 71
  },
  {
      "dateString": "Tue Apr 12 2022",
      "moodRank": 71,
  },
  {
      "dateString": "Tue Apr 13 2022",
      "moodRank": 57,
      "mj": true
  },
];

class FBHandler {
  constructor() {

  }
  wait(ms) {
    return new Promise(r => setTimeout(r, ms));
  }
  async getData() {
    await this.wait(2000);
    return defaultData;
  }
  async checkAuth(auth) {
    await this.wait(1000);
    return auth
  }
}

export default FBHandler;
