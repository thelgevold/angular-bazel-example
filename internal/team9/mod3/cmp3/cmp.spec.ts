
import { Cmp8933Component } from './cmp';
describe('Cmp8933Component', () => {
  it('should add', () => {
    expect(new Cmp8933Component().add8933(1)).toBe(8934);
  });
});