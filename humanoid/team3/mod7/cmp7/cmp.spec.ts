
import { Cmp7377Component } from './cmp';
describe('Cmp7377Component', () => {
  it('should add', () => {
    expect(new Cmp7377Component().add7377(1)).toBe(7378);
  });
});