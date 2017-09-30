
import { Cmp7874Component } from './cmp';
describe('Cmp7874Component', () => {
  it('should add', () => {
    expect(new Cmp7874Component().add7874(1)).toBe(7875);
  });
});