import { DocumentType } from "@/types/document/document.type";
import { format_date_time } from "../functions/format-date-time";
import { ArticleType } from "@/types/material/type.material";

export const documents: DocumentType[] = [
  // {
  //   ref: "Reference",
  //   user_id: "usid",
  //   title: "Document title",
  //   header: "Doc header",
  //   footer: "Doc footer",
  //   type: "Doc type",
  //   sub_category: "Doc sub-category",
  //   language: "Lanuage",
  //   category: "Doc category",
  //   version: "",
  //   owners_notes: ["Owner notes"],
  //   law_date: format_date_time(new Date(Date.now())),
  //   status: "Draft",
  //   source: ["link"],
  //   raw_text: "Raw text",
  // },
  // {
  //   ref: "Reference",
  //   user_id: "usid",
  //   title: "Document title",
  //   header: "Doc header",
  //   footer: "Doc footer",
  //   type: "Doc type",
  //   sub_category: "Doc sub-category",
  //   language: "Lanuage",
  //   category: "Doc category",
  //   version: "",
  //   owners_notes: [
  //     {
  //       name: "Owner notes",
  //       message: "Owner notes",
  //       created_at: new Date(Date.now()),
  //     },
  //   ],
  //   law_date: format_date_time(new Date(Date.now())),
  //   status: "Draft",
  //   source: ["link"],
  //   raw_text: "Raw text",
  // },
];

export const articles: ArticleType[] = [
  {
    article_id: "Art 1",
    article_title: "The ariticle title here",
    article_body: "Takes the body text or this article",
    article_labels: "What are the labels for this articles?",
    article_owner: "Deric Wangeh",
    parent_article_id: "parent_id",
    date_created: format_date_time(Date.now()),
    date_updated: format_date_time(Date.now()),
  },
  {
    article_id: "Art 2",
    article_title: "The ariticle title here",
    article_body: "Takes the body text or this article",
    article_labels: "What are the labels for this articles?",
    article_owner: "Deric Wangeh",
    parent_article_id: "parent_id",
    date_created: format_date_time(Date.now()),
    date_updated: format_date_time(Date.now()),
  },
  {
    article_id: "Art 3",
    article_title: "The ariticle title here",
    article_body: "Takes the body text or this article",
    article_labels: "What are the labels for this articles?",
    article_owner: "Deric Wangeh",
    parent_article_id: "parent_id",
    date_created: format_date_time(Date.now()),
    date_updated: format_date_time(Date.now()),
  },
];

export const categoryData = [
  "public law",
  "civil law",
  "marriage",
  "court",
  "family",
];

export const select_types = ["Article", "Chapter", "Section"];
