import S from "./styles.module.scss";

export default function AppFooter() {
  return (
    <footer className={S.footer}>
      <p className={S.footer__content}>
        Copyright AvailDomain 2024 - Seu consultor de Domínios
      </p>
    </footer>
  );
}
