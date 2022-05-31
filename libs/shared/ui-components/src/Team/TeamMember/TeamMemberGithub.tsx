import { FC } from 'react';

import Link from 'next/link';

import { TTeamMemberGithubNick } from './types';

export const TeamMemberGithub: FC<TTeamMemberGithubNick> = ({ githubNick }) => (
  <Link href={`https://github.com/${githubNick}`}>
    <a>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="21"
        height="21"
        viewBox="0 0 21 21"
        fill="none"
      >
        <path
          d="M10.4594 0.287109C4.68357 0.287109 0 4.96986 0 10.7465C0 15.3678 2.99693 19.2884 7.1528 20.6715C7.6755 20.7683 7.86745 20.4446 7.86745 20.1683C7.86745 19.9189 7.85769 19.0949 7.85326 18.2209C4.94337 18.8537 4.32936 16.9869 4.32936 16.9869C3.85358 15.7779 3.16805 15.4565 3.16805 15.4565C2.21911 14.8073 3.23958 14.8206 3.23958 14.8206C4.28991 14.8944 4.84296 15.8985 4.84296 15.8985C5.77582 17.4975 7.28979 17.0352 7.88665 16.768C7.98049 16.0919 8.25161 15.6306 8.55069 15.3694C6.22757 15.1048 3.78533 14.208 3.78533 10.2003C3.78533 9.05838 4.19393 8.12528 4.86306 7.39282C4.75445 7.12934 4.39647 6.06555 4.96437 4.62484C4.96437 4.62484 5.84268 4.34372 7.84145 5.69699C8.67571 5.46517 9.5705 5.34901 10.4594 5.34507C11.3483 5.34901 12.2437 5.46517 13.0796 5.69699C15.076 4.34372 15.9531 4.62484 15.9531 4.62484C16.5224 6.06555 16.1643 7.12934 16.0556 7.39282C16.7263 8.12528 17.1321 9.0583 17.1321 10.2003C17.1321 14.2175 14.6852 15.1021 12.3562 15.361C12.7313 15.6856 13.0656 16.3222 13.0656 17.2979C13.0656 18.6974 13.0535 19.8238 13.0535 20.1683C13.0535 20.4466 13.2417 20.7728 13.772 20.6701C17.9256 19.2855 20.9187 15.3663 20.9187 10.7465C20.9187 4.96986 16.2358 0.287109 10.4594 0.287109Z"
          fill="#452393"
        />
        <path
          d="M3.91784 15.1866C3.89487 15.2386 3.813 15.2542 3.7386 15.2186C3.66272 15.1844 3.62006 15.1136 3.64467 15.0614C3.66723 15.0079 3.7491 14.993 3.82481 15.0289C3.90086 15.0629 3.94417 15.1345 3.91784 15.1866ZM4.43234 15.6457C4.38246 15.692 4.28493 15.6705 4.21873 15.5974C4.15031 15.5244 4.13752 15.427 4.18813 15.38C4.23956 15.3338 4.33415 15.3554 4.40272 15.4284C4.47114 15.5021 4.48443 15.599 4.43225 15.6458L4.43234 15.6457ZM4.78532 16.233C4.72117 16.2776 4.61633 16.2358 4.55161 16.1428C4.48754 16.0499 4.48754 15.9383 4.553 15.8936C4.61797 15.8489 4.72117 15.8891 4.78679 15.9814C4.85078 16.0759 4.85078 16.1875 4.78523 16.2331L4.78532 16.233ZM5.38218 16.9133C5.32484 16.9765 5.20277 16.9596 5.11336 16.8733C5.02198 16.789 4.99647 16.6693 5.05397 16.606C5.11197 16.5427 5.23477 16.5605 5.32484 16.6461C5.41565 16.7302 5.44337 16.8508 5.38226 16.9133H5.38218ZM6.1536 17.143C6.12842 17.2249 6.01078 17.2621 5.89233 17.2273C5.77404 17.1915 5.6966 17.0955 5.72047 17.0127C5.74508 16.9303 5.86321 16.8915 5.98256 16.9287C6.10069 16.9644 6.17829 17.0597 6.15368 17.143H6.1536ZM7.03166 17.2404C7.03461 17.3267 6.93413 17.3982 6.80977 17.3998C6.68467 17.4025 6.58352 17.3327 6.58221 17.2478C6.58221 17.1607 6.6804 17.0899 6.80542 17.0878C6.92978 17.0853 7.03166 17.1547 7.03166 17.2404ZM7.89414 17.2073C7.90907 17.2915 7.82261 17.3779 7.69915 17.4009C7.57774 17.4231 7.46536 17.3711 7.44986 17.2877C7.43476 17.2014 7.52286 17.115 7.64402 17.0926C7.76773 17.0711 7.87839 17.1218 7.89414 17.2073Z"
          fill="#452393"
        />
      </svg>
    </a>
  </Link>
);
