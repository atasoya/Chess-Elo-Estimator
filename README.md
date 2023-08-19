# Elo Estimation with CPL

## What is CPL?
CPL stands for "Centipawn Loss." It's a measure in chess that quantifies the difference in position evaluation before and after a move. It's measured in centipawns, where each centipawn represents a small change in evaluation. Positive CPL indicates a move that worsens the position, while negative CPL suggests an improvement. CPL helps assess move quality and guides decision-making in chess engines and analysis.

## How is CPL Used to Estimate Elo?
The Elo rating system estimates players' skill levels. The formula to estimate Elo using CPL is:

**EstimatedElo = 3100 * e^(-0.01 * (CPL / NumberOfGames))**

- **EstimatedElo:** Estimated Elo rating.
- **3100:** Scaling factor for meaningful scale.
- **e:** Euler's number (~2.71828), base of natural logarithm.
- **-0.01:** Coefficient for the rate of decay.
- **CPL:** Cumulative Performance Level (sum of performance values).
- **NumberOfGames:** Total games played (normalizes effect).


