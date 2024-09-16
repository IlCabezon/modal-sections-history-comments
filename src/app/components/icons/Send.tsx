import { IconProps } from "./iconProps.interface";

export const SendIcon: React.FC<IconProps> = ({ width, height, fill }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.7603 0.203221C22.5462 0.00441785 22.2446 -0.0552232 21.9819 0.0541187L0.477168 8.67225C0.194979 8.79153 0.0100972 9.05992 0.000366589 9.378C-0.00936405 9.68615 0.175518 9.96447 0.447976 10.0937L9.91588 14.2984L14.6352 23.5925C14.7617 23.8509 15.0245 24 15.2969 24C15.3164 24 15.3358 24 15.365 24C15.6667 23.9702 15.9197 23.7614 16.017 23.4732L22.9647 0.988495C23.0522 0.71017 22.9744 0.402025 22.7603 0.203221ZM15.1315 21.2466L11.3657 13.8312L17.6809 6.9029C17.9631 6.59475 17.9437 6.10769 17.642 5.82936C17.3404 5.5411 16.8733 5.56098 16.5911 5.86912L10.2759 12.7974L2.69575 9.41776L21.0672 2.04215L15.1315 21.2466Z"
        fill={fill || "#000"}
      />
    </svg>
  );
};