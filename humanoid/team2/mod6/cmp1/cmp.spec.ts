
import { Cmp7261Component } from './cmp';
describe('Cmp7261Component', () => {
  it('should add', () => {
    expect(new Cmp7261Component().add7261(1)).toBe(7262);
  });
});