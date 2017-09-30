
import { Cmp4381Component } from './cmp';
describe('Cmp4381Component', () => {
  it('should add', () => {
    expect(new Cmp4381Component().add4381(1)).toBe(4382);
  });
});