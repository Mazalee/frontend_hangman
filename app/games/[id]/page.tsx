import FetchGameDetails from "@/app/components/game/FetchGameDetails";
import React from "react";

interface PageProps {
  params: { text: string };
}

const GamePage = ({ params }: PageProps) => {
  const { text } = params;

  return <FetchGameDetails text={text} />;
};

export default GamePage;
