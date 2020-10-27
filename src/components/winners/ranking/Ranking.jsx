import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import TopThree from "./TopThreeRanking";
import { AxiosWithAuth } from "../../../utils";
import StoryModal from "../modals/StoryModals";
// TODO - replace once we are ready to take emails
import EmailModal from "../modals/EmailModal";

export function Ranking(props) {
  const [winners, setWinners] = useState([]);
  const [error, setError] = useState();
  const [selection, setSelection] = useState();
  const [isDisabled, setIsDisabled] = useState(true);
  const [btnText, setBtnText] = useState("check back later");

  const history = useHistory();

  useEffect(() => {
    AxiosWithAuth()
      .get("/ranking")
      .then(res => {
        let response = res.data;
        if (response.length > 0) {
          setIsDisabled(false);
          setBtnText("Rank my winners!");
          setWinners(response);
          setSelection({
            rank1: response[0].id,
            rank2: response[1].id,
            rank3: response[2].id,
          });
        }
      })
      .catch(console.error);
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    let isDup = [
      ...new Set([
        parseInt(selection.rank1),
        parseInt(selection.rank2),
        parseInt(selection.rank3),
      ]),
    ];
    // console.log(isDup);
    if (isDup.length === 3) {
      let requestBody = [
        { rank: 1, topthree_id: parseInt(selection.rank1) },
        { rank: 2, topthree_id: parseInt(selection.rank2) },
        { rank: 3, topthree_id: parseInt(selection.rank3) },
      ];
      AxiosWithAuth()
        .post("ranking", requestBody)
        .then(res => {
          history.push("/dashboard");
        })
        .catch(err => {
          console.log(err);
          setError(err);
        });
    } else {
      setError({
        message:
          "DUPLICATE VALUE DETECTED, please select your favorite 1, 2, 3",
      });
    }
  };

  return (
    <div
      className={
        window.innerWidth <= 500
          ? "bg-light custom-border rounded-lg"
          : "bg-light custom-border p-5 rounded-lg"
      }
    >
      {winners &&
        winners.map(el => (
          <StoryModal username={el.username} image={el.image} id={el.id} />
        ))}
      <form onSubmit={handleSubmit}>
        {!winners && <></>}
        {winners &&
          winners.map((el, index) => (
            <TopThree
              index={index}
              winners={winners}
              winner={el}
              selection={selection}
              setSelection={setSelection}
            />
          ))}
        <EmailModal disabled={isDisabled} type={"submit"} btnText={btnText} />

        {error && (
          <div className='alert alert-danger' role='alert'>
            {" "}
            {error.message}{" "}
          </div>
        )}
      </form>
    </div>
  );
}
