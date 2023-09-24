import { instance } from "./axiosInstance";

// const my_manager_id = 196354;
// const coole_league = 308647;

// returns notes on the set piece takers for each team.
export const getSetPieceNotes = async () =>
  await instance.get("/api/team/set-piece-notes/");

// returns statistics on every football player in FPL for the specified gameweek
export const getAllPlayersStats = async (gameweek) =>
  await instance.get(`/api/event/${gameweek}/live/`);

// returns fpl manager account details
export const getManagerDetails = async (manager_id) =>
  await instance.get(`/api/entry/${manager_id}`);

// returns the dream team of the given gameweek.
export const getGameweekDreamTeam = async (gameweek) =>
  await instance.get(`/api/dream-team/${gameweek}/`);

// returns the status of adding bonus points and league updates for the current gameweek.
export const getLeagueAndBonusStatus = async () =>
  await instance.get("/api/event-status/");

// returns data on the given manager for the given gameweek and also shows the players chosen for the manager's team.
export const getManagerGameweekPicks = async (manager_id, gameweek) =>
  await instance.get(`/api/entry/${manager_id}/event/${gameweek}/picks/`);

// returns the given manager's current team, data on what chips the manager has used and when, and also the transfers made by the manager in the latest gameweek
export const getManagerCurrentTeam = async (manager_id) =>
  await instance.get(`/api/my-team/${manager_id}/`);
// returns current league standings
export const getLeagueStandings = async (league_id) =>
  await instance.get(`/api/leagues-classic/${league_id}/standings/`);

// returns specfic manager's latest transfers
export const getManagersLatestTransfers = async (manager_id) =>
  await instance.get(`/api/entry/${manager_id}/transfers-latest/`);

// returns static fpl content
export const getFplStaticStats = async () =>
  await instance.get("/api/bootstrap-static");

// returns fpl fixtures
export const getFplFixtures = async () => await instance.get("/api/fixtures/");
