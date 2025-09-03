import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
import COMMENTS from "@/scripts/comments.ts";

const firstRow = COMMENTS.slice(0, COMMENTS.length / 2);
const secondRow = COMMENTS.slice(COMMENTS.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  comment,
}: {
  img: string;
  name: string;
  username: string;
  comment: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-white hover:bg-amber-100/70 transition-colors",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{comment}</blockquote>
    </figure>
  );
};

export function CommentsSlider() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-transparent">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-amber-50"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-amber-50"></div>
    </div>
  );
}
