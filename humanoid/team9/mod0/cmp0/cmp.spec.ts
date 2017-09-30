
import { Cmp7900Component } from './cmp';
describe('Cmp7900Component', () => {
  it('should add', () => {
    expect(new Cmp7900Component().add7900(1)).toBe(7901);
  });
});