
import { Cmp7804Component } from './cmp';
describe('Cmp7804Component', () => {
  it('should add', () => {
    expect(new Cmp7804Component().add7804(1)).toBe(7805);
  });
});