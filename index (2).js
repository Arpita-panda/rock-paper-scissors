import {
  GameScoreContainer,
  GameScoreNameContainer,
  GameScoreName,
  GameScoreBoardContainer,
  GameScoreBoardHeading,
  GameScoreBoardScore,
} from '.styledComponents'

const GameScore = props => {
  const {score} = props
  return (
    <GameScoreContainer>
      <GameScoreNameContainer>
        <GameScoreName>
          ROCK
          <br />
          PAPER
          <br />
          SCISSORS
        </GameScoreName>
      </GameScoreNameContainer>
      <GameScoreBoardContainer>
        <GameScoreBoardHeading>Score</GameScoreBoardHeading>
        <GameScoreBoardContainer>{score}</GameScoreBoardContainer>
      </GameScoreBoardContainer>
    </GameScoreContainer>
  )
}

export default GameScore
