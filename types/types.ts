// types/types.ts

export interface LegalInsight {
  title: string;
  content: string;
  date?: string;
  images?: string[];
  pdfUrl?: string;
}

export interface RouteParams {
  id: string;
}

export interface PageProps {
  params: Promise<RouteParams>;
}