import { Player } from "../../models/player.model";
import { ArtifactCard } from "../../models/card.models/artifact-card.model";
import { playerOwnsCard, findCardOwner, numberOfOwnedCards, payMoneyToCardOwner} from "./shared-card.service";
import { ARTIFACT_CARDS_IDS } from "../../constants/game-constants";

export const payArtifactTax = (player: Player, players: Player[], artifact: ArtifactCard): void => {
  if(artifact.isObtainable) return;
  if(playerOwnsCard(player, artifact.id)) return;
  const artifactOwner = findCardOwner(players, artifact.id);
  const numberOfOwnedArtifacts = numberOfOwnedCards(artifactOwner, ARTIFACT_CARDS_IDS)
  const tax = artifact.tax[numberOfOwnedArtifacts - 1];
  payMoneyToCardOwner(player, artifactOwner, tax);
}
