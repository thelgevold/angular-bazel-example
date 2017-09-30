
import { Cmp1563Component } from './cmp';
describe('Cmp1563Component', () => {
  it('should add', () => {
    expect(new Cmp1563Component().add1563(1)).toBe(1564);
  });
});