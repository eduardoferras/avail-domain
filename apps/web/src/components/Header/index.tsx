"use client";
import Link from "next/link";
import useResetFile from "@/hooks/File/useResetFile";
import Icon from "../UI/Icon";
import S from "./styles.module.scss";

export default function Header() {
  return (
    <header className={S.header}>
      <Link href="/" onClick={useResetFile()}>
        <Icon
          name="logo-avail-domain"
          alt="Página Inicial Avail Domain"
          width="182"
          height="25"
        />
      </Link>
    </header>
  );
}
