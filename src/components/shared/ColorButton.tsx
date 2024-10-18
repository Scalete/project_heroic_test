import Link from "next/link";
import { FC } from "react";

interface ColorButtonProps {
  buttonColor: string;
  onClick: (e: React.MouseEvent) => void;
}

const ColorButton: FC<ColorButtonProps> = ({ buttonColor, onClick }) => {
  return (
    <Link
      href="#!"
      className={`btn btn-lg ${buttonColor ? "" : "btn-primary"}`}
      style={buttonColor ? { backgroundColor: buttonColor } : {}}
      onClick={onClick}
    >
      Call to action
    </Link>
  );
};

export default ColorButton;
