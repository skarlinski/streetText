var map = L.map('map').setView([31.771959,35.217018], 8);
var posterData = getData();
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

function searchResults(str){
    for(var i=0;i<posterData.length;i++){
      if( ! str ){
        resultItem(posterData[i])
      }
      else if(posterData[i]['text'].indexOf(str) > -1){
        resultItem(posterData[i],str)
      }else{
        var el = document.getElementById("id_"+posterData[i].id)
        if(el){
          el.parentElement.removeChild(el)
        }
      }
      
    }
}

function resultItem(item,str){
  if(document.getElementById("id_"+item.id)){
    document.getElementById("id_match_"+item.id).innerText = getWordsAround(str,item.text);
    if(!str){document.getElementById("id_match_"+item.id).innerText = ''}
    return;
  }
  var container = document.getElementById('search_results');
  var res = document.createElement('li');
  res.id = "id_"+item.id;
  res.style.borderBottom = "1px solid";

  
  var title = document.createElement('h3');
  title.innerText = item.title?item.title:'ארכיון';

  var pubPlace = document.createElement('h4');
  pubPlace.innerText = "מקום ההוצאה: " + item.pubPlace;


  var date = document.createElement('h4');
  date.innerText = "תאריך: " + item.date;
  
  var match = document.createElement('b');
  match.id = "id_match_"+item.id
  if(str){match.innerText = getWordsAround(str,item.text);}
  if(!str){match.innerText = '';}
  
  res.appendChild(title);
  res.appendChild(pubPlace);
  res.appendChild(date);
  res.appendChild(match);

  

  container.appendChild(res)
  addMarker(item)

}

function getWordsAround(str,text){
  var arr = text.split(' ');
  var i;
  output = '';
  for( i = 0;i<arr.length;i++){
    if(arr[i].indexOf(str)>-1){break;}
  }
  if(i > 0) {output += arr[i-1] + ' ';}
  if(arr[i])output += arr[i] + ' ';
  if(arr[i+1]) output += arr[i+1];
  return output;

}
function addMarker(item){

  var id = item['id'];

  item.marker = L.marker([item.lat,item.long]).addTo(map);
  item.marker.bindPopup("<img src = '/images/"+item.id + ".jpg' style = 'width:400px'/>",{maxWidth : 560});
/*  item.marker.on('click',function(e){
    (function(marker){
        updateSidebar(marker);
    }(marker))
  });*/
}
function removeMarker(item){

}
function initSearch(){
  document.getElementById('search_bar').onkeyup = function(e){
    searchResults(e.target.value);
  }
}
/*function updateSidebar(data){
  document.getElementById('poster_name').innerText = data.title?data.title:'Title'
  document.getElementById('poster_text').innerText = data.text?data.text:'Text'
  document.getElementById('poster_img').src = '/images/'+data.id + ".jpg"

}*/


//addMarkers(getData(),map);
initSearch();
searchResults();
function filterMarkers(text,markers){

}

function getData(){

  return [
 {
   "id": 700107199,
   "text": "אל הקהל העברי!\nבתור נבחרי הקהל אנו מוצאים לחובה לנו לתת לפניו באורים על המצב בעדה, למען ששום דבר סתום לא יהיה בעיניו ולהתמיד ע\"י זה בהבנה הדדית בין שליחי הצבור ובין שולחיהם.\nבזמן הריסה בעדה, ע\"י החכוכים הפנימיים הקודמים, נכנסנו לעבודה ועלינו לבנות הכל מחדש. הגרעון הכספי וההתחיבויות בקשר עם ההסכמים המוקדמים שקבלנו, מעמיסים עלינו עול גדול. מתוך כונה טהורה להוציא כל זה לפועל, להשביע רצון כל החוגים ולהיות באמת בא-כח מעשי של כל השדרות נגשנו בעוז לעבודה.\nאנו התחבטנו הרבה בשאלת הבשר הכשר שמצד אחד חפצנו לעמוד על עניני הצבור וטובתו ולהוזיל עד כמה שאפשר את מחיר הבשר ומצד שני היתה חובתנו לדאוג גם בעד אמצעי הקיום של ועד העדה.\nאחרי עמל ויגיעה רבה עלה בידינו לסדר הדבר לטובת שני הצדדים. בהתאם לדעת הקהל המובעת באספות כלליות שונות בטלנו את מס הגבלה וכעת אנו מקבלים מס-בשר אי-גדול מאת הקצבים באופן שלא ישפיע באף מה שהוא על מחיר הבשר. הקצבים העברים התחיבו בחזה למכור במשך כל השנה בשר למחיר ½2 גר\"מ. כל אוקיה בלי עצמות. אלא בהיות שבענת החרף מחיר הבהמות ביוקר מאד, הרשינו להם להעלות את המחיר רק במשך שני חדשים (אדר א' וטבת) עד 3 גר\"מ. האוקיה. מכל רוטל בשר כשר משלמים הקצבים ½2 גר\"מ. לקופת הועד.\nאנו מתעסקים עכשיו בסדור משרד הרבנות שיהיה מתאים לכבוד העדה. הועד מקבל עליו את כל תקציב המשרד בתנאי שהכנסות משרד הרבנות תעברנה על ידו ותהיינה שיכות לו. הועד אומר לרכז את משרד הרבנות בתוך דירת הועד החדשה שירכוש בקרוב.\nהועד לקח עמדת פעילות בכל השאלות הכלליות בעולמנו, העומדות על הפרק כגון בענין העזבון של הנדיב כדורי המנוח, בדבר אופן הבחירות החדשות לרבנות הראשית בא\"י, בתנועה של \"למען תוצרת הארץ\" וכדומה ועומד על המשמר בכל הענינים הנוגעים לקהלה.\nלרגלי המצב של חסר עבודה בעיר מצאנו לנחוץ ליסוד ע\"י הועד \"מועצת עבודה\" שבה יקחו חלק באי-כח ההסתדרויות, השכונות והמוסדות שבחיפה. אנו מקוים שמועצה זו תצליח לאפשר במדה ידועה את השגת עבודה למחוסריה ולאמץ ידים עבריות עובדות.\nתקונים שונים עומדים לפנינו לפתרון. אנו מסדרים עכשיו את התקציב שיכיל את כל הצרכים האפשריים של העדה כמו צרכי דת, תרבות, תמיכה לעניים, עזרה מדיצינית, סיוע למוסדות ועוד, אבל למען גשם בחיים את כל הדברים האלה נחוצה לנו עזרת הקהל. ועדת הערכה המורכבת מבאי-כח סוגים שונים, הטילה מסים חדשיים על כל בני העדה. המסים האלה אינם גדולים בהתחשבות עם הצרכים המרובים של העדה ועם זה שאנו הפסקנו את מס הגבלה שהוא היה היסוד העיקרי של הכנסות הועדים הקודמים ופטרנו את הקהל מחמת הבלתי ישר. יחד עם הצבור אנו שואפים לבסוס העדה, ע\"י אמצעים שהוא, עפ\"י הבעותיו באספות כלליות, מצא אותם להכי נכונים וישרים והם הטלת מס הערכה על כל איש ואיש.\nבטוחים אנו בהרגש הלאומי הבריא של הצבור שיתן לנו את ידו להקים בחיפה עדה עברית מופתית, עומדת ברשות עצמה וקימת בעזרת כל בניה-בוניה, לכבוד להעם ולארץ.\nועד העדה העברית.\nאדר א' תרפ\"ד\nחיפה\n",
   "pubPlace": "חיפה",
   "lat": 34.983333333,
   "long": 32.8,
   "date": "1924-02",
   "url": "http://rosetta.nli.org.il/delivery/DeliveryManagerServlet?dps_pid=IE8754858",
   "title":"כותרת יפה"
 },
 {
   "id": 700107232,
   "text": "מודעה ואזהרה חמורה.\nבנוגע לרשיונות 1) בנין בתים ואורוות; 2) תקונים בבתים ישנים; 3) תקוני צנורות וחבורם לצנורות המרכזיים; 4) בנין גדרים קבועים על גבול פני הרחוב.\nאנו מזהירים בזה את בעלי הבתים וכ\"כ את בעלי-המלאכה, שבל יהינו לגשת לשום עבודה קלה ואפילו חפירת היסודות, - לפני שיקבלו רשיון מאת המועצה. בכל מיני חומריות יכבידו על אלו שיבואו לקבל רשיון אחרי שכבר התחילו כבר בעבודה בלי רשיון, וגם יענישו אותם ולפעמים גם בהריסת הבנין.\nלמותר הוא לבאר לקהל שכוונת המועצה בזה הוא טובת המושבה בכללה וגם טובת כל פרט ופרט, ועד כמה שאפשר יקילו בתנאי שזה לא יפריע לשפור המושבה ושכלולה, ובפרט עכשיו שאנו עומדים לפני סלילת כבישים ברוב רחובות המושבה.\nבכבוד הראוי, ראש המועצה המקומית:\nט\"ו טבת תרפ\"ו - 1.1.1926",
   "pubPlace": "פתח תקווה",
   "lat": 32.08707,
   "long": 34.88747,
   "date": "1926-01-01",
   "url": "http://rosetta.nli.org.il/delivery/DeliveryManagerServlet?dps_pid=IE5012238",
   "title":"כותרת חדשה"
 },
 {
   "id": 700107285,
   "text": "התאחדות האכרים בא\"י המחלקה למטעי הדר תל-אביב\nלכבוד הועד החקלאי.\nא. נ.\nנבקשכם לשלוח לנו רשימה של חבריכם, נתיני חוץ-לארץ, שסבלו נזק ברכושם בגלל המאורעות שלאחרי 12 באוקטובר 1936. ברשימה נבקשכם לפרט: שם הניזוק נתינותו מקום הנזק תאריך הנזק פרטי הנזק וכו'\nבטוחים הננו כי הנכם מכירים בערך רשימה זו לגבי דרישותינו מהממשלה לחדש את תשלומי הנזקים ותתאמצו למלא את מבוקשנו בדיקנות ובהקדם.\n25 בספטמבר 1938\nתל-אביב\nבברכת שנה טובה\nי. כהן\nמזכיר.",
   "pubPlace": "נתניה",
   "lat": 32.33291,
   "long": 34.85992,
   "date": "1938-09-25",
   "url": "http://rosetta.nli.org.il/delivery/DeliveryManagerServlet?dps_pid=IE9049689"
 }
]
}