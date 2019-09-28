import { getMountedComponent } from '../../tests/utils';
import { Pocket } from './Pocket';
import { PocketCard } from '../../components/PocketCard/PocketCard';

describe('pocket', () => {
  const { component } = getMountedComponent(Pocket);

  it('should contain 3 base pocket cards', () => {
    expect(component.find(PocketCard)).toHaveLength(3);
  });
});
