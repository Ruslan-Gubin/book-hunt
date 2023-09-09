export interface BookModel {
  accessInfo: {
    accessViewStatus: string;
    country: string;
    embeddable: boolean;
    epub: {
      isAvailable: boolean;
    };
    pdf: {
      isAvailable: boolean;
    };
    publicDomain: boolean;
    quoteSharingAllowed: boolean;
    textToSpeechPermission: string;
    viewability: string;
    webReaderLink: string;
  };
  etag: string;
  id: string;
  kind: string;
  saleInfo: {
    country: string;
    isEbook: boolean;
    saleability: string;
  };
  searchInfo: {
    textSnippet: string;
  };
  selfLink: string;
  volumeInfo: {
    allowAnonLogging: boolean;
    authors: string[];
    canonicalVolumeLink: string;
    categories: string[];
    contentVersion: string;
    description: string;
    imageLinks: {
      smallThumbnail: string;
      thumbnail: string;
    };
    industryIdentifiers: {
      identifier: string;
      type: string;
    }[];
    infoLink: string;
    language: string;
    maturityRating: string;
    pageCount: number;
    panelizationSummary: {
      containsEpubBubbles: boolean;
      containsImageBubbles: boolean;
    };
    previewLink: string;
    printType: string;
    publishedDate: string;
    publisher: string;
    readingModes: {
      image: boolean;
      text: boolean;
    };
    title: string;
  };
}

export interface BookInitState {
  books: BookModel[];
  loading: boolean;
  error: string | null;
  totalItems: number;
  currentPage: number;
}
export type GetBooksReq = {
  apiKey: string;
  search: string;
  baseUrl: string;
  maxResults?: number;
  sorting: string;
  category: string;
  currentPage: number;
  method?: "add more" | "init fetch";
};

export type FetchSearchBooksParams = {
  apiKey: string;
  baseUrl: string;
  categoryValue?: string;
  sortingValue?: string;
  method?: "add more" | "init fetch";
};
