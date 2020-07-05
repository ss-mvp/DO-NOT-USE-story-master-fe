import React from 'react'

export function RankingBarTopic() {
    return (
        <>
            <thead>
                <tr>
                    {
                        ["User", "Status", "Vote"].map(el => <th>{el}</th>)
                    }
                </tr>
            </thead>
        </>
    )
}