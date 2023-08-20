"use client";

import { deleteWave } from "@/lib/actions/wave.actions";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

interface Props {
  threadId: string;
  currentUserId: string;
  authorId: string;
  parentId: string | null;
  isComment?: boolean;
}

function DeleteThread({
  threadId,
  currentUserId,
  authorId,
  parentId,
  isComment,
}: Props) {
  const pathname = usePathname();
  const router = useRouter();

  if (currentUserId !== authorId ) return null;

  return (
    <Image
      src='/assets/delete.svg'
      alt='delete'
      width={25}
      height={20}
      className='cursor-pointer object-contain'
      onClick={async () => {
        await deleteWave(JSON.parse(threadId), pathname);
        if (!parentId || !isComment) {
          router.push("/");
        }
      }}
    />
  );
}

export default DeleteThread;