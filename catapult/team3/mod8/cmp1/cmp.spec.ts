
import { Cmp2381Component } from './cmp';
describe('Cmp2381Component', () => {
  it('should add', () => {
    expect(new Cmp2381Component().add2381(1)).toBe(2382);
  });
});