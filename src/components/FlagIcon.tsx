export default function FlagIcon({ className, flagIcon, country }: IFlagIcon) {
  return (
    <>
      <img className={className} src={flagIcon}></img>
      <span hidden={!country}>{country}</span>
    </>
  );
}
