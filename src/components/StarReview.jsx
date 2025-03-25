const StarReview = () => (
  <div className="flex justify-center items-center">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="28"
      height="28"
      fill="url(#starGradient)"
    >
      <defs>
        <linearGradient id="starGradient" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#FFD700" />
          <stop offset="50%" stopColor="#FFF9C4" />
        </linearGradient>
      </defs>
      <path
        d="M12 2l2.39 6.92H22l-5.19 4.02 1.97 6.93L12 16.9l-6.78 4.03 1.97-6.93L2 8.92h7.61L12 2z"
        stroke="#000000" // สีขอบ
        strokeWidth="0.75" // ความหนาของขอบ
        strokeLinejoin="round" // ทำให้มุมขอบโค้งมน
      />
    </svg>
  </div>
);

export default StarReview;
