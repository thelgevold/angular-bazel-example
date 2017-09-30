
import { Cmp7813Component } from './cmp';
describe('Cmp7813Component', () => {
  it('should add', () => {
    expect(new Cmp7813Component().add7813(1)).toBe(7814);
  });
});