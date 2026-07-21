import { User } from "@/types";

const baseUrl = "http://localhost:3000/api";

interface LoginResponseDto {
  message: string;
  user: User;
}

export const login = async (): Promise<LoginResponseDto> => {
  const response = await fetch(`${baseUrl}/auth/login`);
  if (!response.ok) throw new Error("Network response was not ok");
  return response.json();
};

export const authMe = async (): Promise<User> => {
  const response = await fetch(`${baseUrl}/auth/me`);
  if (!response.ok) throw new Error("Not authenticated");
  return response.json();
};
