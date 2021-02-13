import { ObtainableCard } from "./abstract-card.model";
import { ARTIFACT_TAX } from "../../constants/prices";

export class ArtifactCard extends ObtainableCard {
  readonly tax = ARTIFACT_TAX;
}