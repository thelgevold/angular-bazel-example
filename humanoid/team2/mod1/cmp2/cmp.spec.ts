
import { Cmp7212Component } from './cmp';
describe('Cmp7212Component', () => {
  it('should add', () => {
    expect(new Cmp7212Component().add7212(1)).toBe(7213);
  });
});