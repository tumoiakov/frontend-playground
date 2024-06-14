import LogoSVG from "@assets/logo.svg?react";

type LogoProps = React.SVGProps<SVGSVGElement> & {
  title?: string | undefined;
};

const Logo = (props: LogoProps) => {
  const { width = 144, height = 103 } = props;
  return <LogoSVG {...props} width={width} height={height} />;
};

export default Logo;
