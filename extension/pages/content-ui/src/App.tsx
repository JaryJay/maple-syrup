import { useEffect } from 'react';
import { Button } from '@extension/ui';
import { useStorage } from '@extension/shared';
import { exampleThemeStorage } from '@extension/storage';

export default function App() {
  const theme = useStorage(exampleThemeStorage);

  useEffect(() => {
    console.log('content ui loaded');
  }, []);

  return (
    <div className="fixed right-0 top-24 mr-2 z-40">
      <div className="relative">
        <Button theme={theme} onClick={exampleThemeStorage.toggle} className='p-0 rounded-full hover:brightness-110 transition-all duration-200 shadow-md'>
          <img src={chrome.runtime.getURL("content-ui/maple-syrup-logo.svg")} alt="Maple syrup logo" width={50} />
        </Button>
        <div className='absolute top-[-2px] left-[-2px] rounded-full shadow-sm bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center pointer-events-none'>
          1
        </div>
      </div>
    </div>
  );
}
