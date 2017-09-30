
import { Cmp7940Component } from './cmp';
describe('Cmp7940Component', () => {
  it('should add', () => {
    expect(new Cmp7940Component().add7940(1)).toBe(7941);
  });
});