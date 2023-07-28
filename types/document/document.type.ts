export interface DocumentType {
  id?: string;
  ref: string;
  user_id?: string;
  title: string;
  header: string;
  revision_id?: string;
  footer: string;
  type: string;
  sub_category: string;
  material_count?: string;
  language: string;
  category: string;
  status?: string;
  version: string;
  owners_notes: OwnersNote[];
  law_date: string;
  source: string[];
  raw_text: string;
  create_at?: Date;
  update_at?: Date;
  DeletedAt?: null;
}

export interface OwnersNote {
  msg: string;
  name: string;
}

export interface GetDocsParams {
  start_key: number;
  count: number;
  user_id: string;
}

export interface MaterialsParams extends GetDocsParams {
  document_id: string;
}
