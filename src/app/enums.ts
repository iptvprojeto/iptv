export enum Vencedor {
  TIME_VISITANTE = 'AWAY_TEAM',
  TIME_MANDANTE = 'HOME_TEAM',
  EMPATE = 'DRAW',
}

export const statusOrder: { [key: string]: number } = {
  LIVE: 1,
  IN_PLAY: 2,
  PAUSED: 3,
  SCHEDULED: 4,
  FINISHED: 5,
  POSTPONED: 6,
  SUSPENDED: 7,
  CANCELLED: 8,
}
