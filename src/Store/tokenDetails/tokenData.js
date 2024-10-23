import { createSlice } from "@reduxjs/toolkit";
import SentimentAnalysis from "../../components/stock/SentimentAnalysis";

export const tokenSlice = createSlice({
    name: "tokenDetails",
    initialState: {
        tokenName: "",
        tokenSymbol: "",
        coinPrice: null,
        websiteURL: "",
        tokenIntroduction: "",
        tokenImgURL: "",
        tokenPriceChangeRate: {
            oneDay: null,
            sevenDays: null,
            thirtyDays: null,
            oneYear: null,
        },
        tokenomics: {
            totalSupply: null,
            circulatingSupply: null,
            tokenPrice: null,
            marketCap: null,
            totalVolume: null,
            allTimeHigh: null,
            allTimeLow: null,
        },
        utilityInfo: {
            tokensLocked: null,
            stakingRatio: null,
            tokenNature: "",
            AVGTradingVolume24: null,
            category: "",
            competitors: [],
            tokensLockedPercentage: null,
            scoreForTokenLocked: null,
            scoreForStakingRatio: null,
            scoreForNatureOfToken: null,
            tradingVolumeScore: null,
        },
        sentimentAnalysis: {
            headlines: [],
        },
        contractInfo: {
            token_name: "",
            platform_name: "",
            address: "",
            creator_address: "",
            honeypot_info: false,
            rug_pull_information: "",
            top_holders: [],
        },
        teamInfo: [],
        overallTeamScore: {
            overall_score: 0
        },
        telegramData: {
            status: false,
            members_count: 0,
            message_count: 0,
            member_score: 0,
            message_score: 0
        }
    },
    reducers: {
        setTokenBasicInfo: (state, action) => {
            state.tokenName = action.payload.data.tokenName;
            state.tokenSymbol = action.payload.data.tokenSymbol;
            state.websiteURL = action.payload.data.websiteURL;
            state.tokenIntroduction = action.payload.data.tokenIntroduction;
            state.coinPrice = action.payload.data.coinPrice;
            state.tokenImgURL = action.payload.data.tokenImgURL;
        },

        setTokenPriceChangeRate: (state, action) => {
            state.tokenPriceChangeRate = action.payload.data;
        },
        setTokenomics: (state, action) => {
            state.tokenomics = action.payload.data;
        },

        setUtilityInfo: (state, action) => {
            state.utilityInfo = { ...state.utilityInfo, ...action.payload.data };
        },

        setHeadLines: (state, action) => {
            state.sentimentAnalysis.headlines = action.payload.data;
        },

        setContractInfo: (state, action) => {
            state.contractInfo = action.payload.data;
        },
        setTeamInfo: (state, action) => {
            state.teamInfo = action.payload.data;
        },
        setOverallTeamScore: (state, action) => {
            state.overallTeamScore = action.payload.data; // Directly set the score
        },
        setTelegramData: (state, action) => {
            state.telegramData = { ...state.telegramData, ...action.payload.data };
        }

    },
});

export const {
    setTokenBasicInfo,
    setTokenomics,
    setUtilityInfo,
    setHeadLines,
    setContractInfo,
    setTokenPriceChangeRate,
    setTeamInfo,
    setOverallTeamScore,
    setTelegramData
} = tokenSlice.actions;
export default tokenSlice.reducer;
