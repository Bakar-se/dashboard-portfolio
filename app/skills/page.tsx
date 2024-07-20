import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { skills } from "@/constants/data";

const Skills = () => {
  return (
    <main>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Skills
      </h1>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skill: string, index: number) => (
          <Card key={index} className="bg-primary/20 border-primary rounded-xl">
            <CardContent className="p-4 flex justify-center items-center">
              <img src={skill} alt="Skill" className="h-20" />
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
};

export default Skills;
