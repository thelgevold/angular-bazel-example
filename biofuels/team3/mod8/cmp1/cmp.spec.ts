
import { Cmp1381Component } from './cmp';
describe('Cmp1381Component', () => {
  it('should add', () => {
    expect(new Cmp1381Component().add1381(1)).toBe(1382);
  });
});