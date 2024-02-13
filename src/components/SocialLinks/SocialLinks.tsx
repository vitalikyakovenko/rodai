import classNames from 'classnames'
import Link from 'next/link'
import { FC } from 'react'

export interface SocialLinksProps {
  className?: string
}

export const SocialLinks: FC<SocialLinksProps> = ({ className }) => {
  return (
    <div
      className={classNames(
        'flex flex-wrap justify-center md:justify-start text-center gap-4',
        className
      )}
    >
      <Link
        href="https://discord.gg/BsKmXyFJvE"
        target="_blank"
        className="hidden"
      >
        <img
          src="/img/social/discord.png"
          alt="discord"
          className="w-12 md:w-16 cursor-pointer"
        />
      </Link>
      <Link href="https://t.me/rodaisol" target="_blank">
        <img
          src="/img/social/telegram.png"
          alt="telegram"
          className="w-12 md:w-16 cursor-pointer"
        />
      </Link>
      <Link href="https://twitter.com/RodAISol" target="_blank">
        <img
          src="/img/social/x.png"
          alt="twitter"
          className="w-12 md:w-16 cursor-pointer"
        />
      </Link>
    </div>
  )
}
