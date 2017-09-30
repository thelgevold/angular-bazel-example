
import { Cmp7362Component } from './cmp';
describe('Cmp7362Component', () => {
  it('should add', () => {
    expect(new Cmp7362Component().add7362(1)).toBe(7363);
  });
});