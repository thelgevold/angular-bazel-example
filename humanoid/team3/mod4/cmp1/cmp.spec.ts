
import { Cmp7341Component } from './cmp';
describe('Cmp7341Component', () => {
  it('should add', () => {
    expect(new Cmp7341Component().add7341(1)).toBe(7342);
  });
});