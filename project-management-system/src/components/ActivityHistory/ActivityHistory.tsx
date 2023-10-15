import Image from "next/image";
import React from "react";

type Props = {};

export default function ActivityHistory(props: Props) {
  return (
    <section>
      <Image
        src="/svg/hourglass.svg"
        width={30}
        height={30}
        alt="Изображение кнопки"
      />
      <h3>История активности</h3>
      
    </section>
  );
}
