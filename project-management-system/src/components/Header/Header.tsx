import Link from "next/link";
import React from "react";
import styles from "./Header.module.scss";
import notification from "../../public/png/free-icon-notification-4196701.png";
import subtract from "../../public/svg/Subtract.svg";
import Image from "next/image";

export default function Header() {
  return (
    <header className={styles.header}>
      {/* <Link href="/test">help</Link>Header */}
      <div className={styles.container}>
        <Image
              src="svg/calendar_icon-icons.com_69415.svg"
              alt="Calendar duotone."
              className="dark:invert"
              width={30}
              height={30}
              priority
            />
            <Image
              src="svg/notification.svg"
              alt="Calendar duotone."
              className="dark:invert"
              width={30}
              height={30}
              priority
            />
      </div>
      <Image
              src="svg/user.svg"
              alt="Calendar duotone."
              className="dark:invert"
              width={30}
              height={30}
              priority
            />
    </header>
  );
}
