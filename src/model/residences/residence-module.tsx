import { Residence } from "../entities";

export const setResidenceAsPurchased = (residence: Residence) => {
  residence.availablePlaces = 0;
  residence.purchased = true;
}