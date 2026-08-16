const BASE_URL = "https://cms.technocis.in/items";
const TOKEN = "YgTkVTDNtrKOPBmKb1yijGe2x0MBy_IC";

const fetchApi = async <T>(endpoint: string): Promise<T | null> => {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
      cache: "no-store",
    });
    if (!response.ok) {
      throw new Error(`API returned ${response.status}`);
    }
    const json = await response.json();
    return json.data as T;
  } catch (error) {
    console.error(`Error fetching ${endpoint}:`, error);
    return null;
  }
};

export interface Blog {
  id: number;
  status: string;
  sort: number | null;
  user_created: string;
  date_created: string;
  user_updated: string | null;
  date_updated: string | null;
  title: string;
  content: string;
  cover_image: string | null;
  Short_description: string;
}

export interface Docs {
 id: number;
  status: string;
  sort: number | null;
  user_created: string;
  date_created: string;
  user_updated: string | null;
  date_updated: string | null;
  title: string;
  content: string;
  type: DocType;
  project: string;
}

export enum DocType {
  PERSONAL = "Personal",
  TECHNOCIS = "TechnoCIS" 
}

export const getAllBlogs = async (): Promise<Blog[]> => {
  const data = await fetchApi<Blog[]>("/blog");
  return data || [];
};

export const getBlogById = async (id: number | string): Promise<Blog | null> => {
  const data = await fetchApi<Blog>(`/blog/${id}`);
  return data || null;
};

export const getAllDocs = async (): Promise<Docs[]> => {
  const data = await fetchApi<Docs[]>("/docs");
  return data || [];
};

export const getDocsById = async (id: number | string): Promise<Docs | null> => {
  const data = await fetchApi<Docs>(`/docs/${id}`);
  return data || null;
};