
import { Cmp7407Component } from './cmp';
describe('Cmp7407Component', () => {
  it('should add', () => {
    expect(new Cmp7407Component().add7407(1)).toBe(7408);
  });
});