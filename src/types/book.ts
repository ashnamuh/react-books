export interface VolumeInfo {
  allowAnonLogging: boolean;
  authors?: string[];
  categories: string[];
  description: string;
  imageLinks: {
    smallThumbnail: string;
    thumbnail: string;
  };
  infoLink: string;
  panelizationSummary: {containsEpubBubbles: false; containsImageBubbles: false};
  publishedDate: string;
  publisher: string;
  title: string;
};

export interface Book {
  id: string;
  volumeInfo: VolumeInfo;
}
