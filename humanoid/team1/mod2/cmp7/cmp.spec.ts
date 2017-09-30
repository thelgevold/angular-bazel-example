
import { Cmp7127Component } from './cmp';
describe('Cmp7127Component', () => {
  it('should add', () => {
    expect(new Cmp7127Component().add7127(1)).toBe(7128);
  });
});