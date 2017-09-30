
import { Cmp8170Component } from './cmp';
describe('Cmp8170Component', () => {
  it('should add', () => {
    expect(new Cmp8170Component().add8170(1)).toBe(8171);
  });
});