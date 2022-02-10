import { useState, useEffect } from "react";
import Head from "next/head";
import { api } from "../services/api";
import { Cards } from "../components/Card/Cards";
import Modal from "react-modal";
import HomePage from "../layout/home";

export default function Home() {
  return (
    <>
      <HomePage />
    </>
  );
}
