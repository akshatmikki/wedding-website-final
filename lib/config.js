/* ============ YAHAN APNI DETAILS BADLEIN ============ */
export const WEDDING = {
  bride:"Somya", groom:"Aman",
  countdownTo:"2027-02-21T18:30:00+05:30",
  venue:{name:"The Rose Palace", addr:"Amer Road, Jaipur, Rajasthan 302002", map:"https://www.google.com/maps/search/?api=1&query=Jaipur+Rajasthan"},
  families:{
    bride:{names:"Shri Rajesh & Smt. Sunita Sharma", text:"ki laadli beti Somya"},
    groom:{names:"Shri Vikram & Smt. Anita Malhotra", text:"ke suputra Aman"}
  },
  /* Asli photos: yahan data:image/jpeg;base64,... ya image ka link daalein. Khali chhodne par painted panel dikhega. */
  photos:{haldi:"",mehendi:"",sangeet:"",baraat:"",phere:"",reception:""},
  /* Hero ke liye asli photo: transparent PNG cutout (dulhan aur dulha ghodi par) yahan daalein. Khali = painted figure. */
  cutouts:{bride:"",groom:""},
  events:[
    {key:"haldi", name:"Haldi", dv:"हल्दी", hi:"Peela peela pyaar", day:"19 Feb, Shukravar", time:"10:00 AM", where:"Garden Lawn", colors:["#F5C518","#FFFFFF"], dress:"Peela ya white, jo kharab ho jaaye toh dukh nahi",
      ras:"Ubtan dulha-dulhan ko lagaya jaata hai taaki shaadi ke din chehre pe nikhaar aaye. Parivaar ke sab log baari-baari se haldi lagate hain, aur haan, sab ko lagti hai."},
    {key:"mehendi", name:"Mehendi", dv:"मेहंदी", hi:"Haathon pe rang", day:"19 Feb, Shukravar", time:"4:00 PM", where:"Courtyard", colors:["#2E7D4F","#F4A6B8"], dress:"Hara ya pastel Indian wear",
      ras:"Dulhan ke haathon aur pairon par mehendi lagti hai, design mein dulha ka naam chhupa hota hai. Saath mein chai, chaat aur purane gaane."},
    {key:"sangeet", name:"Sangeet", dv:"संगीत", hi:"Gaana, naachna, masti", day:"20 Feb, Shanivar", time:"7:30 PM", where:"Grand Ballroom", colors:["#C2185B","#0B7A75","#F5A00F"], dress:"Glam Indo-western ya lehenga, dance floor ready",
      ras:"Dono parivaar ek saath naachte-gaate hain. Family performances, dhol aur Bollywood gaane, poori raat masti."},
    {key:"baraat", name:"Baraat & Milni", dv:"बारात", hi:"Ghodi chadhi, dhol bajaa", day:"21 Feb, Ravivaar", time:"6:30 PM", where:"Venue ke gate par", colors:["#F5A00F","#C2185B","#FFFFFF"], dress:"Bright festive: safa, sherwani, lehenga ya saree",
      ras:"Dulha ghodi par, aage dhol aur naachte baraati. Milni mein dono parivaar ek doosre ko haar pehnate hain. Naachne ke liye jooton ka dhyaan rakhiye."},
    {key:"phere", name:"Jaimala & Phere", dv:"फेरे", hi:"Saat pheron ka bandhan", day:"21 Feb, Ravivaar", time:"9:00 PM", where:"Mandap Lawn", colors:["#B3122B","#D4A017"], dress:"Traditional: saree, lehenga, sherwani ya kurta",
      ras:"Jaimala ke baad agni ke saamne saat phere aur saat vachan. Sindoor aur mangalsutra ke saath naya jeevan shuru hota hai."},
    {key:"reception", name:"Reception", dv:"प्रीतिभोज", hi:"Dawat aur duaayein", day:"22 Feb, Somvar", time:"8:00 PM", where:"Grand Ballroom", colors:["#0F3A5C","#D4A017","#C2185B"], dress:"Formal ya festive Indian wear",
      ras:"Shubhkamnaayein dene aur dawat ka din. Naye jode ke saath photo zaroor kheenchiye."}
  ],
  contacts:[{name:"Rohit (Dulhan ke bhai)", tel:"+91 98XXX XXXXX"},{name:"Meera (Dulha ki behen)", tel:"+91 97XXX XXXXX"}],
  stay:"Guests ke liye The Rose Palace ke paas Hotel Gulab Vilas mein rooms book hain. Booking ke liye parivaar ke kisi member se contact karein.",
  parking:"Venue pe free valet parking hai. Ghar se aate waqt cab lena bhi asaan rahega.",
  travel:"Jaipur Airport se venue lagbhag 40 minute door hai. Railway station se 25 minute. Ola aur Uber dono milte hain.",
  gifts:"Aapka aashirwad hi humare liye sabse bada tohfa hai. Please koi gift lana zaroori nahi hai."
};

/* GALLERY: har photo {src:'/photos/1.jpg' ya data URI, cat:'Pre-wedding', cap:'Caption', hero:true} */
export const GALLERY = [];
WEDDING.photo = "/ganesh.jpg";

WEDDING.people={
  bride:{role:"Dulhan", photo:"", line:"Kitaabon, chai aur purane gaanon ki deewani. Jaipur ki ladki, dil se poori filmy."},
  groom:{role:"Dulha", photo:"", line:"Cricket, cameras aur mummy ke haath ke parathe. Kaam mein serious, pyaar mein us se bhi zyada."}
};
