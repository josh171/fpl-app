import React from "react";
import { Route, Routes } from "react-router-dom";
import CurrentTeam from "../pages/currentTeam";
import LeagueStandings from "../pages/leagueStandings";
import ManagerPicks from "../pages/managerPicks";
import Players from "../pages/players";
import Home from "../pages/home";
import PlayerComparison from "../pages/playerComparison";
import GameweekNotes from "../pages/gameweekNotes";

const AppRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/my-current-team" element={<CurrentTeam />} />
      <Route exact path="/league-standings" element={<LeagueStandings />} />
      <Route exact path="/players" element={<Players />} />
      <Route
        exact
        path={`/league-standings/manager/:entry_id`}
        element={<ManagerPicks />}
      />
      <Route exact path="/player-comparison" element={<PlayerComparison />} />
      <Route exact path="/gameweek-notes" element={<GameweekNotes />} />
    </Routes>
  );
};

export default AppRoutes;
