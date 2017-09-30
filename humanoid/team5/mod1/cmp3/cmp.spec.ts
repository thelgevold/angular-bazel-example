
import { Cmp7513Component } from './cmp';
describe('Cmp7513Component', () => {
  it('should add', () => {
    expect(new Cmp7513Component().add7513(1)).toBe(7514);
  });
});