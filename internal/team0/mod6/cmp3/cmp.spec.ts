
import { Cmp8063Component } from './cmp';
describe('Cmp8063Component', () => {
  it('should add', () => {
    expect(new Cmp8063Component().add8063(1)).toBe(8064);
  });
});