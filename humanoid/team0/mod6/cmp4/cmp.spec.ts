
import { Cmp7064Component } from './cmp';
describe('Cmp7064Component', () => {
  it('should add', () => {
    expect(new Cmp7064Component().add7064(1)).toBe(7065);
  });
});