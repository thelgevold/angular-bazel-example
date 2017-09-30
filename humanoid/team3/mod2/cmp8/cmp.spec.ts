
import { Cmp7328Component } from './cmp';
describe('Cmp7328Component', () => {
  it('should add', () => {
    expect(new Cmp7328Component().add7328(1)).toBe(7329);
  });
});