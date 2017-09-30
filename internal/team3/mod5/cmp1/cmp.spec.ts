
import { Cmp8351Component } from './cmp';
describe('Cmp8351Component', () => {
  it('should add', () => {
    expect(new Cmp8351Component().add8351(1)).toBe(8352);
  });
});