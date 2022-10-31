import { api } from "./api";

export async function ListAllProjects() {
  const response = await api.get("/projects/");

  return response?.data ? response.data : {};
}

export async function GetProjectData(id: string) {
  const response = await api.get(`/projects/${id}`);

  return response?.data ? response.data : {};
}
