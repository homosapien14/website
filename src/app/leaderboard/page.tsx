"use client";
import { getLeaderboard } from "@/component/api";
import { apprentice } from "@/component/assets/images";
import { useEffect, useState } from "react";

const LeaderBoard = () => {
  const [leaderboardData, setleaderboardData] = useState([]);
  useEffect(() => {
    const getLeaderboardData = async () => {
      const response = await getLeaderboard();
      console.log(response);
      setleaderboardData(response?.data);
    };
    getLeaderboardData();
  }, []);
  return (
    <div className="my-5 relative overflow-x-auto">
      <table className="lg:w-[80vw] xs:w-[90vw] text-sm text-left mx-auto">
        <thead className="text-xs text-white uppercase bg-primary-color font-bold">
          <tr>
            <th scope="col" className="px-6 py-3">
              S.No
            </th>
            <th scope="col" className="px-6 py-3">
              GitHub Usernames
            </th>
            <th scope="col" className="px-6 py-3">
              Points
            </th>
            <th scope="col" className="px-6 py-3">
              Badges
            </th>
          </tr>
        </thead>
        <tbody>
          {leaderboardData &&
            leaderboardData?.length > 0 &&
            leaderboardData?.map((data, index) => (
              <tr className="bg-white border-b">
                <td className="px-6 py-4">{index + 1}</td>
                <td className="px-6 py-4">
                  <a href={data?.github_url}>{data?.github_url?.slice("19")}</a>
                </td>
                <td className="px-6 py-4">{data?.points}</td>
                <td className="flex my-2">
                  {data?.apprentice_badge && (
                    <img
                      src="/assets/badges/Apprentice.png"
                      className="w-[50px] rounded-full"
                    />
                  )}
                  {data?.converser_badge && (
                    <img
                      src="/assets/badges/Converser.png"
                      className="w-[50px] rounded-full"
                    />
                  )}
                  {data?.rockstar_badge && (
                    <img
                      src="/assets/badges/Rockstar.png"
                      className="w-[50px] rounded-full"
                    />
                  )}
                  {data?.github_x_discord_badge && (
                    <img
                      src="/assets/badges/DiscordGithub.png"
                      className="w-[50px] rounded-full"
                    />
                  )}
                  {data?.enthusiast_badge && (
                    <img
                      src="/assets/badges/Enthusiast.png"
                      className="w-[50px] rounded-full"
                    />
                  )}
                  {data?.rising_star_badge && (
                    <img
                      src="/assets/badges/RisingStar.png"
                      className="w-[50px] rounded-full"
                    />
                  )}
                </td>
              </tr>
            ))}
        </tbody>
      </table>

      <table>
        <thead></thead>
        <tbody></tbody>
      </table>
    </div>
  );
};

export default LeaderBoard;
