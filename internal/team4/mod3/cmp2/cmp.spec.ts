
import { Cmp8432Component } from './cmp';
describe('Cmp8432Component', () => {
  it('should add', () => {
    expect(new Cmp8432Component().add8432(1)).toBe(8433);
  });
});