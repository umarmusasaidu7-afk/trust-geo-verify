export interface LandHistoryEntry {
  date: string;
  event: string;
}

export interface Land {
  id: string;
  name: string;
  location: string;
  state: string;
  lat: number;
  lng: number;
  owner: string;
  ownerPhone: string;
  trustScore: number;
  cOfO: boolean;
  registeredDate: string;
  history: LandHistoryEntry[];
  status: "registered" | "pending" | "verified";
  area: string;
  surveyPlan: string;
}

export interface SimLocation {
  label: string;
  lat: number;
  lng: number;
}

export const SIM_LOCATIONS: SimLocation[] = [
  { label: "Lekki Phase 1, Lagos", lat: 6.4404, lng: 3.4815 },
  { label: "Victoria Island, Lagos", lat: 6.4281, lng: 3.4219 },
  { label: "Ikoyi, Lagos", lat: 6.4501, lng: 3.4351 },
  { label: "Wuse II, Abuja", lat: 9.0765, lng: 7.4836 },
  { label: "Maitama, Abuja", lat: 9.0871, lng: 7.4913 },
  { label: "GRA Phase 1, Port Harcourt", lat: 4.7947, lng: 7.0013 },
  { label: "Kano City, Kano", lat: 12.0022, lng: 8.592 },
  { label: "Enugu GRA, Enugu", lat: 6.4412, lng: 7.489 },
];

export const DEFAULT_LANDS: Land[] = [
  {
    id: "LT-001",
    name: "Admiralty Estate Plot 14",
    location: "Lekki Phase 1, Lagos",
    state: "Lagos",
    lat: 6.4404,
    lng: 3.4815,
    owner: "Chief Adebayo Ogunlesi",
    ownerPhone: "+234 802 345 6789",
    trustScore: 97,
    cOfO: true,
    registeredDate: "2021-03-15",
    history: [
      { date: "2021-03-15", event: "Initial registration completed" },
      { date: "2021-06-20", event: "Survey plan verified by LASRERA" },
      { date: "2022-01-10", event: "Certificate of Occupancy issued" },
      { date: "2023-08-05", event: "Annual verification passed" },
    ],
    status: "verified",
    area: "648 sqm",
    surveyPlan: "LAG/SP/2021/04582",
  },
  {
    id: "LT-002",
    name: "Victoria Court Plot A7",
    location: "Victoria Island, Lagos",
    state: "Lagos",
    lat: 6.4281,
    lng: 3.4219,
    owner: "Mrs. Funke Adekunle",
    ownerPhone: "+234 803 456 7890",
    trustScore: 94,
    cOfO: true,
    registeredDate: "2020-07-22",
    history: [
      { date: "2020-07-22", event: "Land registered with state authority" },
      { date: "2020-11-15", event: "Boundary survey completed" },
      { date: "2021-04-03", event: "C of O application approved" },
    ],
    status: "verified",
    area: "450 sqm",
    surveyPlan: "LAG/SP/2020/03217",
  },
  {
    id: "LT-003",
    name: "Ikoyi Crescent Plot 8",
    location: "Ikoyi, Lagos",
    state: "Lagos",
    lat: 6.4501,
    lng: 3.4351,
    owner: "Alhaji Musa Ibrahim",
    ownerPhone: "+234 805 567 8901",
    trustScore: 99,
    cOfO: true,
    registeredDate: "2019-01-10",
    history: [
      { date: "2019-01-10", event: "Original land registration" },
      { date: "2019-05-18", event: "Government survey completed" },
      { date: "2019-12-01", event: "C of O granted by Governor" },
      { date: "2022-06-15", event: "Ownership transfer recorded" },
      { date: "2024-01-20", event: "Biennial verification passed" },
    ],
    status: "verified",
    area: "1200 sqm",
    surveyPlan: "LAG/SP/2019/01045",
  },
  {
    id: "LT-004",
    name: "Wuse District Plot 22B",
    location: "Wuse II, Abuja",
    state: "FCT Abuja",
    lat: 9.0765,
    lng: 7.4836,
    owner: "Dr. Emeka Nwosu",
    ownerPhone: "+234 806 678 9012",
    trustScore: 92,
    cOfO: true,
    registeredDate: "2022-05-08",
    history: [
      { date: "2022-05-08", event: "FCDA allocation registered" },
      { date: "2022-09-14", event: "Survey plan approved" },
      { date: "2023-03-22", event: "C of O processing" },
    ],
    status: "registered",
    area: "800 sqm",
    surveyPlan: "FCT/SP/2022/07891",
  },
  {
    id: "LT-005",
    name: "Maitama Hills Estate 3",
    location: "Maitama, Abuja",
    state: "FCT Abuja",
    lat: 9.0871,
    lng: 7.4913,
    owner: "Senator Bello Mohammed",
    ownerPhone: "+234 807 789 0123",
    trustScore: 96,
    cOfO: true,
    registeredDate: "2020-11-30",
    history: [
      { date: "2020-11-30", event: "Land purchase registered" },
      { date: "2021-02-15", event: "FCDA verification completed" },
      { date: "2021-08-20", event: "Certificate of Occupancy issued" },
      { date: "2023-11-10", event: "Annual compliance check passed" },
    ],
    status: "verified",
    area: "1500 sqm",
    surveyPlan: "FCT/SP/2020/05432",
  },
  {
    id: "LT-006",
    name: "GRA Phase 1 Plot 17",
    location: "GRA Phase 1, Port Harcourt",
    state: "Rivers",
    lat: 4.7947,
    lng: 7.0013,
    owner: "Engr. Chukwu Okafor",
    ownerPhone: "+234 808 890 1234",
    trustScore: 88,
    cOfO: false,
    registeredDate: "2023-02-14",
    history: [
      { date: "2023-02-14", event: "Land registration initiated" },
      { date: "2023-06-20", event: "Survey in progress" },
    ],
    status: "pending",
    area: "550 sqm",
    surveyPlan: "RIV/SP/2023/02156",
  },
  {
    id: "LT-007",
    name: "Nassarawa GRA Plot 5",
    location: "Kano City, Kano",
    state: "Kano",
    lat: 12.0022,
    lng: 8.592,
    owner: "Mallam Yusuf Danjuma",
    ownerPhone: "+234 809 901 2345",
    trustScore: 91,
    cOfO: true,
    registeredDate: "2021-09-01",
    history: [
      { date: "2021-09-01", event: "Land registered with KN Ministry" },
      { date: "2022-01-15", event: "Survey plan verified" },
      { date: "2022-07-30", event: "C of O issued" },
    ],
    status: "verified",
    area: "900 sqm",
    surveyPlan: "KAN/SP/2021/06789",
  },
  {
    id: "LT-008",
    name: "Independence Layout Plot 11",
    location: "Enugu GRA, Enugu",
    state: "Enugu",
    lat: 6.4412,
    lng: 7.489,
    owner: "Barr. Ngozi Eze",
    ownerPhone: "+234 810 012 3456",
    trustScore: 93,
    cOfO: true,
    registeredDate: "2022-08-18",
    history: [
      { date: "2022-08-18", event: "Registration with Enugu State" },
      { date: "2023-01-10", event: "Boundary demarcation completed" },
      { date: "2023-06-25", event: "C of O approved" },
    ],
    status: "verified",
    area: "700 sqm",
    surveyPlan: "ENU/SP/2022/04321",
  },
];

export const STORAGE_KEY = "landtrust_ng_lands";
export const USER_STORAGE_KEY = "landtrust_ng_user";

export function loadLands(): Land[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch {
    /* ignore */
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(DEFAULT_LANDS));
  return [...DEFAULT_LANDS];
}

export function saveLands(lands: Land[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(lands));
}

export interface UserProfile {
  name: string;
  email: string;
  phone: string;
  myLandIds: string[];
}

export function loadUser(): UserProfile | null {
  try {
    const raw = localStorage.getItem(USER_STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch {
    /* ignore */
  }
  return null;
}

export function saveUser(user: UserProfile) {
  localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user));
}

export function clearUser() {
  localStorage.removeItem(USER_STORAGE_KEY);
}

export function haversineDistance(
  lat1: number,
  lng1: number,
  lat2: number,
  lng2: number
): number {
  const R = 6371e3;
  const toRad = (d: number) => (d * Math.PI) / 180;
  const dLat = toRad(lat2 - lat1);
  const dLng = toRad(lng2 - lng1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLng / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}
