import axios from "axios";

const BASE_URL = "https://cms.technocis.in/items";
const TOKEN = "YgTkVTDNtrKOPBmKb1yijGe2x0MBy_IC";

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${TOKEN}`,
  },
});

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
  try {
    const response = await api.get<{ data: Blog[] }>("/blog");
    return response.data?.data || [];
  } catch (error) {
    console.error("Error fetching all blogs:", error);
    return [];
  }
};

export const getBlogById = async (id: number | string): Promise<Blog | null> => {
  try {
    const response = await api.get<{ data: Blog }>(`/blog/${id}`);
    return response.data?.data || null;
  } catch (error) {
    console.error(`Error fetching blog by ID ${id}:`, error);
    return null;
  }
};

export const getAllDocs = async (): Promise<Docs[]> => {
  try {
    const response = await api.get<{ data: Docs[] }>("/docs");
    return response.data?.data || [];
  } catch (error) {
    console.error("Error fetching all docs:", error);
    return [];
  }
};

export const getDocsById = async (id: number | string): Promise<Docs | null> => {
  try {
    const response = await api.get<{ data: Docs }>(`/docs/${id}`);
    return response.data?.data || null;
  } catch (error) {
    console.error(`Error fetching docs by ID ${id}:`, error);
    return null;
  }
};