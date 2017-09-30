
import { Cmp9381Component } from './cmp';
describe('Cmp9381Component', () => {
  it('should add', () => {
    expect(new Cmp9381Component().add9381(1)).toBe(9382);
  });
});