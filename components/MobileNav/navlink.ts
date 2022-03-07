// import literal types and make the object have literal types
import { moviePhaseValues } from '@/utils/MoviePhases';

export const navLinks = [
  {
    link: 'Phase One',
    phase: moviePhaseValues.one,
  },
  {
    link: 'Phase Two',
    phase: moviePhaseValues.two,
  },
  {
    link: 'Phase Three',
    phase: moviePhaseValues.three,
  },
  {
    link: 'Show All',
    phase: moviePhaseValues.showAll,
  },
] as const;
