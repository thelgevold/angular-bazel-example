
import { Cmp8899Component } from './cmp';
describe('Cmp8899Component', () => {
  it('should add', () => {
    expect(new Cmp8899Component().add8899(1)).toBe(8900);
  });
});