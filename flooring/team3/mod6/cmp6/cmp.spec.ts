
import { Cmp5366Component } from './cmp';
describe('Cmp5366Component', () => {
  it('should add', () => {
    expect(new Cmp5366Component().add5366(1)).toBe(5367);
  });
});