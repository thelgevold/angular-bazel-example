
import { Cmp5351Component } from './cmp';
describe('Cmp5351Component', () => {
  it('should add', () => {
    expect(new Cmp5351Component().add5351(1)).toBe(5352);
  });
});