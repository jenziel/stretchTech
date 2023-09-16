interface Activity {
  id: string;
  name: string;
}

interface Topic {
  id: string;
  name: string;
}

interface PhoneNumber {
  phoneNumber: string;
  description: string;
  extension: string;
  type: string;
}

interface EmailAddress {
  description: string;
  emailAddress: string;
}

interface Contacts {
  phoneNumbers: PhoneNumber[];
  emailAddresses: EmailAddress[];
}

interface EntranceFee {
  cost: string;
  description: string;
  title: string;
}

interface OperatingHours {
  exceptions: any[];
  description: string;
  standardHours: Record<string, string>;
  name: string;
}

interface Address {
  postalCode: string;
  city: string;
  stateCode: string;
  countryCode: string;
  provinceTerritoryCode: string;
  line1: string;
  type: string;
  line3: string;
  line2: string;
}

interface Image {
  credit: string;
  title: string;
  altText: string;
  caption: string;
  url: string;
}

export interface ParkData {
  id: string;
  url: string;
  fullName: string;
  parkCode: string;
  description: string;
  latitude: string;
  longitude: string;
  latLong: string;
  activities: Activity[];
  topics: Topic[];
  states: string;
  contacts: Contacts;
  entranceFees: EntranceFee[];
  fees: any[];
  directionsInfo: string;
  directionsUrl: string;
  operatingHours: OperatingHours[];
  addresses: Address[];
  images: Image[];
  weatherInfo: string;
  name: string;
  designation: string;
}

interface ApiResponse {
  total: string;
  limit: string;
  start: string;
  data: ParkData[];
}

const API_BASE = "https://developer.nps.gov/api/v1/";
const API_KEY = "88uiVoPed9zuR3daHPnsrPxaYV0ZWsiqP66VvpSc";

export function getParksData(): Promise<ApiResponse> {
  return fetch(`${API_BASE}parks?limit=500&api_key=${API_KEY}`).then(
    (response) => {
      if (!response.ok) {
        throw new Error(`${response.status}`);
      }

      return response.json();
    }
  );
}

export function getIndividualPark(parkCode: string): Promise<ParkData> {
  return fetch(`${API_BASE}parks?parkCode=${parkCode}&api_key=${API_KEY}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      if (data && data.data && data.data.length > 0) {
        return data.data[0];
      }
      throw new Error("No park found with the given parkCode");
    });
}
