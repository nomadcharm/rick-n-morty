import { Character } from "./Character";

export interface Info {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}

export interface ApiResponse {
  info: Info;
  results: Character[];
}