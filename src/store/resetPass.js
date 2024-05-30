import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const resetPassApi = createAsyncThunk(
    "restPassword", async ({ resetLink, Mypassword, confirmPassword, role }) => {
        try {
            if (role === "owner") {
                const response = await axios.put("https://xbut-eryu-hhsg.f2.xano.io/api:bwh6Xc5O/claris/reset-password",
                    {
                        resetLink,
                        Mypassword,
                        confirmPassword
                    })

                return response
            }
            if (role === "influencer") {
                const response = await axios.put("https://xbut-eryu-hhsg.f2.xano.io/api:bwh6Xc5O/influencer/reset-password",
                    {
                        resetLink,
                        Mypassword,
                        confirmPassword
                    })

                return response
            }

        } catch (err) {
            console.log(err.message)
        }

    }
)

const initialState = {
    status: "idle",
    response: {}
}

export const ResetPassSlice = createSlice({
    name: "resetPassResponse",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(resetPassApi.pending, (state) => {
                state.status = "loading"
            })
            .addCase(resetPassApi.fulfilled, (state, { payload }) => {
                state.status = "Succeeded"
                state.response = payload
            })
            .addCase(resetPassApi.rejected, (state) => {
                state.status = "rejected"
            })
    }
})


