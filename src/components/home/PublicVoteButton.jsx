import React from 'react'
import { useHistory } from 'react-router-dom'

export function PublicVoteButton() {

  const history = useHistory()

  const routeToRanking = () => {
    history.push("/ranking")
  }

  return (
      <>
          <button
            className="btn-lg mx-auto btn btn-warning font-weight-bold mt-3 px-5 vote-btn"
            onClick={routeToRanking}
          >
            Just want to Vote?
          </button>
      </>
  )
}
