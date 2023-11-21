const discs = [
    {
		"image": "./assets/Disc-img/disc-img_anax.jpeg",
        "name": "ESP Anax",
        "brand": "discraft",
        "speed": "10",
        "glide": "6",
        "turn": "0",
        "fade": "3",
		"discType": "distance",
    "description": "Introducing the 3rd disc in Paul McBeth's lineup - The Anax (pronounced 'aa·nuhks'). A strong, overstable fairway driver with the sharp rim of a distance driver but the comfort, thinner rim, and precision of a fairway driver."
    
    },    

	{
		"image": "./assets/Disc-img/disc-img_hex.png",
        "name": "Hex",
        "brand": "mvp",
        "speed": "5",
        "glide": "5",
        "turn": "-1",
        "fade": "1",
		"discType": "midrange",
    "description": "Mesmerizingly straight, with flight numbers of 5/5/-1/1, the Hex will find a place in anyone’s bag as a versatile and reliably straight midrange. At the highest arm speeds, the Hex will produce slightly understable lines from flat, but the 1 fade keeps it from flipping over completely. For lower arm speeds, the Hex has enough turn to make shaping lines a breeze. If you are looking for control in the woods, or simply a versatile line shaper, the Hex is the midrange for you."

    },
	   
	{
		"image": "./assets/Disc-img/disc-img_wraith.jpg",
        "name": "Wraith",
        "brand": "innova",
        "speed": "11",
        "glide": "5",
        "turn": "-1",
        "fade": "3",
		"discType": "distance",
    "description": "The Wraith is a long stable Distance Driver with speed, glide and accuracy. This Wraith can provide great distance for players of all skill levels. It is an excellent down wind driver that also performs predictably into the wind. The Star Wraith is endorsed by 12-time World Champion, Ken Climo."
    },

	{
		"image": "./assets/Disc-img/disc-img_berg.jpg",
        "name": "Berg",
        "brand": "kastaplast",
        "speed": "1",
        "glide": "1",
        "turn": "0",
        "fade": "2",
		"discType": "putter",
    "description": "The Berg can be trusted not to hover far passed the basket even on windy days. What characterizes Berg when thrown off tee is its good high speed stability, without a very hard fade,  a combination that makes this disc easy to shape various lines with."
    },

	{
		"image": "./assets/Disc-img/disc-img_destroyer.jpeg",
        "name": "Destroyer",
        "brand": "innova",
        "speed": "12",
        "glide": "5",
        "turn": "-1",
        "fade": "3",
		"discType": "distance",
    "description": "“The Destroyer has always been the standard when it comes to distance drivers. It has the perfect complement of rim size and controlled distance,” says Ricky Wysocki. The Destroyer is a great disc for sidearm throwers and those with lots of power. “In the past, I’ve had separate sidearm and backhand distance drivers. The Destroyer is so versatile."
    },
	
	{
		"image": "./assets/Disc-img/disc-img_envy.jpeg",
        "name": "Envy",
        "brand": "mvp",
        "speed": "3",
        "glide": "3",
        "turn": "0",
        "fade": "2",
		"discType": "putter",
    "description": "The Envy has a smooth modern feel that fits in the hand perfectly, lending confidence for both putt and approach duties. The Envy exhibits reliable high-speed stability and a minimal fade. With a slightly lower profile and cruising speed than the Ion and Anode class, the Envy is a uniquely “lid-like” stable putter."
    },

    {
		"image": "./assets/Disc-img/disc-img_falk.png",
        "name": "Falk",
        "brand": "kastaplast",
        "speed": "9",
        "glide": "6",
        "turn": "-2",
        "fade": "1",
		"discType": "distance",
    "description": "The Falk controls the fairways and reaches its target efficiently by using the right combination of speed, glide and accuracy. Just like the bird it was named after. This versatile fairway driver fits the skills and power of a wide range of players. Falk loves tailwinds and long anhyzer lines. It loves to fly! With a comfortable grip and a rim width at 19 mm the Falk suits most hands and styles."
    },      

    {
		"image": "./assets/Disc-img/disc-img_fd.jpeg",
        "name": "FD",
        "brand": "discmania",
        "speed": "7",
        "glide": "6",
        "turn": "0",
        "fade": "1",
		"discType": "fairway",
    "description": "Discmania's first true Fairway Driver is also known as the Jackal. The FD is so controllable low-speed driver, that once you learn its magic you'll never leave it out of your bag. Packed with gigantic glide, this bad boy is also sneaky long if thrown accordingly. The Jackal is at its best when you need to make an accurate drive and land smoothly on the fairway."
    }, 
    
    {
		"image": "./assets/Disc-img/disc-img_glitch.jpeg",
        "name": "Glitch",
        "brand": "mvp",
        "speed": "1",
        "glide": "7",
        "turn": "0",
        "fade": "0",
		"discType": "putter",
    "description": "The next great experiment from MVP R&D Lab, the Glitch is a hybrid catch disc designed to blur the lines between disc golf and a catch disc. The Glitch has the diameter of a putter and is PDGA approved as well, making it truly the best of both worlds. With flight numbers of 1 | 7 | 0 | 0, the Glitch is the first MVP disc with 7 glide — just a flick of the wrist is all that stands between you and a game of catch on the beach or an approach to the green!"
    },

    {
		"image": "./assets/Disc-img/disc-img_kaxe.jpeg",
        "name": "Kaxe",
        "brand": "kastaplast",
        "speed": "6",
        "glide": "4",
        "turn": "0",
        "fade": "3",
	    "discType": "midrange",
      "description": "This disc is appreciated for its predictable flight and will come in handy in numerous situations on the course. Due to its slim proportions and decent stability, Kaxe handles wind well without being very overstable. A true multi-purpose disc which has become many players new favourite workhorse control disc."
    },

    {
	    "image": "./assets/Disc-img/disc-img_leopard.jpeg",
        "name": "Leopard",
        "brand": "innova",
        "speed": "6",
        "glide": "5",
        "turn": "-2",
        "fade": "1",
	    "discType": "fairway",
      "description": "The Leopard should be everyoneís first fairway driver as it is has excellent glide and is easy to throw straight and far. The Leopard is a great turnover disc for players of all skill levels. More experienced players can use the Leopard for throwing distance stretching Hyzer Flip shots. The Leopard makes a dependable long range roller."
    },

    {
	    "image": "./assets/Disc-img/disc-img_link.jpeg",
        "name": "Link",
        "brand": "discmania",
        "speed": "2",
        "glide": "3",
        "turn": "0",
        "fade": "1",
	    "discType": "putter",
      "description": "The Link has a stable flight for a putter, able to take large amounts of spin without getting floaty and able to glide to the basket without fading out too soon. The Link fits the perfect all around putter for beginners and seasoned pros alike. This putter features a big bead on the rim that makes the Link feel comfortable and helps it glide out of the hand easily on every shot. The Link is slightly shorter than the P2 while not being short enough to qualify as low profile."
    },

    {
    	"image": "./assets/Disc-img/disc-img_penrose.jpeg",
        "name": "Penrose",
        "brand": "ev-7",
        "speed": "2",
        "glide": "4",
        "turn": "0",
        "fade": "2",
		"discType": "putter",
    "description": "The Penrose is EV-7's debut putt and approach disc. It has reliable high-speed over stability and resistance to turn, but is uniquely straight with consistent fade at lower speeds on the putting green. With a slightly deeper profile, small bead, and smooth feel, the Penrose fits the hand comfortably, inspiring confidence for both putts and upshots."
    },

    {
		"image": "./assets/Disc-img/disc-img_roc.jpeg",
        "name": "Roc",
        "brand": "innova",
        "speed": "4",
        "glide": "4",
        "turn": "0",
        "fade": "3",
	    "discType": "midrange",
      "description": "The Roc is simply the best, most versatile mid-range disc ever made. It provides accuracy at any range. This disc can take and hold the angle of release, even into a headwind. It can be used for driving, upshots, straight shots, hyzer shots or anhyzers. The Roc ages gradually and predictably. If youíre not sure what disc to throw, choose the Roc; just like most pros."
    },

    {
	    "image": "./assets/Disc-img/disc-img_teebird.jpeg",
        "name": "Teebird",
        "brand": "innova",
        "speed": "7",
        "glide": "5",
        "turn": "0",
        "fade": "2",
	    "discType": "fairway",
      "description": "The TeeBird is one of our most accurate and reliable fairway drivers. It has a combination of straight flight, high glide and good speed that make it accurate and long flying both upwind and downwind. It is a popular choice for pros including 12 time World Champion and Hall-of-Famer Ken Climo."
    },

    {
		"image": "./assets/Disc-img/disc-img_zone.jpeg",
        "name": "Zone",
        "brand": "discraft",
        "speed": "4",
        "glide": "3",
        "turn": "0",
        "fade": "3",
		"discType": "putter",
    "description": "Advanced players love the overstable, low-profiled Zone putter. Will hold the line without flipping on long approaches, and delivers predictable putts even in windy conditions."
    },

    {
      "image": "./assets/Disc-img/new-page_img/new-disc-img_diamond.jpeg",
          "name": "Diamond",
          "brand": "Latitude 64",
          "speed": "8",
          "glide": "6",
          "turn": "-3",
          "fade": "1",
          "description": "Diamond is the choice of disc for beginners, children and players with moderate arm speed. It is manly produced in lower weights which makes it easy to throw and control. It has an understable flight path with good glide and slight fade."
      },
  
      {
      "image": "./assets/Disc-img/new-page_img/new-disc-img_mako3.jpeg",
          "name": "Mako3",
          "brand": "Innova",
          "speed": "5",
          "glide": "5",
          "turn": "0",
          "fade": "0",
          "description": "This Mid-Range disc is the perfect solution for anyone who wants a straight flyer with very limited fade. The Mako3 is available in Champion plastic, and it's faster than the original Mako. Players will like the Mako3's glide for added distance. The easy to grip and release rim offers clean consistent releases. The Mako3 is a great disc for one disc rounds."
      },
  
      {
      "image": "./assets/Disc-img/new-page_img/new-disc-img_svea.jpeg",
          "name": "Svea",
          "brand": "Kastaplast",
          "speed": "5",
          "glide": "6",
          "turn": "-1",
          "fade": "0",
          "description": "This easy-to-use disc might be your secret weapon to perform the lines you need. However, don’t mistake it for a beginners only disc. Whenever you need massive glide, Svea will deliver. It offers a lower profile than our Göte midrange disc, making it suitable for smaller hands. Easy to grip and easy to release. Svea is an old Swedish name which is derived from the people of Svea Rike, later Sweden."
      },
  
];

export { discs }

const newDiscs = [
    {
		"image": "./assets/Disc-img/new-page_img/new-disc-img_diamond.jpeg",
        "name": "Diamond",
        "brand": "Latitude 64",
        "speed": "8",
        "glide": "6",
        "turn": "-3",
        "fade": "1",
    },

    {
		"image": "./assets/Disc-img/new-page_img/new-disc-img_envy.jpeg",
        "name": "Envy",
        "brand": "MVP",
        "speed": "3",
        "glide": "3",
        "turn": "-1",
        "fade": "2",
    },

    {
		"image": "./assets/Disc-img/new-page_img/new-disc-img_mako3.jpeg",
        "name": "Mako3",
        "brand": "Innova",
        "speed": "5",
        "glide": "5",
        "turn": "0",
        "fade": "0",
    },

    {
		"image": "./assets/Disc-img/new-page_img/new-disc-img_svea.jpeg",
        "name": "Svea",
        "brand": "Kastaplast",
        "speed": "5",
        "glide": "6",
        "turn": "-1",
        "fade": "0",
    },

]

export { newDiscs }