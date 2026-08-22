import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NOTION_TOKEN });

function getText(prop) {
  if (!prop) return "";
  if (prop.type === "title") return (prop.title || []).map(t => t.plain_text).join("");
  if (prop.type === "rich_text") return (prop.rich_text || []).map(t => t.plain_text).join("");
  if (prop.type === "select") return prop.select?.name || "";
  if (prop.type === "files") return (prop.files || []).map(f => f.type === "external" ? f.external.url : f.file.url);
  if (prop.type === "checkbox") return !!prop.checkbox;
  if (prop.type === "number") return prop.number ?? null;
  return "";
}

export async function fetchProducts() {
  const db = process.env.PRODUCTS_DATABASE_ID;
  const res = await notion.databases.query({
    database_id: db,
    filter: {
      property: "Published",
      checkbox: { equals: true }
    },
    sorts: [{ property: "SortOrder", direction: "ascending" }]
  });

  return res.results.map(page => {
    const p = page.properties;
    return {
      code: getText(p.Code),
      nameZh: getText(p.Name_ZH),
      nameEn: getText(p.Name_EN),
      category: getText(p.Category),
      priceHkd: getText(p.Price_HKD),
      descZh: getText(p.Description_ZH),
      descEn: getText(p.Description_EN),
      sizeZh: getText(p.Size_ZH),
      sizeEn: getText(p.Size_EN),
      materialsZh: getText(p.Materials_ZH),
      materialsEn: getText(p.Materials_EN),
      leadZh: getText(p.LeadTime_ZH),
      leadEn: getText(p.LeadTime_EN),
      notesZh: getText(p.Notes_ZH),
      notesEn: getText(p.Notes_EN),
      photos: (p.Photos?.type === "files") ? getText(p.Photos) : [],
    };
  });
}