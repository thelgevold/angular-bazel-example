
import { Cmp7912Component } from './cmp';
describe('Cmp7912Component', () => {
  it('should add', () => {
    expect(new Cmp7912Component().add7912(1)).toBe(7913);
  });
});