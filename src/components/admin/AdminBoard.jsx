import React from 'react'
import { RankingBar } from "./RankingBar"
import { RankingBarTopic } from "./RankingBarTopic"

export function AdminBoard() {
    return (
        <>
            <div>
                <table class="table table-striped">
                    <thread>
                    <tr>
                        <th scope="col">User</th>
                        <th>Status</th>
                        <th>0/3 Votes</th>
                    </tr>
                    </thread>
                    <tbody>
                        <RankingBar />
                        <RankingBar />
                        <RankingBar />
                        <RankingBar />
                        <RankingBar />
                        <RankingBar />
                        <RankingBar />
                        <RankingBar />
                        <RankingBar />
                        <RankingBar />
                    </tbody>
                </table>
            </div>
        </>
    )
}
