import { Card } from "../models/card.models/abstractCard.model";

export class Field {
  constructor(
    readonly card: Card,
    readonly action?: any
  ) {}
}