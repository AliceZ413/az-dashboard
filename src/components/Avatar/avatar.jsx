import * as Avatar from "@radix-ui/react-avatar";
import clsx from "clsx";

const AvatarComponent = ({ user }) => {
  return (
    <Avatar.Root
      className={clsx(
        "inline-flex",
        "items-center",
        "justify-center",
        "align-middle",
        "overflow-hidden",
        "select-none",
        "w-[45px]",
        "h-[45px]",
        "rounded-[100%]",
        "border"
      )}
    >
      <Avatar.Image
        className={clsx(
          "w-[100%]",
          "h-[100%]",
          "object-cover",
          "rounded-[inherit]"
        )}
        src={user?.avatar}
        alt={user?.name}
      ></Avatar.Image>
      <Avatar.Fallback
        className={clsx(
          "w-[100%]",
          "h-[100%]",
          "flex",
          "items-center",
          "justify-center",
          "bg-white",
          "text-violet-500",
          "text-[16px]",
          "leading-none"
        )}
        delayMs={600}
      >
        {user?.name?.slice(0, 1)}
      </Avatar.Fallback>
    </Avatar.Root>
  );
};

export default AvatarComponent;
