// src/lib/components/hooks/is-mobile.svelte.ts
import { browser } from '$app/environment';

export class IsMobile {
  current = $state<boolean>(false);

  constructor() {
    if (browser) {
      this.current = window.innerWidth < 768;
      
      const checkMobile = () => {
        this.current = window.innerWidth < 768;
      };

      window.addEventListener('resize', checkMobile);
      
      $effect(() => {
        return () => {
          window.removeEventListener('resize', checkMobile);
        };
      });
    }
  }
}