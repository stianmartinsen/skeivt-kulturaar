export type SanityEvent = {
  eventName: string;
  eventDescription: string;
  eventLink?: string;
  eventTypes: string[];
  eventFilters: string[];
  eventOrganizer: string;
  address: string;
  postalCode: string;
  county: string;
  digitalEventUrl?: string;
  ageLimit: number;
  ticketPrice: number;
  ticketUrl?: string;
  contactName: string;
  pronoun: string;
  tlfNr: string;
  contactEmail: string;
  additionalInfo: string;
  eventDates: { _key: string; eventStart: string; eventEnd: string }[];
  image?: { _type: 'image'; asset: { _type: 'reference'; _ref: string } };
};

export type PublicSanityEvent = Omit<
  SanityEvent,
  'tlfNr' | 'pronoun' | 'contactEmail' | 'contactName' | 'additionalInfo'
> & {
  _id: string;
};
