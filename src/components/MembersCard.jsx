import FrameIcon from "../assets/Frame-1.png";

const stats = {
  value: "1K+",
  label: "Members",
};

const MembersCard = () => {
  return (
    <div
      className="
        absolute
        top-0
        right-3
        z-30

        flex
        h-[126px]
        w-[112px]
        flex-col
        items-center
        justify-center

        border
        border-[#eef0f5]
        bg-white

        px-3

        shadow-[0_22px_60px_rgba(31,35,71,0.12)]

        min-[420px]:right-4

        md:top-3
        md:right-6
        md:h-[158px]
        md:w-[142px]

        lg:right-[147px]
        lg:top-[-15px]
        lg:h-[141px]
        lg:w-[127px]
      "
    >
      <div className="flex w-full items-center justify-center">
        <img
          src={FrameIcon}
          alt=""
          className="
            h-10
            w-10
            object-contain

            min-[420px]:h-11
            min-[420px]:w-11

            md:h-12
            md:w-12

            lg:h-[47px]
            lg:w-[47px]
          "
        />
      </div>

      <h3
        className="
          mt-2
          text-[36px]
          font-black
          leading-none
          text-[#27206d]

          min-[420px]:text-[42px]

          md:text-[48px]

          lg:text-[41px]
        "
      >
        {stats.value}
      </h3>

      <p
        className="
          mt-1
          text-[14px]
          leading-none
          text-[#27206d]

          min-[420px]:text-[16px]

          md:text-[17px]

          lg:text-[16px]
        "
      >
        {stats.label}
      </p>
    </div>
  );
};

export default MembersCard;