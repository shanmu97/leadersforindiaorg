export const logoConfigs = {
  'Kredivo': {
    icon: (
      <svg viewBox="0 0 100 100" className="w-6 h-6">
        <path d="M10 10 L90 10 L50 90 Z" fill="#00AEEF" />
        <rect x="55" y="40" width="25" height="15" fill="#FF6F20" />
      </svg>
    ),
    text: 'Kredivo',
    textClass: 'font-bold text-xl text-white',
    backgroundClass: 'bg-[#001E36]'
  },
  'LIVSPACE': {
    icon: (
      <svg viewBox="0 0 100 100" className="w-6 h-6">
        <defs>
          <linearGradient id="livspaceGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="" />
            <stop offset="100%" stopColor="#8E24AA" />
          </linearGradient>
        </defs>
        <circle cx="50" cy="50" r="40" fill="url(#livspaceGrad)" />
      </svg>
    ),
    text: 'LIVSPACE',
    textClass: 'font-bold text-xl text-white',
    backgroundClass: 'bg-gradient-to-br from-red-600 to-purple-700'
  },
  'moglix': {
    text: 'moglix',
    textClass: 'font-bold text-2xl text-white',
    backgroundClass: 'bg-[#B71C1C]'
  },
  'turtlemint': {
    text: 'turtlemint',
    textClass: 'font-bold text-xl text-white',
    backgroundClass: 'bg-[#1B5E20]'
  },
  'sociolla': {
    text: 'sociolla',
    textClass: 'font-light text-2xl italic text-white',
    backgroundClass: 'bg-[#AD1457]'
  },
  'LEAP': {
    icon: (
      <svg viewBox="0 0 100 100" className="w-6 h-6">
        <rect x="20" y="20" width="60" height="60" stroke="currentColor" fill="none" strokeWidth="6" />
      </svg>
    ),
    text: 'LEAP',
    textClass: 'font-bold text-xl text-white',
    backgroundClass: 'bg-[#263238]'
  },
  'waresix': {
    text: 'waresix',
    textClass: 'font-normal text-xl text-white',
    additionalElement: <span className="font-bold text-xl mr-1 text-white">W</span>,
    backgroundClass: 'bg-[#1565C0]'
  },
  'atomberg': {
    text: 'atomberg',
    textClass: 'font-bold text-xl text-white',
    additionalElement: <span className="text-sm ml-1 text-[#FFF176]">Why not?</span>,
    backgroundClass: 'bg-[#FF6F00]'
  },
  'evermos': {
    icon: <span className="text-white text-sm">☺</span>,
    iconContainerClass: 'bg-black rounded-full',
    text: 'evermos',
    textClass: 'font-normal text-xl text-white',
    backgroundClass: 'bg-[#2E7D32]'
  },
  'KiotViet': {
    icon: (
      <svg viewBox="0 0 100 100" className="w-6 h-6">
        <circle cx="30" cy="50" r="15" fill="#FFFFFF" />
        <circle cx="60" cy="50" r="15" fill="#FFFFFF" />
      </svg>
    ),
    text: 'KiotViet',
    textClass: 'font-normal text-xl text-white',
    backgroundClass: 'bg-[#2B6CB0]'
  },
  'HYPERFAST': {
    text: 'HYPERFAST',
    textClass: 'font-extrabold text-2xl text-white tracking-wider',
    backgroundClass: 'bg-[#D32F2F]'
  },
  'CITYMALL': {
    text: 'CITYMALL',
    textClass: 'font-bold text-xl text-white',
    backgroundClass: 'bg-[#4CAF50]'
  },
  'RedDoorz': {
    icon: (
      <svg viewBox="0 0 100 100" className="w-7 h-7">
        <rect x="20" y="20" width="60" height="60" fill="#FFFFFF" />
        <circle cx="50" cy="50" r="20" fill="#D32F2F" />
      </svg>
    ),
    text: 'RedDoorz',
    textClass: 'font-bold text-xl text-white',
    backgroundClass: 'bg-[#B71C1C]'
  },
  'OFLOAD': {
    text: 'OFLOAD',
    textClass: 'font-extrabold text-xl text-white',
    backgroundClass: 'bg-[#1565C0]'
  },
  'betterplace': {
    text: 'betterplace',
    textClass: 'italic font-semibold text-xl text-white',
    backgroundClass: 'bg-[#6A1B9A]'
  },
  'Pomelo': {
    icon: (
      <svg viewBox="0 0 100 100" className="w-6 h-6">
        <circle cx="50" cy="50" r="40" fill="#FFF176" />
        <circle cx="50" cy="50" r="25" fill="#F57F17" />
      </svg>
    ),
    text: 'Pomelo',
    textClass: 'font-bold text-xl text-gray-900',
    backgroundClass: 'bg-[#FFEB3B]'
  },
  'VAYANA': {
    text: 'VAYANA',
    textClass: 'font-bold text-xl text-white',
    backgroundClass: 'bg-[#283593]'
  },
  'Believe': {
    text: 'Believe',
    textClass: 'font-bold italic text-xl text-white',
    backgroundClass: 'bg-[#00796B]'
  },
  'INFINITY': {
    icon: (
      <svg viewBox="0 0 100 100" className="w-7 h-7">
        <path d="M20,50 C20,20 80,20 80,50 C80,80 20,80 20,50 Z" stroke="white" strokeWidth="6" fill="none" />
      </svg>
    ),
    text: 'INFINITY',
    textClass: 'font-extrabold text-xl text-white tracking-wide',
    backgroundClass: 'bg-[#424242]'
  },
  'Deskera': {
    text: 'Deskera',
    textClass: 'font-semibold text-xl text-white',
    backgroundClass: 'bg-[#E65100]'
  },
  'THE AYURVEDA EXPERIENCE': {
    text: 'THE AYURVEDA EXPERIENCE',
    textClass: 'font-bold text-lg md:text-xl lg:text-2xl  text-white tracking-tight',
    backgroundClass: 'bg-[#6D4C41]'
  },
  'saltmine': {
    text: 'saltmine',
    textClass: 'font-semibold text-xl text-white',
    backgroundClass: 'bg-[#455A64]'
  },
  'timo': {
    text: 'timo',
    textClass: 'font-bold text-2xl text-white italic',
    backgroundClass: 'bg-[#673AB7]'
  },
  'Walko': {
    text: 'Walko',
    textClass: 'font-bold text-xl text-white',
    backgroundClass: 'bg-[#009688]'
  },
  'WATERFIELD': {
    icon: (
      <svg viewBox="0 0 100 100" className="w-7 h-7">
        <path d="M50 15 C70 40, 70 60, 50 85 C30 60, 30 40, 50 15 Z" fill="#2196F3" />
      </svg>
    ),
    text: 'WATERFIELD',
    textClass: 'font-bold text-lg md:text-xl lg:text-2xl  text-white',
    backgroundClass: 'bg-[#0D47A1]'
  },
  'Sleek': {
    text: 'Sleek',
    textClass: 'font-light italic text-2xl text-white',
    backgroundClass: 'bg-[#C2185B]'
  },
  'AMP': {
    text: 'AMP',
    textClass: 'font-extrabold text-xl text-white',
    backgroundClass: 'bg-[#3F51B5]'
  },
  'MARKETWOLF': {
    icon: (
      <svg viewBox="0 0 100 100" className="w-7 h-7">
        <path d="M20 80 L50 20 L80 80 Z" fill="#FFEB3B" />
      </svg>
    ),
    text: 'MARKETWOLF',
    textClass: 'font-bold text-lg md:text-xl lg:text-2xl  text-white',
    backgroundClass: 'bg-[#212121]'
  },
  'Feedo': {
    text: 'Feedo',
    textClass: 'font-bold text-xl text-white',
    backgroundClass: 'bg-[#8BC34A]'
  },
  'desty': {
    text: 'desty',
    textClass: 'font-semibold text-xl text-white',
    backgroundClass: 'bg-[#F57C00]'
  },
  'Drivetrain': {
    icon: (
      <svg viewBox="0 0 100 100" className="w-7 h-7">
        <circle cx="50" cy="50" r="30" stroke="#FFF" strokeWidth="8" fill="none" />
        <rect x="45" y="20" width="10" height="20" fill="#FFF" />
      </svg>
    ),
    text: 'Drivetrain',
    textClass: 'font-bold text-lg md:text-xl lg:text-2xl  text-white',
    backgroundClass: 'bg-[#1E88E5]'
  },
  'medici': {
    text: 'medici',
    textClass: 'font-semibold text-xl text-white tracking-wide',
    backgroundClass: 'bg-[#B71C1C]'
  },
  'dbo': {
    text: 'dbo',
    textClass: 'font-bold text-2xl text-white',
    backgroundClass: 'bg-[#263238]'
  },
  'MEDIKE': {
    icon: (
      <svg viewBox="0 0 100 100" className="w-7 h-7">
        <rect x="25" y="25" width="50" height="50" fill="#4CAF50" />
        <path d="M50 35 V65 M35 50 H65" stroke="#FFF" strokeWidth="6" />
      </svg>
    ),
    text: 'MEDIKE',
    textClass: 'font-bold text-lg md:text-xl lg:text-2xl  text-white',
    backgroundClass: 'bg-[#2E7D32]'
  },
  'EDUPIA': {
    text: 'EDUPIA',
    textClass: 'font-extrabold text-xl text-white',
    backgroundClass: 'bg-[#1976D2]'
  },
  'nirogstreet': {
    text: 'nirogstreet',
    textClass: 'font-medium text-lg md:text-xl lg:text-2xl  text-white',
    backgroundClass: 'bg-[#00695C]'
  }
};
