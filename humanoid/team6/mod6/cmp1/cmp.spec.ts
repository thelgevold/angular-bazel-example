
import { Cmp7661Component } from './cmp';
describe('Cmp7661Component', () => {
  it('should add', () => {
    expect(new Cmp7661Component().add7661(1)).toBe(7662);
  });
});