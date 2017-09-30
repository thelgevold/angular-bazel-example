
import { Cmp8863Component } from './cmp';
describe('Cmp8863Component', () => {
  it('should add', () => {
    expect(new Cmp8863Component().add8863(1)).toBe(8864);
  });
});