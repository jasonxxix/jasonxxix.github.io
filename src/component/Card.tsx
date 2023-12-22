"use client"

import Image from "../component/Image"
import styled from 'styled-components';

interface CardType {
  src: string;
  alt: string;
  textarea: string;
} 

export default function Card({
  src,
  alt,
  textarea,
}: CardType) {
    return (
      <CardDiv className="text-center">
        <Image src={src} alt={alt} width={200} height={200} />
        <b>{textarea}</b>
      </CardDiv>
    )
  }

const CardDiv = styled.div`
  height: 600px;
  width: 300px;
  background-color: #c2c2d6;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  margin: 20px;
  transition: transform 1s;
  img{
    border-radius: 100%;
    border-color: #d1d1e0;
    border-width: 2px;
    margin-bottom: 10px;
  };
  b{
    font-size: 42px;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    color: azure;
  };
  &:hover{
    transform: rotateY(360deg);
    cursor: pointer;
  };
`