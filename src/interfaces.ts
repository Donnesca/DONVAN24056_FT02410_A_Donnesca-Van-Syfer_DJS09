import { LoyaltyUser } from "./enums.ts";

export default interface Review {
  name: string;
  stars: number;
  loyaltyUser: LoyaltyUser;
  date: string;
}
