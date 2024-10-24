import React from "react";
interface PageProps {
  params: { id: string };
}

const GamePage = ({ params }: PageProps) => {
  const { id } = params;
};

export default GamePage;
