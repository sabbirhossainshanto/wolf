/* eslint-disable react/no-unknown-property */
import { useEffect, useState } from "react";
import useContextState from "../../hooks/useContextState";
import axios from "axios";
import { API } from "../../api";
import { token } from "../../api/token";
import BetTable from "../../components/ui/BetTable/BetTable";
import { GoClock } from "react-icons/go";
const Sports = () => {
  const { sportsType } = useContextState();
  const [games, setGames] = useState(null);
  /* Get game events */
  useEffect(() => {
    const gameData = async () => {
      if (sportsType !== null) {
        const apiUrl = `${API.group}/${sportsType}`;
        const res = await axios.get(apiUrl, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = res.data;
        setGames(data);
      }
    };
    gameData();
    if (sportsType === 4 || sportsType === 1 || sportsType === 2) {
      const intervalId = setInterval(gameData, API.interval);
      return () => clearInterval(intervalId);
    }
  }, [sportsType]);

//   console.log(games);
  return (
    <div _ngcontent-ng-c943649379="" className="cricket-tab ng-star-inserted">
      <div _ngcontent-ng-c943649379="" className="game-play-heading">
        <h2 _ngcontent-ng-c943649379="">
          {sportsType === 4 ? "Cricket" : ""}
          {sportsType === 1 ? "Football" : ""}
          {sportsType === 2 ? "Tennis" : ""}
        </h2>

        <a
          _ngcontent-ng-c943649379=""
          routerlinkactive="active-link"
          className="view-all-link ng-star-inserted"
          href=""
        >
          View All
        </a>
      </div>
      {/*  <!-- <div _ngcontent-ng-c943649379="" className="cricket-card notranslate ng-star-inserted"
        style="display: none;">
        <div _ngcontent-ng-c943649379="" className="card-header">
          <h3 _ngcontent-ng-c943649379="" className="card-title"><mat-icon _ngcontent-ng-c943649379=""
              role="img"
              className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
              aria-hidden="true" data-mat-icon-type="font">play_arrow</mat-icon> New zealand Vs South
            africa </h3>
          <div _ngcontent-ng-c943649379="" className="lay-back-wrap">
            <h3 _ngcontent-ng-c943649379="" className="back-bg">Back</h3>
            <h3 _ngcontent-ng-c943649379="" className="lay-bg">Lay</h3>
          </div>
        </div>
        <div _ngcontent-ng-c943649379="" className="card-body">
          <div _ngcontent-ng-c943649379="" className="data-wrap ng-star-inserted">
            <div _ngcontent-ng-c943649379="" className="teamlist-info"><span
                _ngcontent-ng-c943649379=""></span>
              <h3 _ngcontent-ng-c943649379="" className="team-title"> new zealand </h3>
            </div>
            <div _ngcontent-ng-c943649379="" className="suspended-wrap ng-star-inserted">
              <h4 _ngcontent-ng-c943649379="">Suspended</h4>
            </div>
          </div>
          <div _ngcontent-ng-c943649379="" className="data-wrap ng-star-inserted">
            <div _ngcontent-ng-c943649379="" className="teamlist-info"><span
                _ngcontent-ng-c943649379=""></span>
              <h3 _ngcontent-ng-c943649379="" className="team-title"> south africa </h3>
            </div>
            <div _ngcontent-ng-c943649379="" className="suspended-wrap ng-star-inserted">
              <h4 _ngcontent-ng-c943649379="">Suspended</h4>
            </div>
          </div>
        </div>
      </div>
      <div _ngcontent-ng-c943649379="" className="cricket-card notranslate ng-star-inserted"
        style="display: none;">
        <div _ngcontent-ng-c943649379="" className="card-header">
          <h3 _ngcontent-ng-c943649379="" className="card-title"><mat-icon _ngcontent-ng-c943649379=""
              role="img"
              className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
              aria-hidden="true" data-mat-icon-type="font">play_arrow</mat-icon> Sharjah warriors Vs
            Abu dhabi knight riders </h3>
          <div _ngcontent-ng-c943649379="" className="lay-back-wrap">
            <h3 _ngcontent-ng-c943649379="" className="back-bg">Back</h3>
            <h3 _ngcontent-ng-c943649379="" className="lay-bg">Lay</h3>
          </div>
        </div>
        <div _ngcontent-ng-c943649379="" className="card-body">
          <div _ngcontent-ng-c943649379="" className="data-wrap ng-star-inserted">
            <div _ngcontent-ng-c943649379="" className="teamlist-info"><span
                _ngcontent-ng-c943649379=""></span>
              <h3 _ngcontent-ng-c943649379="" className="team-title"> sharjah warriors </h3>
            </div>
            <div _ngcontent-ng-c943649379="" className="suspended-wrap ng-star-inserted">
              <h4 _ngcontent-ng-c943649379="">Suspended</h4>
            </div>
          </div>
          <div _ngcontent-ng-c943649379="" className="data-wrap ng-star-inserted">
            <div _ngcontent-ng-c943649379="" className="teamlist-info"><span
                _ngcontent-ng-c943649379=""></span>
              <h3 _ngcontent-ng-c943649379="" className="team-title"> abu dhabi knight riders </h3>
            </div>
            <div _ngcontent-ng-c943649379="" className="suspended-wrap ng-star-inserted">
              <h4 _ngcontent-ng-c943649379="">Suspended</h4>
            </div>
          </div>
        </div>
      </div>
      <div _ngcontent-ng-c943649379="" className="cricket-card notranslate ng-star-inserted"
        style="display: none;">
        <div _ngcontent-ng-c943649379="" className="card-header">
          <h3 _ngcontent-ng-c943649379="" className="card-title"><mat-icon _ngcontent-ng-c943649379=""
              role="img"
              className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
              aria-hidden="true" data-mat-icon-type="font">play_arrow</mat-icon> Otago volts Vs
            Central stags </h3>
          <div _ngcontent-ng-c943649379="" className="lay-back-wrap">
            <h3 _ngcontent-ng-c943649379="" className="back-bg">Back</h3>
            <h3 _ngcontent-ng-c943649379="" className="lay-bg">Lay</h3>
          </div>
        </div>
        <div _ngcontent-ng-c943649379="" className="card-body">
          <div _ngcontent-ng-c943649379="" className="data-wrap ng-star-inserted">
            <div _ngcontent-ng-c943649379="" className="teamlist-info"><span
                _ngcontent-ng-c943649379=""></span>
              <h3 _ngcontent-ng-c943649379="" className="team-title"> otago volts </h3>
            </div>
            <div _ngcontent-ng-c943649379="" className="suspended-wrap ng-star-inserted">
              <h4 _ngcontent-ng-c943649379="">Suspended</h4>
            </div>
          </div>
          <div _ngcontent-ng-c943649379="" className="data-wrap ng-star-inserted">
            <div _ngcontent-ng-c943649379="" className="teamlist-info"><span
                _ngcontent-ng-c943649379=""></span>
              <h3 _ngcontent-ng-c943649379="" className="team-title"> central stags </h3>
            </div>
            <div _ngcontent-ng-c943649379="" className="suspended-wrap ng-star-inserted">
              <h4 _ngcontent-ng-c943649379="">Suspended</h4>
            </div>
          </div>
        </div>
      </div>
      <div _ngcontent-ng-c943649379="" className="cricket-card notranslate ng-star-inserted"
        style="display: none;">
        <div _ngcontent-ng-c943649379="" className="card-header">
          <h3 _ngcontent-ng-c943649379="" className="card-title"><mat-icon _ngcontent-ng-c943649379=""
              role="img"
              className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
              aria-hidden="true" data-mat-icon-type="font">play_arrow</mat-icon> Wellington firebirds
            Vs Northern districts </h3>
          <div _ngcontent-ng-c943649379="" className="lay-back-wrap">
            <h3 _ngcontent-ng-c943649379="" className="back-bg">Back</h3>
            <h3 _ngcontent-ng-c943649379="" className="lay-bg">Lay</h3>
          </div>
        </div>
        <div _ngcontent-ng-c943649379="" className="card-body">
          <div _ngcontent-ng-c943649379="" className="data-wrap ng-star-inserted">
            <div _ngcontent-ng-c943649379="" className="teamlist-info"><span
                _ngcontent-ng-c943649379=""></span>
              <h3 _ngcontent-ng-c943649379="" className="team-title"> wellington firebirds </h3>
            </div>
            <div _ngcontent-ng-c943649379="" className="suspended-wrap ng-star-inserted">
              <h4 _ngcontent-ng-c943649379="">Suspended</h4>
            </div>
          </div>
          <div _ngcontent-ng-c943649379="" className="data-wrap ng-star-inserted">
            <div _ngcontent-ng-c943649379="" className="teamlist-info"><span
                _ngcontent-ng-c943649379=""></span>
              <h3 _ngcontent-ng-c943649379="" className="team-title"> northern districts </h3>
            </div>
            <div _ngcontent-ng-c943649379="" className="suspended-wrap ng-star-inserted">
              <h4 _ngcontent-ng-c943649379="">Suspended</h4>
            </div>
          </div>
        </div>
      </div>
      <div _ngcontent-ng-c943649379="" className="cricket-card notranslate ng-star-inserted"
        style="display: none;">
        <div _ngcontent-ng-c943649379="" className="card-header">
          <h3 _ngcontent-ng-c943649379="" className="card-title"><mat-icon _ngcontent-ng-c943649379=""
              role="img"
              className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
              aria-hidden="true" data-mat-icon-type="font">play_arrow</mat-icon> Auckland aces Vs
            Canterbury kings </h3>
          <div _ngcontent-ng-c943649379="" className="lay-back-wrap">
            <h3 _ngcontent-ng-c943649379="" className="back-bg">Back</h3>
            <h3 _ngcontent-ng-c943649379="" className="lay-bg">Lay</h3>
          </div>
        </div>
        <div _ngcontent-ng-c943649379="" className="card-body">
          <div _ngcontent-ng-c943649379="" className="data-wrap ng-star-inserted">
            <div _ngcontent-ng-c943649379="" className="teamlist-info"><span
                _ngcontent-ng-c943649379=""></span>
              <h3 _ngcontent-ng-c943649379="" className="team-title"> auckland aces </h3>
            </div>
            <div _ngcontent-ng-c943649379="" className="suspended-wrap ng-star-inserted">
              <h4 _ngcontent-ng-c943649379="">Suspended</h4>
            </div>
          </div>
          <div _ngcontent-ng-c943649379="" className="data-wrap ng-star-inserted">
            <div _ngcontent-ng-c943649379="" className="teamlist-info"><span
                _ngcontent-ng-c943649379=""></span>
              <h3 _ngcontent-ng-c943649379="" className="team-title"> canterbury kings </h3>
            </div>
            <div _ngcontent-ng-c943649379="" className="suspended-wrap ng-star-inserted">
              <h4 _ngcontent-ng-c943649379="">Suspended</h4>
            </div>
          </div>
        </div>
      </div>
      <div _ngcontent-ng-c943649379="" className="cricket-card notranslate ng-star-inserted"
        style="display: none;">
        <div _ngcontent-ng-c943649379="" className="card-header">
          <h3 _ngcontent-ng-c943649379="" className="card-title"><mat-icon _ngcontent-ng-c943649379=""
              role="img"
              className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
              aria-hidden="true" data-mat-icon-type="font">play_arrow</mat-icon> Australia Vs West
            indies </h3>
          <div _ngcontent-ng-c943649379="" className="lay-back-wrap">
            <h3 _ngcontent-ng-c943649379="" className="back-bg">Back</h3>
            <h3 _ngcontent-ng-c943649379="" className="lay-bg">Lay</h3>
          </div>
        </div>
        <div _ngcontent-ng-c943649379="" className="card-body">
          <div _ngcontent-ng-c943649379="" className="data-wrap ng-star-inserted">
            <div _ngcontent-ng-c943649379="" className="teamlist-info"><span
                _ngcontent-ng-c943649379=""></span>
              <h3 _ngcontent-ng-c943649379="" className="team-title"> australia </h3>
            </div>
            <div _ngcontent-ng-c943649379="" className="suspended-wrap ng-star-inserted">
              <h4 _ngcontent-ng-c943649379="">Suspended</h4>
            </div>
          </div>
          <div _ngcontent-ng-c943649379="" className="data-wrap ng-star-inserted">
            <div _ngcontent-ng-c943649379="" className="teamlist-info"><span
                _ngcontent-ng-c943649379=""></span>
              <h3 _ngcontent-ng-c943649379="" className="team-title"> west indies </h3>
            </div>
            <div _ngcontent-ng-c943649379="" className="suspended-wrap ng-star-inserted">
              <h4 _ngcontent-ng-c943649379="">Suspended</h4>
            </div>
          </div>
        </div>
      </div>
      <div _ngcontent-ng-c943649379="" className="cricket-card notranslate ng-star-inserted"
        style="display: none;">
        <div _ngcontent-ng-c943649379="" className="card-header">
          <h3 _ngcontent-ng-c943649379="" className="card-title"><mat-icon _ngcontent-ng-c943649379=""
              role="img"
              className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
              aria-hidden="true" data-mat-icon-type="font">play_arrow</mat-icon> Durdanto dhaka Vs
            Rangpur riders </h3>
          <div _ngcontent-ng-c943649379="" className="lay-back-wrap">
            <h3 _ngcontent-ng-c943649379="" className="back-bg">Back</h3>
            <h3 _ngcontent-ng-c943649379="" className="lay-bg">Lay</h3>
          </div>
        </div>
        <div _ngcontent-ng-c943649379="" className="card-body">
          <div _ngcontent-ng-c943649379="" className="data-wrap ng-star-inserted">
            <div _ngcontent-ng-c943649379="" className="teamlist-info"><span
                _ngcontent-ng-c943649379=""></span>
              <h3 _ngcontent-ng-c943649379="" className="team-title"> durdanto dhaka </h3>
            </div>
            <div _ngcontent-ng-c943649379="" className="suspended-wrap ng-star-inserted">
              <h4 _ngcontent-ng-c943649379="">Suspended</h4>
            </div>
          </div>
          <div _ngcontent-ng-c943649379="" className="data-wrap ng-star-inserted">
            <div _ngcontent-ng-c943649379="" className="teamlist-info"><span
                _ngcontent-ng-c943649379=""></span>
              <h3 _ngcontent-ng-c943649379="" className="team-title"> rangpur riders </h3>
            </div>
            <div _ngcontent-ng-c943649379="" className="suspended-wrap ng-star-inserted">
              <h4 _ngcontent-ng-c943649379="">Suspended</h4>
            </div>
          </div>
        </div>
      </div>
      <div _ngcontent-ng-c943649379="" className="cricket-card notranslate ng-star-inserted"
        style="display: none;">
        <div _ngcontent-ng-c943649379="" className="card-header">
          <h3 _ngcontent-ng-c943649379="" className="card-title"><mat-icon _ngcontent-ng-c943649379=""
              role="img"
              className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
              aria-hidden="true" data-mat-icon-type="font">play_arrow</mat-icon> South africa u19 Vs
            India u19 </h3>
          <div _ngcontent-ng-c943649379="" className="lay-back-wrap">
            <h3 _ngcontent-ng-c943649379="" className="back-bg">Back</h3>
            <h3 _ngcontent-ng-c943649379="" className="lay-bg">Lay</h3>
          </div>
        </div>
        <div _ngcontent-ng-c943649379="" className="card-body">
          <div _ngcontent-ng-c943649379="" className="data-wrap ng-star-inserted">
            <div _ngcontent-ng-c943649379="" className="teamlist-info"><span
                _ngcontent-ng-c943649379=""></span>
              <h3 _ngcontent-ng-c943649379="" className="team-title"> south africa u19 </h3>
            </div>
            <div _ngcontent-ng-c943649379="" className="suspended-wrap ng-star-inserted">
              <h4 _ngcontent-ng-c943649379="">Suspended</h4>
            </div>
          </div>
          <div _ngcontent-ng-c943649379="" className="data-wrap ng-star-inserted">
            <div _ngcontent-ng-c943649379="" className="teamlist-info"><span
                _ngcontent-ng-c943649379=""></span>
              <h3 _ngcontent-ng-c943649379="" className="team-title"> india u19 </h3>
            </div>
            <div _ngcontent-ng-c943649379="" className="suspended-wrap ng-star-inserted">
              <h4 _ngcontent-ng-c943649379="">Suspended</h4>
            </div>
          </div>
        </div>
      </div>
      <div _ngcontent-ng-c943649379="" className="cricket-card notranslate ng-star-inserted"
        style="display: none;">
        <div _ngcontent-ng-c943649379="" className="card-header">
          <h3 _ngcontent-ng-c943649379="" className="card-title"><mat-icon _ngcontent-ng-c943649379=""
              role="img"
              className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
              aria-hidden="true" data-mat-icon-type="font">play_arrow</mat-icon> Chattogram
            challengers Vs Fortune barishal </h3>
          <div _ngcontent-ng-c943649379="" className="lay-back-wrap">
            <h3 _ngcontent-ng-c943649379="" className="back-bg">Back</h3>
            <h3 _ngcontent-ng-c943649379="" className="lay-bg">Lay</h3>
          </div>
        </div>
        <div _ngcontent-ng-c943649379="" className="card-body">
          <div _ngcontent-ng-c943649379="" className="data-wrap ng-star-inserted">
            <div _ngcontent-ng-c943649379="" className="teamlist-info"><span
                _ngcontent-ng-c943649379=""></span>
              <h3 _ngcontent-ng-c943649379="" className="team-title"> chattogram challengers </h3>
            </div>
            <div _ngcontent-ng-c943649379="" className="suspended-wrap ng-star-inserted">
              <h4 _ngcontent-ng-c943649379="">Suspended</h4>
            </div>
          </div>
          <div _ngcontent-ng-c943649379="" className="data-wrap ng-star-inserted">
            <div _ngcontent-ng-c943649379="" className="teamlist-info"><span
                _ngcontent-ng-c943649379=""></span>
              <h3 _ngcontent-ng-c943649379="" className="team-title"> fortune barishal </h3>
            </div>
            <div _ngcontent-ng-c943649379="" className="suspended-wrap ng-star-inserted">
              <h4 _ngcontent-ng-c943649379="">Suspended</h4>
            </div>
          </div>
        </div>
      </div>
      <div _ngcontent-ng-c943649379="" className="cricket-card notranslate ng-star-inserted"
        style="display: none;">
        <div _ngcontent-ng-c943649379="" className="card-header">
          <h3 _ngcontent-ng-c943649379="" className="card-title"><mat-icon _ngcontent-ng-c943649379=""
              role="img"
              className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
              aria-hidden="true" data-mat-icon-type="font">play_arrow</mat-icon> Dubai capitals Vs
            Gulf giants </h3>
          <div _ngcontent-ng-c943649379="" className="lay-back-wrap">
            <h3 _ngcontent-ng-c943649379="" className="back-bg">Back</h3>
            <h3 _ngcontent-ng-c943649379="" className="lay-bg">Lay</h3>
          </div>
        </div>
        <div _ngcontent-ng-c943649379="" className="card-body">
          <div _ngcontent-ng-c943649379="" className="data-wrap ng-star-inserted">
            <div _ngcontent-ng-c943649379="" className="teamlist-info"><span
                _ngcontent-ng-c943649379=""></span>
              <h3 _ngcontent-ng-c943649379="" className="team-title"> dubai capitals </h3>
            </div>
            <div _ngcontent-ng-c943649379="" className="suspended-wrap ng-star-inserted">
              <h4 _ngcontent-ng-c943649379="">Suspended</h4>
            </div>
          </div>
          <div _ngcontent-ng-c943649379="" className="data-wrap ng-star-inserted">
            <div _ngcontent-ng-c943649379="" className="teamlist-info"><span
                _ngcontent-ng-c943649379=""></span>
              <h3 _ngcontent-ng-c943649379="" className="team-title"> gulf giants </h3>
            </div>
            <div _ngcontent-ng-c943649379="" className="suspended-wrap ng-star-inserted">
              <h4 _ngcontent-ng-c943649379="">Suspended</h4>
            </div>
          </div>
        </div>
      </div>
      <div _ngcontent-ng-c943649379="" className="cricket-card notranslate ng-star-inserted"
        style="display: none;">
        <div _ngcontent-ng-c943649379="" className="card-header">
          <h3 _ngcontent-ng-c943649379="" className="card-title"><mat-icon _ngcontent-ng-c943649379=""
              role="img"
              className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
              aria-hidden="true" data-mat-icon-type="font">play_arrow</mat-icon> Sunrisers eastern
            cape Vs Durban super giants </h3>
          <div _ngcontent-ng-c943649379="" className="lay-back-wrap">
            <h3 _ngcontent-ng-c943649379="" className="back-bg">Back</h3>
            <h3 _ngcontent-ng-c943649379="" className="lay-bg">Lay</h3>
          </div>
        </div>
        <div _ngcontent-ng-c943649379="" className="card-body">
          <div _ngcontent-ng-c943649379="" className="data-wrap ng-star-inserted">
            <div _ngcontent-ng-c943649379="" className="teamlist-info"><span
                _ngcontent-ng-c943649379=""></span>
              <h3 _ngcontent-ng-c943649379="" className="team-title"> sunrisers eastern cape </h3>
            </div>
            <div _ngcontent-ng-c943649379="" className="suspended-wrap ng-star-inserted">
              <h4 _ngcontent-ng-c943649379="">Suspended</h4>
            </div>
          </div>
          <div _ngcontent-ng-c943649379="" className="data-wrap ng-star-inserted">
            <div _ngcontent-ng-c943649379="" className="teamlist-info"><span
                _ngcontent-ng-c943649379=""></span>
              <h3 _ngcontent-ng-c943649379="" className="team-title"> durban super giants </h3>
            </div>
            <div _ngcontent-ng-c943649379="" className="suspended-wrap ng-star-inserted">
              <h4 _ngcontent-ng-c943649379="">Suspended</h4>
            </div>
          </div>
        </div>
      </div>
      <div _ngcontent-ng-c943649379="" className="cricket-card notranslate ng-star-inserted"
        style="display: none;">
        <div _ngcontent-ng-c943649379="" className="card-header">
          <h3 _ngcontent-ng-c943649379="" className="card-title"><mat-icon _ngcontent-ng-c943649379=""
              role="img"
              className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
              aria-hidden="true" data-mat-icon-type="font">play_arrow</mat-icon> Australia women Vs
            South africa women </h3>
          <div _ngcontent-ng-c943649379="" className="lay-back-wrap">
            <h3 _ngcontent-ng-c943649379="" className="back-bg">Back</h3>
            <h3 _ngcontent-ng-c943649379="" className="lay-bg">Lay</h3>
          </div>
        </div>
        <div _ngcontent-ng-c943649379="" className="card-body">
          <div _ngcontent-ng-c943649379="" className="data-wrap ng-star-inserted">
            <div _ngcontent-ng-c943649379="" className="teamlist-info"><span
                _ngcontent-ng-c943649379=""></span>
              <h3 _ngcontent-ng-c943649379="" className="team-title"> australia women </h3>
            </div>
            <div _ngcontent-ng-c943649379="" className="suspended-wrap ng-star-inserted">
              <h4 _ngcontent-ng-c943649379="">Suspended</h4>
            </div>
          </div>
          <div _ngcontent-ng-c943649379="" className="data-wrap ng-star-inserted">
            <div _ngcontent-ng-c943649379="" className="teamlist-info"><span
                _ngcontent-ng-c943649379=""></span>
              <h3 _ngcontent-ng-c943649379="" className="team-title"> south africa women </h3>
            </div>
            <div _ngcontent-ng-c943649379="" className="suspended-wrap ng-star-inserted">
              <h4 _ngcontent-ng-c943649379="">Suspended</h4>
            </div>
          </div>
        </div>
      </div>
      <div _ngcontent-ng-c943649379="" className="cricket-card notranslate ng-star-inserted"
        style="display: none;">
        <div _ngcontent-ng-c943649379="" className="card-header">
          <h3 _ngcontent-ng-c943649379="" className="card-title"><mat-icon _ngcontent-ng-c943649379=""
              role="img"
              className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
              aria-hidden="true" data-mat-icon-type="font">play_arrow</mat-icon> Paarl royals Vs
            Johannesburg super kings </h3>
          <div _ngcontent-ng-c943649379="" className="lay-back-wrap">
            <h3 _ngcontent-ng-c943649379="" className="back-bg">Back</h3>
            <h3 _ngcontent-ng-c943649379="" className="lay-bg">Lay</h3>
          </div>
        </div>
        <div _ngcontent-ng-c943649379="" className="card-body">
          <div _ngcontent-ng-c943649379="" className="data-wrap ng-star-inserted">
            <div _ngcontent-ng-c943649379="" className="teamlist-info"><span
                _ngcontent-ng-c943649379=""></span>
              <h3 _ngcontent-ng-c943649379="" className="team-title"> paarl royals </h3>
            </div>
            <div _ngcontent-ng-c943649379="" className="suspended-wrap ng-star-inserted">
              <h4 _ngcontent-ng-c943649379="">Suspended</h4>
            </div>
          </div>
          <div _ngcontent-ng-c943649379="" className="data-wrap ng-star-inserted">
            <div _ngcontent-ng-c943649379="" className="teamlist-info"><span
                _ngcontent-ng-c943649379=""></span>
              <h3 _ngcontent-ng-c943649379="" className="team-title"> johannesburg super kings </h3>
            </div>
            <div _ngcontent-ng-c943649379="" className="suspended-wrap ng-star-inserted">
              <h4 _ngcontent-ng-c943649379="">Suspended</h4>
            </div>
          </div>
        </div>
      </div>
      <div _ngcontent-ng-c943649379="" className="cricket-card notranslate ng-star-inserted"
        style="display: none;">
        <div _ngcontent-ng-c943649379="" className="card-header">
          <h3 _ngcontent-ng-c943649379="" className="card-title"><mat-icon _ngcontent-ng-c943649379=""
              role="img"
              className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
              aria-hidden="true" data-mat-icon-type="font">play_arrow</mat-icon> Australia u19 Vs
            Pakistan u19 </h3>
          <div _ngcontent-ng-c943649379="" className="lay-back-wrap">
            <h3 _ngcontent-ng-c943649379="" className="back-bg">Back</h3>
            <h3 _ngcontent-ng-c943649379="" className="lay-bg">Lay</h3>
          </div>
        </div>
        <div _ngcontent-ng-c943649379="" className="card-body">
          <div _ngcontent-ng-c943649379="" className="data-wrap ng-star-inserted">
            <div _ngcontent-ng-c943649379="" className="teamlist-info"><span
                _ngcontent-ng-c943649379=""></span>
              <h3 _ngcontent-ng-c943649379="" className="team-title"> australia u19 </h3>
            </div>
            <div _ngcontent-ng-c943649379="" className="suspended-wrap ng-star-inserted">
              <h4 _ngcontent-ng-c943649379="">Suspended</h4>
            </div>
          </div>
          <div _ngcontent-ng-c943649379="" className="data-wrap ng-star-inserted">
            <div _ngcontent-ng-c943649379="" className="teamlist-info"><span
                _ngcontent-ng-c943649379=""></span>
              <h3 _ngcontent-ng-c943649379="" className="team-title"> pakistan u19 </h3>
            </div>
            <div _ngcontent-ng-c943649379="" className="suspended-wrap ng-star-inserted">
              <h4 _ngcontent-ng-c943649379="">Suspended</h4>
            </div>
          </div>
        </div>
      </div> --> */}
      <div
        _ngcontent-ng-c943649379=""
        className="cricket-table notranslate ng-star-inserted"
      >
        <div _ngcontent-ng-c943649379="" className="table-header">
          <h3 _ngcontent-ng-c943649379="" className="card-title">
            <mat-icon
              _ngcontent-ng-c943649379=""
              role="img"
              className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
              aria-hidden="true"
              data-mat-icon-type="font"
            >
              <GoClock />
            </mat-icon>
            Teams
          </h3>
          <div _ngcontent-ng-c943649379="" className="lay-back-wrap">
            <h3 _ngcontent-ng-c943649379="" className="back-bg">
              Back
            </h3>
            <h3 _ngcontent-ng-c943649379="" className="lay-bg">
              Lay
            </h3>
          </div>
        </div>
        <div _ngcontent-ng-c943649379="" className="table-body">
          {games && Object.values(games).length > 0 && sportsType === 4
            ? Object.keys(games)
                .sort((keyA, keyB) => games[keyA].sort - games[keyB].sort)
                .map((key, index) => (
                  <BetTable key={index} keys={key} data={games} />
                ))
            : null}
          {games && Object.values(games).length > 0 && sportsType === 2
            ? Object.keys(games)
                .sort((keyA, keyB) => games[keyA].sort - games[keyB].sort)
                .map((key, index) => (
                  <BetTable key={index} keys={key} data={games} />
                ))
            : null}
          {games && Object.values(games).length > 0 && sportsType === 1
            ? Object.keys(games)
                .sort((keyA, keyB) => games[keyA].sort - games[keyB].sort)
                .map((key, index) => (
                  <BetTable key={index} keys={key} data={games} />
                ))
            : null}
        </div>
      </div>
    </div>
  );
};

export default Sports;
