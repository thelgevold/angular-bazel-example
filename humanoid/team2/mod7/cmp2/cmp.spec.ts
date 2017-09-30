
import { Cmp7272Component } from './cmp';
describe('Cmp7272Component', () => {
  it('should add', () => {
    expect(new Cmp7272Component().add7272(1)).toBe(7273);
  });
});