import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Loader from "../components/Loader";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  setTokenBasicInfo,
  setTokenomics,
  setUtilityInfo,
  setHeadLines,
  setContractInfo,
  setTokenPriceChangeRate,
  setTeamInfo,
  setOverallTeamScore,
  setTelegramData,
} from "../Store/tokenDetails/tokenData";
import Header from "../components/stock/Header";
import Introduction from "../components/stock/Introduction";
import TokenNumerics from "../components/stock/TokenNumerics";
import TokenUtils from "../components/stock/TokenUtils";
import SentimentAnalysis from "../components/stock/SentimentAnalysis";
import Headlines from "../components/stock/Headlines";
import TeamScore from "../components/stock/Teaminfo";
import SmartContractSecurity from "../components/stock/SmartContractSecurity";
import axios from "axios";

function Stock() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchBasicInfo = async () => {
      // function to fetch basic coin info
      try {
        const tokenBasicInfo = await axios.get(
          `${
            import.meta.env.VITE_APP_BACKEND_URL
          }/coin_data/fundamental/basic_info/${id}`
        );
        const tokenPriceResponse = await axios.get(
          `${
            import.meta.env.VITE_APP_BACKEND_URL
          }/coingecko/simple/price?ids=${id}&vs_currencies=usd`
        );
        const tokenIntroductionResponse = await axios.get(
          `${
            import.meta.env.VITE_APP_BACKEND_URL
          }/coin_data/fundamental/analysis_results/${id}`
        );
        const tokenImageURLResponse = await axios.get(
          `${import.meta.env.VITE_APP_BACKEND_URL}/coingecko/coins/${id}`
        );

        dispatch(
          setTokenBasicInfo({
            type: "Set Token Basic Data",
            data: {
              tokenName: tokenBasicInfo.data["Token Name"],
              tokenSymbol: tokenBasicInfo.data["Token Symbol"],
              websiteURL: tokenBasicInfo.data["Website Link"],
              tokenIntroduction: tokenIntroductionResponse.data["Introduction"],
              coinPrice: tokenPriceResponse.data[id]["usd"],
              tokenImgURL: tokenImageURLResponse.data.image.small,
            },
          })
        );
      } catch (error) {
        console.log(error.message);
      }
    };

    const fetchTokenomics = async () => {
      // function to fetch coin tokenomics
      try {
        const tokenomicsResponse = await axios.get(
          `${
            import.meta.env.VITE_APP_BACKEND_URL
          }coin_data/fundamental/tokenomics_info/${id}`
        );
        dispatch(
          setTokenomics({
            type: "Set Tokenomics data",
            data: {
              totalSupply: tokenomicsResponse.data["Total Supply"],
              circulatingSupply: tokenomicsResponse.data["Circulating Supply"],
              tokenPrice: tokenomicsResponse.data["Token Price (USD)"],
              marketCap: tokenomicsResponse.data["Market Cap (USD)"],
              totalVolume: tokenomicsResponse.data["Total Volume (USD)"],
              allTimeHigh: tokenomicsResponse.data["All Time High (USD)"],
              allTimeLow: tokenomicsResponse.data["All Time Low (USD)"],
            },
          })
        );
      } catch (error) {
        console.log(error.message);
      }
    };

    const fetchUtilityInfo = async () => {
      try {
        const utilityInfoResponse = await axios.get(
          `${
            import.meta.env.VITE_APP_BACKEND_URL
          }/coin_data/fundamental/utility_info/${id}`
        );
        const data = utilityInfoResponse.data;

        // Dispatch the action to set the utility information in the store
        dispatch(
          setUtilityInfo({
            type: "SET_UTILITY_DATA",
            data: {
              tokensLocked: data["Tokens Locked"] || null,
              stakingRatio: data["Staking Ratio"] || null,
              tokenNature: data["Token Nature"] || "",
              AVGTradingVolume24: data["Average Trading Volume 24 hrs"] || null,
              category: data["binance-labs-portfolio"] || "",
              competitors: data["Top 5 Competitors"] || [],
              tokensLockedPercentage: data["Tokens Locked Percentage"] || null,
              scoreForTokenLocked: data["Score for Tokens Locked"] || null,
              scoreForStakingRatio: data["Score for Staking Ratio"] || null,
              scoreForNatureOfToken: data["Score for Nature of Token"] || null,
              tradingVolumeScore: data["Trading Volume Score"] || null,
            },
          })
        );
      } catch (error) {
        console.log("Error fetching utility info:", error.message);
      }
    };

    const fetchSentimentInfo = async () => {
      try {
        const tokenSentimentResponse = await axios.get(
          `${import.meta.env.VITE_APP_BACKEND_URL}coin_data/sentiment/${id}`
        );
        dispatch(
          setHeadLines({
            type: "Set Headlines data",
            data: tokenSentimentResponse.data.headlines,
          })
        );
      } catch (error) {
        console.log(error.message);
      }
    };

    const fetchTokenPriceChangeRate = async () => {
      try {
        const tokenPriceChangeRateResponse = await axios.get(
          `${import.meta.env.VITE_APP_BACKEND_URL}/coingecko/coins/${id}`
        );
        dispatch(
          setTokenPriceChangeRate({
            type: "Set Token Price Change Data",
            data: {
              oneDay:
                tokenPriceChangeRateResponse.data.market_data
                  .price_change_percentage_24h,
              sevenDays:
                tokenPriceChangeRateResponse.data.market_data
                  .price_change_percentage_7d,
              thirtyDays:
                tokenPriceChangeRateResponse.data.market_data
                  .price_change_percentage_30d,
              oneYear:
                tokenPriceChangeRateResponse.data.market_data
                  .price_change_percentage_1y,
            },
          })
        );
      } catch (error) {
        console.log(error.message);
      }
    };
    const fetchContractInfo = async () => {
      try {
        const contractInfoResponse = await axios.get(
          `${
            import.meta.env.VITE_APP_BACKEND_URL
          }/coin_data/fundamental/contract_information/${id}`
        );
        dispatch(
          setContractInfo({
            type: "Set Contract Info Data",
            data: {
              token_name:
                contractInfoResponse.data.token_name || "Unknown Token",
              platform_name:
                contractInfoResponse.data.platform_name || "Unknown Platform",
              address:
                contractInfoResponse.data.address || "No Address Available",
              creator_address:
                contractInfoResponse.data.creator_address ||
                "No Creator Address Available",
              honeypot_info: contractInfoResponse.data.honeypot_info || false,
              rug_pull_information:
                contractInfoResponse.data.rug_pull_information ||
                "No Rug Pull Info",
              top_holders: contractInfoResponse.data.top_holders || [],
            },
          })
        );
      } catch (error) {
        console.log(error.message);
      }
    };

    const fetchTeamInfo = async () => {
      try {
        const teamInfoResponse = await axios.get(
          `${
            import.meta.env.VITE_APP_BACKEND_URL
          }/coin_data/fundamental/team/${id}`
        );

        dispatch(
          setTeamInfo({
            type: "Set Team Info Data",
            data: teamInfoResponse.data.map((member) => ({
              name: member.name || "Unknown Name",
              position: member.position || "Unknown Position",
              description: member.description || "No Description Available",
              image_url: member.image_url || "/stock/profile-placeholder.png",
            })),
          })
        );
      } catch (error) {
        console.log(error.message);
      }
    };

    const fetchOverallTeamScore = async () => {
      try {
        const overallScoreResponse = await axios.get(
          `${
            import.meta.env.VITE_APP_BACKEND_URL
          }/coin_data/overall_score/${id}`
        );

        const overallScore = overallScoreResponse.data;

        dispatch(
          setOverallTeamScore({
            type: "set overall score",
            data: overallScore,
          })
        );
      } catch (error) {
        console.error("Error fetching overall team score:", error.message);
      }
    };

    const fetchTelegramData = async () => {
      try {
        const telegramData = await axios.get(
          `${import.meta.env.VITE_APP_BACKEND_URL}/coin_data/telegram/${id}`
        );

        dispatch(
          setTelegramData({
            type: "set telegram data",
            data: telegramData.data,
          })
        );
      } catch (error) {
        console.error("Error fetching telegram data:", error.message);
      }
    };

    const fetchData = async () => {
      try {

        // Fetch all required data concurrently
        await Promise.all([
          fetchBasicInfo(),
          fetchTokenomics(),
          fetchUtilityInfo(),
          fetchSentimentInfo(),
          fetchTokenPriceChangeRate(),
          fetchContractInfo(),
          fetchTeamInfo(),
          fetchOverallTeamScore(),
          fetchTelegramData(),
        ]);
      } catch (error) {
        console.log("Error fetching data:", error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div className="">
      {isLoading ? (
        <Loader />
      ) : (
        <div className="relative">
          <div className="relative w-[calc(100%)] h-[calc(100vh)]">
            <img
              className="w-full h-full object-cover"
              src="../login/backdrop.png"
              alt="background image"
            />
            <div className="absolute top-0 opacity-70 w-[calc(100%)] h-[calc(100vh)] bg-gray-600"></div>
          </div>
          <div className="absolute top-0 w-full h-full">
            <Navbar />

            <div className="px-2 py-4 md:px-6 md:py-4">
              <div className="bg-[#1D201C] w-full overflow-y-auto no-scrollbar h-[80vh] px-[0.5rem] py-[1rem] md:px-[3.38rem] md:py-[0.75rem]">
                <Header />
                <Introduction />
                <TokenNumerics />
                <TokenUtils />
                <SentimentAnalysis />
                <Headlines />
                <TeamScore />
                <SmartContractSecurity />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Stock;
