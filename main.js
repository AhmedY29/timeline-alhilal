// Confirm Password && Save User in Local Storage

let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirmPassword");
let fullName = document.getElementById("fullName");
let email = document.getElementById("email");
let errorMsg = document.getElementById("errorMsg");

function handlePasswords(e) {
  e.preventDefault();

  if (password.value.length >= 3 && confirmPassword.value.length >= 3) {
    if (password.value != confirmPassword.value) {
      errorMsg.style.display = "block";
    } else {
      let newUser = {
        fullName: fullName.value,
        email: email.value,
        password: password.value,
      };

      let newUserString = JSON.stringify(newUser);
      console.log(newUserString);
      localStorage.setItem("user", newUserString);
      window.location.href = "./login.html";
    }
  }
}

// Login
let loginPassword = document.getElementById("login-password");
let loginEmail = document.getElementById("login-email");
let loginsBtn = document.getElementById("btn-login");
let loginErrMsg = document.getElementById("loginErrorMsg");
let welcomeDiv = document.getElementById("welcome-div");
let welcomeMsg = document.getElementById("welcome-text");

let user = JSON.parse(localStorage.getItem("user"));
console.log(user);
function handleLogin(e) {
  e.preventDefault();

  if (user.email == loginEmail.value && user.password == loginPassword.value) {
    user.isLogin = true;
    user.postsCount = "5";
    user.posts = [
      {
        title: "أبطال النخبة",
        year: 2025,
        description: "",
        image: "",
        comments: [
          {
            userName: "",
            comment: "",
          },
        ],
      },
      {
        title: "أبطال النخبة",
        year: 2025,
        description: "",
        image: "",
        comments: [
          {
            userName: "",
            comment: "",
          },
        ],
      },
    ];

    let userString = JSON.stringify(user);
    localStorage.setItem("user", userString);
    window.location.href = "./index.html";
  } else {
    loginErrMsg.style.display = "block";
  }
}
if (user.isLogin) {
  loginsBtn.style.display = "none";
  welcomeDiv.style.display = "flex";
  welcomeMsg.innerText = `مرحبا بك, ${user.fullName}`;
}

// Logout
function logout() {
  user.isLogin = false;
  let userString = JSON.stringify(user);
  localStorage.setItem("user", userString);
  window.location.href = "./index.html";
}

// Profile

let profileFullName = document.getElementById("profile-fullName");
let profileLocation = document.getElementById("profile-location");
let profileGender = document.getElementById("profile-gender");
let profilePostsCount = document.getElementById("profile-posts-count");
let profileCommentsCount = document.getElementById("profile-posts-comments");

let noPosts = document.getElementById("withOutPost");
let posts = document.getElementById("posts-cards");

if (user.isLogin) {
  if (profileFullName) {
    profileFullName.innerText = user.fullName || "";
    profileLocation.innerText = user.location || "";
    profileGender.innerText = user.gender || "";
    profilePostsCount.innerText = user.postsCount;
    profileCommentsCount.innerText = user.commentsCount || 0;
  }

  if (!user.posts) {
    noPosts.style.display = "block";
    posts.style.display = "none";
  }
}

// Timeline Storage

let timeline = [
  {
    title: "تأسيس النادي",
    year: 1956,
    categories: ["history"],
    cardDescription:
      "تأسس نادي الهلال تحت اسم الأولمبي في 16 أكتوبر 1957م، على يد الشيخ عبدالرحمن بن سعيد.",
    image: "https://alhilal.sa/imgs/gallery/5751385928.jpg",
    description:
      "يوم الأربعاء 1377/3/21هـ الموافق 1957/10/16م ولد نادي الأولمبي وانضم إليه عدد كبير من اللاعبين منهم: مبارك عبدالكريم وهو أفضل لاعب وهدّاف من الطراز الأول، وصالح جابر أفضل صانع ألعاب وهداف، وصالح أمان من أفضل المدافعين بالمملكة، ومحمد كامل الملقب الكوش جناح أيسر ممتاز وهداف، وعبدالرحمن بن موزان أفضل جناح أيمن في وقته، ويوسف خير الله الدينمو وغيرهم الكثير.بعد عام وشهرين، رفع الشيخ عبدالرحمن بن سعيد خطاباً بأسماء مقترحة لتغيير اسم النادي لجلالة الملك سعود بن عبد العزيز آل سعود -رحمه الله- وهي ثلاثة أسماء (اليمامة – الوحدة – الهلال). وفي برقية رقـم (381) بتاريخ 1378/5/21هـ كتب جلالة الملك سعود بن عبد العزيز إلى بن سعيد: اطلعنا على ما جاء في خطابكم المرفق به بيان بالأسماء التي اقترحتموها وترغبون توجيهكم بما نراه مناسبا، يسمى ناديكم بالاسم الثالث في الخطاب الهلال فاعتمدوا ذلك.",
    comments: [
      {
        userName: "Mohammed",
        comment: "من هنا بدأت الحكاية",
      },
      {
        userName: "ناصر",
        comment: "رحمك الله يالشيخ عبد الرحمن بن سعيد",
      },
    ],
  },
  {
    title: " تغيير الاسم إلى الهلال",
    year: 1958,
    categories: ["history"],
    cardDescription:
      " بأمر ملكي من الملك سعود بن عبدالعزيز، تم تغيير اسم النادي إلى الهلال في 21 مايو 1958م.",
    description:
      "بعد عام واحد فقط، صدر أمر ملكي من الملك سعود بن عبدالعزيز بتغيير اسم النادي إلى الهلال، ليبدأ اسمه يلمع في سماء الكرة السعودية. الاسم الجديد حمل رمزية وطنية وهوية فريدة، وكان بداية لارتباط الجمهور العاشق بفريق سيغدو لاحقًا نادي القرن.",
    image: "",
    comments: [],
  },
  {
    title: "أول بطولة رسمية",
    year: 1961,
    categories: ["history", "trophy"],
    cardDescription: "حقق الهلال أولى بطولاته الرسمية بفوزه بكأس الملك.",
    description:
      "بعد أربع سنوات من التأسيس، كتب الهلال اسمه في سجل الأبطال بتحقيقه أول بطولة رسمية، كأس الملك. كان هذا التتويج بمثابة إعلان قوي أن الهلال ليس مجرد نادٍ ناشئ، بل منافس شرس قادم لحصد البطولات وبسط سيطرته على الكرة السعودية.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKs_kYS5UVEtlrH6-9PxuBSPVuO7thIrMW9A&s",
    comments: [],
  },
  {
    title: "أول لقب دوري سعودي",
    year: 1977,
    categories: ["history", "trophy"],
    cardDescription: "توج الهلال بأول لقب دوري سعودي في موسم 1976-1977.",
    description: "",
    image:
      "https://scontent.fruh6-1.fna.fbcdn.net/v/t39.30808-6/453508676_3467922393339444_4678916312437472612_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=0b6b33&_nc_ohc=Md25G94vQVUQ7kNvwEhxic8&_nc_oc=AdmWBJvveJLrmxhvZRYTLwP77tg6eR_yBkKmYDziUD0g1_mCuEFLitFVIdZh42vaWsJh4I3TYDe7602AlM2-cDMj&_nc_zt=23&_nc_ht=scontent.fruh6-1.fna&_nc_gid=wRFAGXijeK6_Cxp0jORgBg&oh=00_AfK3hiSk3M8rvaUqWHCVjijpGEgg-wkL5-cHGq_2I0G1VA&oe=68253CBD",
    comments: [],
  },

  {
    title: "التتويج القاري الأول",
    year: 1991,
    categories: ["history", "trophy"],
    cardDescription:
      "فاز الهلال ببطولة الأندية الآسيوية أبطال الدوري، محققًا أول لقب قاري.",
    description:
      "في بداية التسعينات، غزا الهلال القارة الآسيوية وتُوج ببطولة دوري أبطال آسيا لأول مرة. هذا اللقب كان بداية لعلاقة طويلة بين الهلال وكؤوس آسيا، حيث أثبت أنه ليس فقط زعيمًا محليًا، بل قوة لا يستهان بها على مستوى القارة.",
    image:
      "https://scontent.fruh6-1.fna.fbcdn.net/v/t39.30808-6/453508676_3467922393339444_4678916312437472612_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=0b6b33&_nc_ohc=Md25G94vQVUQ7kNvwEhxic8&_nc_oc=AdmWBJvveJLrmxhvZRYTLwP77tg6eR_yBkKmYDziUD0g1_mCuEFLitFVIdZh42vaWsJh4I3TYDe7602AlM2-cDMj&_nc_zt=23&_nc_ht=scontent.fruh6-1.fna&_nc_gid=wRFAGXijeK6_Cxp0jORgBg&oh=00_AfK3hiSk3M8rvaUqWHCVjijpGEgg-wkL5-cHGq_2I0G1VA&oe=68253CBD",
    comments: [],
  },
  {
    title: "ثلاثية بطولة الدوري",
    year: "1995 1996 1997",
    categories: ["history", "trophy"],
    cardDescription:
      "فاز الهلال ببطولة الأندية الآسيوية أبطال الدوري، محققًا أول لقب قاري.",
    description: `1995:

 قاد الهلال المدرب البرازيلي ليوفيغيلدو ليوبير إلى لقب الدوري بفارق 4 نقاط عن الأهلي.

النجوم: سامي الجابر، فهد الهريفي، يوسف الثنيان.

1996:

 احتفظ الهلال باللقب بقيادة خالد الكركي، متفوقًا على الشباب.


1997:

 أكمل الهلال الثلاثية تحت قيادة روماريو (كمدرب مؤقت)، مع تتويج سامي الجابر هدافًا.


`,
    image:
      "https://scontent.fruh6-1.fna.fbcdn.net/v/t39.30808-6/453508676_3467922393339444_4678916312437472612_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=0b6b33&_nc_ohc=Md25G94vQVUQ7kNvwEhxic8&_nc_oc=AdmWBJvveJLrmxhvZRYTLwP77tg6eR_yBkKmYDziUD0g1_mCuEFLitFVIdZh42vaWsJh4I3TYDe7602AlM2-cDMj&_nc_zt=23&_nc_ht=scontent.fruh6-1.fna&_nc_gid=wRFAGXijeK6_Cxp0jORgBg&oh=00_AfK3hiSk3M8rvaUqWHCVjijpGEgg-wkL5-cHGq_2I0G1VA&oe=68253CBD",
    comments: [],
  },

  {
    title: "الثنائية الآسيوية",
    year: 2000,
    categories: ["history", "trophy"],
    cardDescription:
      "حقق الهلال لقب دوري أبطال آسيا وكأس السوبر الآسيوي في عام واحد.",
    description:
      "عام استثنائي في تاريخ الهلال؛ ففيه حقق الفريق بطولتي دوري أبطال آسيا وكأس السوبر الآسيوي، ليصبح أول نادٍ آسيوي يحقق هذا الإنجاز في عام واحد. كانت تلك السنة تتويجًا لجيل ذهبي خطف أنظار القارة وأكد أن الهلال هو الرقم الأصعب في آسيا.",
    image:
      "https://scontent.fruh6-1.fna.fbcdn.net/v/t39.30808-6/453508676_3467922393339444_4678916312437472612_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=0b6b33&_nc_ohc=Md25G94vQVUQ7kNvwEhxic8&_nc_oc=AdmWBJvveJLrmxhvZRYTLwP77tg6eR_yBkKmYDziUD0g1_mCuEFLitFVIdZh42vaWsJh4I3TYDe7602AlM2-cDMj&_nc_zt=23&_nc_ht=scontent.fruh6-1.fna&_nc_gid=wRFAGXijeK6_Cxp0jORgBg&oh=00_AfK3hiSk3M8rvaUqWHCVjijpGEgg-wkL5-cHGq_2I0G1VA&oe=68253CBD",
    comments: [],
  },
  {
    title: "تتويج سامي الجابر بلقب هداف آسيا",
    year: 2000,
    categories: ["history", "trophy"],
    cardDescription: "سامي الجابر هدافًا لآسيا",
    description:
      " حصل أسطورة الهلال سامي الجابر على جائزة هداف الدوري الآسيوي بعد تسجيله 9 أهداف في البطولة، مما عزز مكانة النادي دوليًا.",
    image:
      "https://scontent.fruh6-1.fna.fbcdn.net/v/t39.30808-6/453508676_3467922393339444_4678916312437472612_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=0b6b33&_nc_ohc=Md25G94vQVUQ7kNvwEhxic8&_nc_oc=AdmWBJvveJLrmxhvZRYTLwP77tg6eR_yBkKmYDziUD0g1_mCuEFLitFVIdZh42vaWsJh4I3TYDe7602AlM2-cDMj&_nc_zt=23&_nc_ht=scontent.fruh6-1.fna&_nc_gid=wRFAGXijeK6_Cxp0jORgBg&oh=00_AfK3hiSk3M8rvaUqWHCVjijpGEgg-wkL5-cHGq_2I0G1VA&oe=68253CBD",
    comments: [],
  },
  {
    title: "كأس الخليج للأندية",
    year: "2003 - 1998",
    categories: ["history", "trophy"],
    cardDescription: "الهلال يتوج بطلًا للخليج مرتين",
    description:
      "فاز الهلال بلقب كأس الخليج للأندية مرتين، الأولى عام 1998 ضد القادسية الكويتي، والثانية عام 2003 أمام العربي القطري.",
    image:
      "https://scontent.fruh6-1.fna.fbcdn.net/v/t39.30808-6/453508676_3467922393339444_4678916312437472612_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=0b6b33&_nc_ohc=Md25G94vQVUQ7kNvwEhxic8&_nc_oc=AdmWBJvveJLrmxhvZRYTLwP77tg6eR_yBkKmYDziUD0g1_mCuEFLitFVIdZh42vaWsJh4I3TYDe7602AlM2-cDMj&_nc_zt=23&_nc_ht=scontent.fruh6-1.fna&_nc_gid=wRFAGXijeK6_Cxp0jORgBg&oh=00_AfK3hiSk3M8rvaUqWHCVjijpGEgg-wkL5-cHGq_2I0G1VA&oe=68253CBD",
    comments: [],
  },
  {
    title: "لقب نادي القرن الآسيوي",
    year: 2009,
    categories: ["history", "trophy"],
    cardDescription:
      " أعلن الاتحاد الدولي لتاريخ وإحصاءات كرة القدم (IFFHS) عن اختيار الهلال كـ نادي القرن في آسيا للفترة من 1901 إلى 2000",
    description:
      "عام استثنائي في تاريخ الهلال؛ ففيه حقق الفريق بطولتي دوري أبطال آسيا وكأس السوبر الآسيوي، ليصبح أول نادٍ آسيوي يحقق هذا الإنجاز في عام واحد. كانت تلك السنة تتويجًا لجيل ذهبي خطف أنظار القارة وأكد أن الهلال هو الرقم الأصعب في آسيا.",
    image:
      "https://scontent.fruh6-1.fna.fbcdn.net/v/t39.30808-6/453508676_3467922393339444_4678916312437472612_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=0b6b33&_nc_ohc=Md25G94vQVUQ7kNvwEhxic8&_nc_oc=AdmWBJvveJLrmxhvZRYTLwP77tg6eR_yBkKmYDziUD0g1_mCuEFLitFVIdZh42vaWsJh4I3TYDe7602AlM2-cDMj&_nc_zt=23&_nc_ht=scontent.fruh6-1.fna&_nc_gid=wRFAGXijeK6_Cxp0jORgBg&oh=00_AfK3hiSk3M8rvaUqWHCVjijpGEgg-wkL5-cHGq_2I0G1VA&oe=68253CBD",
    comments: [],
  },
  {
    title: "العودة لمنصة آسيا بعد 19 عامًا",
    year: 2019,
    categories: ["history", "trophy"],
    description:
      "بعد سنوات من المحاولات، عاد الهلال بقوة ليُتوج بدوري أبطال آسيا للمرة الثالثة في تاريخه، بعد فوزه المستحق على أوراوا الياباني ذهابًا وإيابًا. هذا الفوز لم يكن مجرد لقب، بل كان استعادة للمكانة، وانتقامًا كرويًا من فريق هزمه سابقًا في 2017.",
    cardDescription:
      "توج الهلال بدوري أبطال آسيا بعد فوزه على أوراوا الياباني، منهياً غيابًا دام 19 عامًا.",
    image: "",
    comments: [],
  },
  {
    title: "ثلاثية بطولة الدوري للمرة الثانية",
    year: "2019 2020 2021",
    categories: ["history", "trophy"],
    cardDescription:
      "فاز الهلال ببطولة الأندية الآسيوية أبطال الدوري، محققًا أول لقب قاري.",
    description: `2019:

         قاد رازفان لوشيسكو الفريق للقب الدوري، مع تتويج بافيتيمبي غوميز هدافًا.


            2020:

         احتفظ الهلال باللقب رغم جائحة كورونا، بفارق 7 نقاط عن النصر.

            النجوم: سالم الدوسري، غوميز، كارلوس إدواردو.

            2021:

         أكمل الهلال الثلاثية تحت قيادة ليوناردو جارديم، مسجلًا 60 هدفًا في الموسم.

            الرقم القياسي: أقل دفاع تلقى أهدافًا (24 هدفًا فقط).
  `,
    image:
      "https://scontent.fruh6-1.fna.fbcdn.net/v/t39.30808-6/453508676_3467922393339444_4678916312437472612_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=0b6b33&_nc_ohc=Md25G94vQVUQ7kNvwEhxic8&_nc_oc=AdmWBJvveJLrmxhvZRYTLwP77tg6eR_yBkKmYDziUD0g1_mCuEFLitFVIdZh42vaWsJh4I3TYDe7602AlM2-cDMj&_nc_zt=23&_nc_ht=scontent.fruh6-1.fna&_nc_gid=wRFAGXijeK6_Cxp0jORgBg&oh=00_AfK3hiSk3M8rvaUqWHCVjijpGEgg-wkL5-cHGq_2I0G1VA&oe=68253CBD",
    comments: [],
  },
  {
    title: "وصيف العالم",
    year: 2022,
    categories: ["history", "trophy"],
    description:
      "وصل الهلال إلى نهائي كأس العالم للأندية لأول مرة في تاريخه بعد الفوز على فلومينينسي البرازيلي، وخسر أمام ريال مدريد 5-3 في مباراة أسطورية.",
    cardDescription: "الهلال أول فريق آسيوي يصل لنهائي العالمي للأندية",
    image: "",
    comments: [],
  },
  {
    title: "موسم لا يُنسى وأرقام تاريخية",
    year: 2024,
    categories: ["history"],
    description:
      "شهد عام 2024 موسمًا استثنائيًا للهلال، حيث لم يُهزم في الدوري، وتُوج باللقب بـ96 نقطة – أعلى رصيد في تاريخ المسابقة. كما دخل النادي موسوعة غينيس بتحقيقه 34 انتصارًا متتاليًا في جميع البطولات، ليُسجل اسمه في سجل الأساطير من جديد.",
    cardDescription:
      "حقق الهلال رقمًا قياسيًا عالميًا بفوزه في 34 مباراة متتالية في جميع المسابقات.",
    image: "",
    comments: [],
  },
  {
    title: "الفوز  بكأس السوبر السعودي",
    year: 2024,
    categories: ["history", "trophy"],
    description: "",
    cardDescription:
      "فاز الهلال بكأس السوبر السعودي بعد تغلبه على النصر بنتيجة 4-1.",
    image: "",
    comments: [],
  },
  {
    title: "كأس الملك للمرة الحادية عشرة",
    year: 2024,
    categories: ["history", "trophy"],
    description: "",
    cardDescription:
      "توج الهلال بكأس خادم الحرمين الشريفين للمرة الحادية عشرة في تاريخه بعد الفوز على النصر بركلات الترجيح.",
    image: "",
    comments: [],
  },
];

function storeTimeline() {
  let timelineString = JSON.stringify(timeline);
  localStorage.setItem("timeline-posts", timelineString);
}

storeTimeline();
function getTimelineFromStore() {
  let timelinePosts = JSON.parse(localStorage.getItem("timeline-posts"));
  timeline = timelinePosts ?? [];
}
getTimelineFromStore();

let timelineCards = document.getElementById("timeline-cards");

function getEvents() {
  timeline.forEach((e) => {
    let cardDiv = document.createElement("div");
    cardDiv.classList.add("card-time");
    cardDiv.innerHTML = `
        <div
          onclick="openDialog('${e.title}')"
          style="width: 500px; cursor: pointer"
          class="timeline-card"
        >
          <div class="year">
            <h1 class="p-2 px-3 text-white m-0 shadow">${e.year}</h1>
          </div>
          <div
            class="card-info d-flex justify-content-between align-items-center p-2 px-3 text-white shadow"
          >
            <div class="text w-50">
              <h3>${e.title}</h3>
              <p>
              ${e.cardDescription}
              </p>
            </div>
            <div class="img overflow-hidden">
              <img src=${
                e.categories.includes("trophy")
                  ? "https://i.pinimg.com/474x/fe/aa/15/feaa154dcf5bff71590d66cfd883d8ae.jpg"
                  : e.categories.includes("history")
                  ? "https://static.vecteezy.com/system/resources/previews/026/703/972/non_2x/timeline-icon-line-style-vector.jpg"
                  : ""
              } width="100" class="rounded-circle" alt="card-img" />
            </div>
          </div>
        </div>
     `;
    timelineCards.appendChild(cardDiv);
  });
}

getEvents();

// Dialog

let dialog = document.getElementById("dialog");
let titleTimeline = document.getElementById("title-timeline");
let descriptionTimeline = document.getElementById("description-timeline");
let timelineImgDialog = document.getElementById("timeline-img-dialog");
let commentsSection = document.getElementById("comments-section");
let post;
function openDialog(title) {
  dialog.open = true;
  post = timelineObj.find((e) => {
    return e.title == title;
  });
  if (post) {
    titleTimeline.innerText = post.title;
    descriptionTimeline.innerText = post.description;
    timelineImgDialog.src = post.image;
    timelineImgDialog.style.width = "80%";

    console.log(post.comments.length > 0);
    if (post.comments.length > 0) {
      post.comments.forEach((e) => {
        let commentDiv = document.createElement("div");

        commentDiv.innerHTML = `
            <div class="comment shadow-sm borderr container rounded-4 p-2">
              <div class="user d-flex gap-2 align-items-center">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"
                  alt="avatar"
                  width="30"
                  class="rounded-circle"
                />
                <h5 class="primary-text m-0">${e.userName}</h5>
              </div>
  
              <div class="comment-content my-2">
                <p class="m-0">${e.comment}</p>
              </div>
            </div>`;
        commentsSection.appendChild(commentDiv);
      });
    } else {
      let commentDiv = document.createElement("div");
      commentDiv.innerHTML += `<div>
            <h6 >لا توجد تعليقات بعد...</h6>
        </div>
        `;
      commentsSection.appendChild(commentDiv);
    }
  }
  document.body.style.overflow = "hidden";
  console.log(post);
}
function closeDialog() {
  dialog.open = false;
  post = "";
  commentsSection.innerHTML = "";
  document.body.style.overflow = "auto";
  console.log(post);
}

// add Comment

let inputComment = document.getElementById("new-comment").value;

function handleAddComment(title) {
  post = timelineObj.find((e) => {
    return e.title == title;
  });

  if (post) {
    let comment = {
      userName: user.fullName,
      comment: inputComment,
    };
    post.comments.push(comment);
  }
}

// Add Event
let addDialog = document.getElementById("addDialog");
function handleOpenAddDialog() {
  addDialog.open = true;
  document.body.style.overflow = "hidden";
}
function handleCloseAddDialog() {
  addDialog.open = false;
  document.body.style.overflow = "auto";
}

function handleAddEvent(e) {
  e.preventDefault();
  let eventTitle = document.getElementById("event-title").value;
  let eventDate = document.getElementById("event-date").value;
  let eventCardDesc = document.getElementById("event-cardDesc").value;
  let eventDescripiton = document.getElementById("event-descripiton").value;
  let eventImage = document.getElementById("event-image").value;
  let eventCategory = document.getElementById("event-category").value;

  console.log(eventTitle);

  let newPost = {
    title: eventTitle,
    year: eventDate,
    cardDescription: eventCardDesc,
    description: eventDescripiton,
    categories: eventCategory,
    image: eventImage,
    comments: [],
  };

  timeline.push(newPost);

  storeTimeline();
  getEvents();
  handleCloseAddDialog();
}
