
import { Cmp7260Component } from './cmp';
describe('Cmp7260Component', () => {
  it('should add', () => {
    expect(new Cmp7260Component().add7260(1)).toBe(7261);
  });
});