export interface ArticleType {
  article_id: string;
  article_title: string;
  article_body: string;
  article_labels: string;
  parent_article_id: string;
  date_created: string;
  article_owner: string;
  date_updated: string;
}

export interface MainMaterials {
  material: Material;
  section: Section;
  chapter: Chapter;
  article: Article;
}

export interface Article {
  id?: string;
  art_id?: string;
  chapter_id?: string;
  reference: string;
  title: string;
  body: string;
  created_at?: Date;
  updated_at?: Date;
}

export interface Chapter {
  id?: string;
  chap_id?: string;
  section_id?: string;
  reference: string;
  title: string;
  created_at?: Date;
  updated_at?: Date;
}

export interface Material {
  id?: string;
  document_id?: string;
  reference: string;
  title: string;
  info: string;
  links: string[];
  reviews: Reviews;
  labels: string[];
  created_at?: Date;
  updated_at?: Date;
}

export interface Reviews {
  id?: string;
  name: string;
  comment: string;
  timestamp?: Date;
}

export interface Section {
  id?: string;
  sec_id?: string;
  material_id?: string;
  reference: string;
  title: string;
  created_at?: Date;
  updated_at?: Date;
}
