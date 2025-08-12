import React, { useState, useEffect } from "react";
import "./Project.css";
import GithubRepoCard from "../../components/githubRepoCard/GithubRepoCard";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio.js";

export default function Projects() {
  return (
    <div className="main" id="opensource">
      <div className="repo-cards-div-main"></div>
      <Button
        text={"Mais Projetos"}
        className="project-button"
        href={greeting.githubProfile}
        newTab={true}
      />
    </div>
  );
}
