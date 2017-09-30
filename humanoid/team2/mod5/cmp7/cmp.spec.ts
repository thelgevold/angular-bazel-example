
import { Cmp7257Component } from './cmp';
describe('Cmp7257Component', () => {
  it('should add', () => {
    expect(new Cmp7257Component().add7257(1)).toBe(7258);
  });
});