/** @jsxImportSource @emotion/react */

import * as globalStyles from "../../utils/styles/global";
import { Media } from "../../utils/interface/interface";
import { css } from "@emotion/react";
import { useAnimeListCtx } from "../../utils/context/AnimeList";
import { Link } from "react-router-dom";
export default function AnimeList() {
  const { loading, data } = useAnimeListCtx();

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      {data?.Data.map((dt: Media, index: number) => (
        <Link to={`/anime/${dt.id}`} key={index} css={cardStyle}>
          <img src={dt.assets.coverImage.medium} css={coverImage} />
          <img src={dt.assets.bannerImage} css={bannerImage} />
          <div css={cardDetail}>
            <div css={animeDetails}>
              <div> {dt.title}</div>
              <div> {dt.status}</div>
              <div> {dt.format}</div>
              <div> {dt.duration} Minute</div>
              <div> {dt.episodes} Episode</div>
            </div>
            <div css={animeDescription}>
              <div>Description</div>
              <div dangerouslySetInnerHTML={{ __html: dt.description }} />
            </div>
          </div>
        </Link>
      ))}
    </>
  );
}

const animeCard = css`
  ${globalStyles.flexRow}
  ${globalStyles.medium} {
    ${globalStyles.flexCol}
  }
`;

const image = css`
  object-fit: cover;
  width: 100px;
  height: 150px;
  ${globalStyles.medium} {
    ${globalStyles.widthFull}
    height: 100%;
  }
`;

const cardStyle = [
  animeCard,
  globalStyles.widthFull,
  css`
    color: black;
    text-decoration: none;
    border: 1px solid black;
  `,
];

const coverImage = [
  image,
  css`
    width: 100px;
    height: 170px;
    display: flex;
    ${globalStyles.medium} {
      display: none;
    }
  `,
];

const bannerImage = [
  image,
  css`
    display: none;
    ${globalStyles.medium} {
      display: flex;
    }
  `,
];

const cardDetail = [
  globalStyles.flexRow,
  css`
    gap: 4px;
    padding: 4px;
    ${globalStyles.medium} {
      gap: 16px;
    }
  `,
];
const animeDetails = [
  globalStyles.flexCol,
  css`
    gap: 4px;
    padding: 4px;
    ${globalStyles.medium} {
      min-width: 200px;
    }
  `,
];

const animeDescription = [
  globalStyles.flexCol,
  css`
    display: none;
    ${globalStyles.medium} {
      display: flex;
    }
  `,
];
