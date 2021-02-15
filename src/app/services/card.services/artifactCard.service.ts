import { Player } from '../../models/player.model';
import { ArtifactCard } from '../../models/card.models/artifactCard.model';
import { GameModel } from "../../models/game.model";
import {
  playerOwnsCard,
  findCardOwner,
  numberOfOwnedCards,
  payMoneyToCardOwner,
} from './sharedCard.service';
import { ARTIFACT_CARDS_IDS } from '../../constants/gameConstants';

export const payArtifactTax = (game: GameModel): void => {
  const player = game.activePlayer;
  const players = game.players;
  const currentCard = game.gameBoard[game.activePlayer.currentPosition].card;
  if(currentCard instanceof ArtifactCard){
  const artifact = currentCard;
  // if (artifact.isObtainable) return;
  if (playerOwnsCard(player, artifact.id)) return;
  const artifactOwner = findCardOwner(players, artifact.id);
  const numberOfOwnedArtifacts = numberOfOwnedCards(
    artifactOwner,
    ARTIFACT_CARDS_IDS,
  );
  const tax = artifact.tax[numberOfOwnedArtifacts - 1];
  payMoneyToCardOwner(player, artifactOwner, tax);
  }
};
