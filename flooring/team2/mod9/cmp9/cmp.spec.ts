
import { Cmp5299Component } from './cmp';
describe('Cmp5299Component', () => {
  it('should add', () => {
    expect(new Cmp5299Component().add5299(1)).toBe(5300);
  });
});