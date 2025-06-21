import "./globals.css";
"use client";

import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const ranks = ["E", "D", "C", "B", "A", "S"];
const stats = ["Spirit", "Vocal", "Muscle", "Mind", "Heart", "Light"];

export default function Home() {
  const [selectedRank, setSelectedRank] = useState("E");
  const [selectedStat, setSelectedStat] = useState("Spirit");
  const [task, setTask] = useState("");

  return (
    <div className="flex flex-col min-h-screen items-center p-6 bg-black text-white space-y-6">
      <h1 className="text-3xl font-bold text-center">Dominator Task System</h1>

      <div className="flex space-x-2">
        {stats.map((stat) => (
          <Button
            key={stat}
            variant={selectedStat === stat ? "default" : "outline"}
            onClick={() => setSelectedStat(stat)}
          >
            {stat}
          </Button>
        ))}
      </div>

      <Textarea
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder={`What will you do today to level up your ${selectedStat}?`}
        className="bg-white text-black max-w-xl w-full"
      />

      <div className="flex space-x-2">
        {ranks.map((rank) => (
          <Button
            key={rank}
            variant={selectedRank === rank ? "default" : "outline"}
            onClick={() => setSelectedRank(rank)}
          >
            {rank}
          </Button>
        ))}
      </div>

      {task && (
        <Card className="bg-white text-black max-w-xl w-full">
          <CardContent className="p-4">
            <p className="text-sm text-muted-foreground mb-2">
              Rank {selectedRank} Task – {selectedStat}
            </p>
            <p className="text-xl font-semibold">{task}</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
