
import { Cmp7105Component } from './cmp';
describe('Cmp7105Component', () => {
  it('should add', () => {
    expect(new Cmp7105Component().add7105(1)).toBe(7106);
  });
});