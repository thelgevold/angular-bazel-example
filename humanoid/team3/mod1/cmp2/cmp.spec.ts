
import { Cmp7312Component } from './cmp';
describe('Cmp7312Component', () => {
  it('should add', () => {
    expect(new Cmp7312Component().add7312(1)).toBe(7313);
  });
});