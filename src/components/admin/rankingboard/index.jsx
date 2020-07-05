import React from 'react'
import { RankingBar } from "./RankingBar"
import { RankingBarTopic } from "./RankingBarTopic"

export function AdminStories() {
    return (
        <>
            <section className="table-container mx-auto my-5 text-center">
                <table className="table table-striped table-hover">
                    <RankingBarTopic />
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
            </section>
        </>
    )
}
