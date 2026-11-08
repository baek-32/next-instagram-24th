import Link from 'next/link';

import { Heart, House, LayoutGrid, Menu, Plus, Search, Send, SquarePlay } from 'lucide-react';
import { FaInstagram, FaUser } from 'react-icons/fa6';

const MENU_ITEMS = [
  { label: '홈', Icon: House },
  { label: '릴스', Icon: SquarePlay },
  { label: '메시지', Icon: Send },
  { label: '검색', Icon: Search },
  { label: '알림', Icon: Heart },
  { label: '만들기', Icon: Plus },
];

const FOOTER_ITEMS = [
  { label: '더 보기', Icon: Menu },
  { label: 'Meta의 다른 앱', Icon: LayoutGrid },
];

const ITEM_CLASS =
  'group/item flex h-12 w-full shrink-0 items-center overflow-hidden rounded-xl transition-colors hover:bg-neutral-100';

const ICON_CLASS =
  'flex h-12 w-14 shrink-0 items-center justify-center transition-transform duration-150 group-hover/item:scale-110 motion-reduce:transform-none';

const LABEL_CLASS =
  'shrink-0 whitespace-nowrap pr-4 opacity-0 transition-opacity duration-150 group-hover/sidebar:opacity-100';

export function AppNavigation() {
  return (
    <aside className="group/sidebar fixed inset-y-0 left-0 z-30 flex w-20 flex-col overflow-x-hidden overflow-y-auto border-r border-neutral-200 bg-white px-3 py-8 transition-[width] duration-200 ease-out hover:w-64 motion-reduce:transition-none">
      <div className="h-16 w-full shrink-0">
        <Link
          href="/"
          aria-label="Instagram 프로필로 이동"
          className="flex h-12 items-center overflow-hidden"
        >
          <span className="flex h-12 w-14 shrink-0 items-center justify-center">
            <FaInstagram size={28} aria-hidden="true" />
          </span>
        </Link>
      </div>

      <nav
        aria-label="주 메뉴"
        className="flex min-h-96 flex-1 translate-y-4 flex-col items-center justify-center gap-2"
      >
        {MENU_ITEMS.map(({ label, Icon }) => (
          <div key={label} className={ITEM_CLASS} aria-hidden="true">
            <span className={ICON_CLASS}>
              <Icon size={28} />
            </span>

            <span className={LABEL_CLASS}>{label}</span>
          </div>
        ))}

        <Link href="/" aria-label="프로필로 이동" className={ITEM_CLASS}>
          <span className={ICON_CLASS} aria-hidden="true">
            <span className="relative block h-8 w-8 overflow-hidden rounded-full bg-neutral-200">
              <FaUser
                size={26}
                className="absolute bottom-0 left-1/2 -translate-x-1/2 text-neutral-500"
              />
            </span>
          </span>

          <span className={LABEL_CLASS}>프로필</span>
        </Link>
      </nav>

      <div aria-hidden="true" className="flex h-40 w-full shrink-0 flex-col justify-end gap-2">
        {FOOTER_ITEMS.map(({ label, Icon }) => (
          <div key={label} className={ITEM_CLASS}>
            <span className={ICON_CLASS}>
              <Icon size={28} />
            </span>

            <span className={LABEL_CLASS}>{label}</span>
          </div>
        ))}
      </div>
    </aside>
  );
}
