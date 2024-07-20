import { Areachart } from "@/components/charts/Area";
import { Barchart } from "@/components/charts/Bar";
import { Linechart } from "@/components/charts/Line";
import { Piechart } from "@/components/charts/Pie";
import GitHubCalendar from "react-github-calendar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DashboardCards } from "@/constants/data";
export default function Home() {
  return (
    <main>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        My Stats
      </h1>
      <div className="mt-4 w-full grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3 ">
        {DashboardCards.map((CardData: DashboardCardType, index: number) => (
          <Card key={index}>
            <CardHeader className="flex justify-between items-center">
              <CardTitle className="text-primary text-5xl">
                {CardData.count}
              </CardTitle>
              <CardDescription className="font-semibold">
                {CardData.title}
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
      <div className="mt-4 w-full grid grid-cols-1 gap-4 lg:grid-cols-2">
        <Barchart />
        <Areachart />
        <Linechart />
        <Piechart />
      </div>
    </main>
  );
}
