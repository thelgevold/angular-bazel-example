
import { Cmp8680Component } from './cmp';
describe('Cmp8680Component', () => {
  it('should add', () => {
    expect(new Cmp8680Component().add8680(1)).toBe(8681);
  });
});