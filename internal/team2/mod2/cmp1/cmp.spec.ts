
import { Cmp8221Component } from './cmp';
describe('Cmp8221Component', () => {
  it('should add', () => {
    expect(new Cmp8221Component().add8221(1)).toBe(8222);
  });
});