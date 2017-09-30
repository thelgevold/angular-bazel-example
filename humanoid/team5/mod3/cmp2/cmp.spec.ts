
import { Cmp7532Component } from './cmp';
describe('Cmp7532Component', () => {
  it('should add', () => {
    expect(new Cmp7532Component().add7532(1)).toBe(7533);
  });
});