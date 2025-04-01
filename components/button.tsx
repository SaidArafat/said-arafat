'use client';
type Props = Readonly<{
  children: React.ReactNode;
  type: 'solid' | 'outlined';
  loading?: boolean;
}>;

export function Button({ type, loading = false, children }: Props) {
  const classes =
    type === 'solid'
      ? 'bg-orange-500 text-black hover:bg-transparent hover:text-gray-600'
      : 'text-gray-600 dark:text-gray-300 hover:bg-orange-500 hover:text-black';

  const handleClick = () => {
    if (type === 'solid') console.log('solid');
    else console.log('outlined');
  };

  return (
    <button
      className={`px-6 py-2.5 w-full border-2 border-orange-500 rounded-lg
      outline-none cursor-pointer capitalize
      hover:shadow-xl hover:-translate-y-0.5 
      focus:shadow-xl 
      active:translate-y-0 active:shadow-none
      disabled:cursor-wait disabled:shadow-none disabled:translate-y-0
      transition-all duration-500 ${classes}`}
      onClick={handleClick}
      disabled={loading}
    >
      {children}
    </button>
  );
}
