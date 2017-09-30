
import { Cmp7160Component } from './cmp';
describe('Cmp7160Component', () => {
  it('should add', () => {
    expect(new Cmp7160Component().add7160(1)).toBe(7161);
  });
});