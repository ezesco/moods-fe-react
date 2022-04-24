import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyB5jv3nmqhcXzgl2W0_eJJX0-r9h6H5w04",
  authDomain: "mood-tracker-app-258a9.firebaseapp.com",
  projectId: "mood-tracker-app-258a9",
  storageBucket: "mood-tracker-app-258a9.appspot.com",
  messagingSenderId: "30633074411",
  appId: "1:30633074411:web:0c4f3d725293eb23d868ae",
  measurementId: "G-FEBB5NN3CJ"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider();
const defaultData = [
    {
        "dateString": "Mon Mar 21 2022",
        "moodRank": 33
    },
    {
        "dateString": "Tue Mar 22 2022",
        "moodRank": 50
    },
    {
        "dateString": "Wed Mar 23 2022",
        "moodRank": 67
    },
    {
        "dateString": "Thu Mar 24 2022",
        "moodRank": 83
    },
    {
        "dateString": "Fri Mar 25 2022",
        "moodRank": 83
    },
    {
        "dateString": "Sat Mar 26 2022",
        "moodRank": 67
    },
    {
        "dateString": "Sun Mar 27 2022",
        "moodRank": 50,
        "mj": true
    },
    {
        "dateString": "Mon Mar 28 2022",
        "moodRank": 50,
        "mj": true
    },
    {
        "dateString": "Tue Mar 29 2022",
        "moodRank": 67
    },
    {
        "dateString": "Wed Mar 30 2022",
        "moodRank": 50
    },
    {
        "dateString": "Thu Mar 31 2022",
        "moodRank": 50,
        "mj": true
    },
    {
        "dateString": "Fri Apr 01 2022",
        "moodRank": 67
    },
    {
        "dateString": "Sat Apr 02 2022",
        "moodRank": 67,
        "mj": true
    },
    {
        "dateString": "Sun Apr 03 2022",
        "moodRank": 83,
        "mj": true
    },
    {
        "dateString": "Mon Apr 04 2022",
        "moodRank": 50,
        "mj": true
    },
    {
        "dateString": "Tue Apr 05 2022",
        "moodRank": 67
    },
    {
        "dateString": "Wed Apr 06 2022",
        "moodRank": 83,
        "mj": true
    },
    {
        "dateString": "Thu Apr 07 2022",
        "moodRank": 67,
        "mj": true
    },
    {
        "dateString": "Fri Apr 08 2022",
        "moodRank": 67,
        "mj": true
    },
    {
        "dateString": "Sat Apr 09 2022",
        "moodRank": 50,
        "mj": true
    },
    {
        "dateString": "Sun Apr 10 2022",
        "moodRank": 50,
        "mj": true
    },
    {
        "dateString": "Mon Apr 11 2022",
        "moodRank": 83
    },
    {
        "dateString": "Tue Apr 12 2022",
        "moodRank": 83
    },
    {
        "dateString": "Tue Apr 13 2022",
        "moodRank": 67,
        "mj": true
    }
];
const dataByMonth = {
    "m2y2022": [
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
        }
    ],
    "m3y2022": [
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
            "moodRank": 71
        },
        {
            "dateString": "Tue Apr 13 2022",
            "moodRank": 57,
            "mj": true
        }
    ]
};

class FBHandler {
  constructor() {

  }
  wait(ms) {
    //Testing
    return new Promise(r => setTimeout(r, ms));
  }
  async getData() {
    await this.wait(2000);
    return defaultData;
  }
  async googleSignUp() {
    const auth = getAuth();
    const result = await signInWithPopup(auth, provider);
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
    return user;
  }
  async checkUser(user) {
    await this.wait(1000);
    return user;
  }
}

export default FBHandler;
