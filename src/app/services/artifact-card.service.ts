import { Player } from "../models/player.model";
import { ArtifactCard } from "../models/artifact-card.model";
import { ARTIFACT_CARDS_IDS } from "../constants/game-constants";

export const payTax = (currentPlayer: Player, players: Player[], artifact: ArtifactCard) => {
  if(artifact.isObtainable) return;
  if(playerOwnsArtifact(currentPlayer, artifact.id)) return;
  
  let artifactOwner!: Player;   
  players.forEach((player) => {
    if(playerOwnsArtifact(player, artifact.id)) artifactOwner = player;
  });

  const artifactsOwnedByOwner = ARTIFACT_CARDS_IDS.filter(arctifact => playerOwnsArtifact(artifactOwner, arctifact));
  const tax = artifact.tax[artifactsOwnedByOwner.length-1];

  currentPlayer.giveMoney(tax);
  artifactOwner.takeMoney(tax);
}

const playerOwnsArtifact = (player: Player, artifactId: number): boolean => {
  return player.playerCards.includes(artifactId)
}