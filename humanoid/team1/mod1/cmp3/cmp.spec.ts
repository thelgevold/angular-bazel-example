
import { Cmp7113Component } from './cmp';
describe('Cmp7113Component', () => {
  it('should add', () => {
    expect(new Cmp7113Component().add7113(1)).toBe(7114);
  });
});