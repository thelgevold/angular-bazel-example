
import { Cmp7411Component } from './cmp';
describe('Cmp7411Component', () => {
  it('should add', () => {
    expect(new Cmp7411Component().add7411(1)).toBe(7412);
  });
});