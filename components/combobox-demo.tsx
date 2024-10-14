'use client';

import * as React from 'react';
import { ChevronsUpDown } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import type { Product } from '@/types';
import { Search } from '@/components/search';

const POPOVER_WIDTH = 'w-[250px]';

export function ComboboxDemo() {
  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState<Product | undefined>();

  const handleSetActive = React.useCallback((product: Product) => {
    setSelected(product);

    // OPTIONAL: close the combobox upon selection
    // setOpen(false);
  }, []);

  const displayName = selected ? selected.title : 'Select product';

  return (
    <Search selectedResult={selected} onSelectResult={handleSetActive} />

  );
}
