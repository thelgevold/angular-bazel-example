
import { Cmp9120Component } from './cmp';
describe('Cmp9120Component', () => {
  it('should add', () => {
    expect(new Cmp9120Component().add9120(1)).toBe(9121);
  });
});