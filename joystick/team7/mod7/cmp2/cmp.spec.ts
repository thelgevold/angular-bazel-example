
import { Cmp9772Component } from './cmp';
describe('Cmp9772Component', () => {
  it('should add', () => {
    expect(new Cmp9772Component().add9772(1)).toBe(9773);
  });
});